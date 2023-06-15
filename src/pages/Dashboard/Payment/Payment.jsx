import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../CheckOutForm/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);

const Payment = () => {
    const singlClass=useLoaderData();
    return (
        <div>
           <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm singlClass={singlClass}/>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;