import { Center, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import "../App.css";

const Checkout = () => {
  const publicKey = import.meta.env.VITE_APP_API;
  // const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const amount = useSelector((state) => state.cart.total);

  const componentProps = {
    email,
    amount: amount * 100,
    currency: "GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };
  return (
    <Center minH="90vh">
      <div className="checkout-form">
        <Text>GHS: {amount}</Text>
        <div className="checkout-field">
          <label style={{ color: "gray" }}>Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="checkout-field">
          <label style={{ color: "gray" }}>Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="checkout-field">
          <label style={{ color: "gray" }}>Phone</label>
          <input
            type="text"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <PaystackButton className="paystack-button" {...componentProps} />
      </div>
    </Center>
  );
};

export default Checkout;
