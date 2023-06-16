import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../CheckOutForm/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);

const Payment = () => {
    const location=useLocation();
    console.log(location.state);
    
    return (
        <div className="w-[50%]">
           
            <Elements stripe={stripePromise}>
                <CheckoutForm singleClass={location.state}/>
            </Elements>
           
           
        </div>
    );
};

export default Payment;