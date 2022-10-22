import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {

    return (
        <PayPalButtons
            style={{
                color: "silver",
                layout: "vertical",
                height: 40,
                tagline: false,
                shape: "pill"
            }}
        />
    );
};

export default PaypalCheckoutButton;