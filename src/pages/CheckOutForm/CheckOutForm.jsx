
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckOutForm.css'
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/UseAxiosSecure";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from 'react-icons/im'

const CheckoutForm = ({closeModal,singleClass}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError]=useState('');
    const {user}=useAuth();
    const [clientSecret,setClientSecret]=useState("");
    const [axiosSecure]=useAxiosSecure();
    const navigate=useNavigate();
    const [transactionId,setTransactionId]=useState("");
    const [processing, setProcessing] = useState(false)
    
    console.log(singleClass);
   console.log(clientSecret);
   
    useEffect(()=>{
        if(singleClass?.price && !!localStorage.getItem("access-token")){
            axiosSecure.post("/create-payment-intent", {price: singleClass?.price})
            .then((res)=> {
                setClientSecret(res.data.clientSecret);
            });

        }
    },[singleClass,axiosSecure])
  
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }
      setProcessing(true);
       // confirmedPayment
   const {paymentIntent, error: confirmError}= 
   await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name: user?.displayName || 'unknown',
        email: user?.email || 'anonymous',
      },
    },
  })


  if (confirmError) {
    console.log('[error]', confirmError);
    setCardError(confirmError.message)
  } else {

    console.log('[paymentIntent]', paymentIntent);
    setProcessing(false);

    
    if(paymentIntent.status==="succeeded"){
        alert(' payment succes');
        setTransactionId(paymentIntent.id);
    // save payment in db
    const {_id,...Obj}=singleClass;
    const paymentInfo={
        ...Obj,
        transactionId:paymentIntent.id,
        date: new Date(),
    };
    axiosSecure.post("/payments", paymentInfo)
    .then((res)=>{
        if(res.data.insertResult.insertedId){
            const text=`Enrolled Successfull!,TransactionId:${paymentIntent.id}`;
            toast.success(text);
            navigate("/dashboard/enrolledClass");
        }
    });

    }
  }
}


   
  
    return (
      <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
          
        />
         <div className="grid md:grid-cols-2">
         <button
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={!stripe || !clientSecret || processing}
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
            {processing ? (
              <ImSpinner9 className='m-auto animate-spin' size={24} />
            ) : (
              `Pay $${singleClass.price}`
            )}
          </button>
         </div>
        
         
        
        
      </form>
      
      { cardError && <p className="text-red-600 ml-8  ">{cardError}</p>}
        {transactionId && (
            <p className="text-green-500 mt-4 ml-8">
            TransactionComplete with transactionId:{transactionId}</p>
        )}
      
      </>
    );
  };

  export default CheckoutForm