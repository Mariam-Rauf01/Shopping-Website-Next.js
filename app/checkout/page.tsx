"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";

const CheckOutPage = () => {
  const { cart, getTotalAmount } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    postalAddress: "",
    city: "",
    paymentMethod: "",
    cardNumber: "", // Add cardNumber to formData
    cardExpiry: "", // Add cardExpiry to formData
    cardCVC: "", // Add cardCVC to formData
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "",
    cardNumber: "", // Add cardNumber error state
    cardExpiry: "", // Add cardExpiry error state
    cardCVC: "", // Add cardCVC error state
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, paymentMethod: e.target.value }); // Update paymentMethod in formData
  };

  const handleOrder = () => {
    const errors = { name: "", email: "", address: "", paymentMethod: "", cardNumber: "", cardExpiry: "", cardCVC: "" };
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.paymentMethod) errors.paymentMethod = "Payment method is required.";
    
    // Validate credit card fields if Credit Card is selected
    if (formData.paymentMethod === "credit-card") {
      if (!formData.cardNumber) errors.cardNumber = "Card number is required.";
      if (!formData.cardExpiry) errors.cardExpiry = "Card expiry date is required.";
      if (!formData.cardCVC) errors.cardCVC = "Card CVC is required.";
    }

    setFormErrors(errors);

    if (Object.values(errors).some(error => error)) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate an order placement process
    toast.success(`Order placed successfully! Total: $${getTotalAmount()}`);
    router.push("/thank-you"); // Navigate to a "Thank You" page
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

        {/* Order Summary Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <ul className="space-y-4 mt-4">
            {cart.map((item, index) => (
              <li
                key={index} // Use the index as a unique key
                className="flex justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.price * (1 - item.discountPercentage / 100) * item.quantity)}
                </p>
              </li>
            ))}
          </ul>
          <h3 className="text-2xl font-bold mt-6">
            Total:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(getTotalAmount())}
          </h3>
        </div>

        {/* Shipping Details Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md ${formErrors.name ? "border-red-600" : ""}`}
            />
            {formErrors.name && <p className="text-red-600 text-sm">{formErrors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md ${formErrors.email ? "border-red-600" : ""}`}
            />
            {formErrors.email && <p className="text-red-600 text-sm">{formErrors.email}</p>}

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md ${formErrors.address ? "border-red-600" : ""}`}
            />
            {formErrors.address && <p className="text-red-600 text-sm">{formErrors.address}</p>}

            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="postalAddress"
              placeholder="Postal Address"
              value={formData.postalAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </form>
        </div>

        {/* Payment Method Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handlePaymentMethodChange}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select a payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
          {formErrors.paymentMethod && <p className="text-red-600 text-sm">{formErrors.paymentMethod}</p>}
        </div>

        {/* Credit Card Information Section */}
        {formData.paymentMethod === "credit-card" && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Credit Card Information</h2>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md ${formErrors.cardNumber ? "border-red-600" : ""}`}
            />
            {formErrors.cardNumber && <p className="text-red-600 text-sm">{formErrors.cardNumber}</p>}

            <input
              type="text"
              name="cardExpiry"
              placeholder="Expiry Date (MM/YY)"
              value={formData.cardExpiry}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md ${formErrors.cardExpiry ? "border-red-600" : ""}`}
            />
            {formErrors.cardExpiry && <p className="text-red-600 text-sm">{formErrors.cardExpiry}</p>}

            <input
              type="text"
              name="cardCVC"
              placeholder="CVC"
              value={formData.cardCVC}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md ${formErrors.cardCVC ? "border-red-600" : ""}`}
            />
            {formErrors.cardCVC && <p className="text-red-600 text-sm">{formErrors.cardCVC}</p>}
          </div>
        )}

        {/* Buttons Section */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
            onClick={() => router.push("/cart")}
          >
            Back to Cart
          </button>
          <button
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOutPage;