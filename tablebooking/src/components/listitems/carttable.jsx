import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { useCart } from "../contextapi/cartcontext";
import { message } from "antd";

const Cart = () => {
  const { cartItems, removeItemFromCart } = useCart();
  const [counts, setCounts] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());
  const printRef = useRef();

  const handleRemoveItem = (itemName) => {
    removeItemFromCart(itemName);
  };

  
  const totalPrice = cartItems.reduce((total, item, index) => {
    const itemCount = counts[index] || item.quantity;
    return total + item.price * itemCount;
  }, 0);


  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer); 
  }, []);

  const handleCountChange = (index, newCount) => {
    if (newCount > 15) {
      message.error("Can't order more than 15 pieces");
      newCount = 15;
      return;
    }
    if (newCount < 1) return;
    setCounts((prevCounts) => ({ ...prevCounts, [index]: newCount }));
  };

  const handlePrint = () => {
    const printContent = printRef.current;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); 
  };


  const handlePayment = async () => {
    try {
      const response = await fetch(
        "https://restaurant-table-booking-gcfi-eight.vercel.app/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: totalPrice }),
        }
      );

      const { orderId } = await response.json();

      const options = {
        key: "rzp_test_K7NRyE8rha3ije",
        amount: totalPrice * 100,
        currency: "INR",
        order_id: orderId,
        name: "Eat-Food Restaurant",
        description: "Payment for cart items",
        handler: function (response) {
          console.log(response);
          message.success("Payment successful!");
        },
        prefill: {
          name: "Bandi Saikumar",
          email: "bandisaikumar9948@gmail.com",
          contact: "9948638817",
        },
        notes: {
          address: "address",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      message.error("Error initiating payment.");
    }
  };

  return (
    <div className="container cart">
      <div>
        <p className="text-4xl font-bold text-center pt-10 ">
          Eat- <span className="text-orange-500">Food</span>
        </p>
      </div>
      <h2>Your Cart</h2>
      <h5>Date : {currentTime.toLocaleString()}</h5>
      <table className="container border-2">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td className="flex gap-2">
                <button
                  className="bg-orange-500 p-2 rounded-s-full font-bold"
                  onClick={() =>
                    handleCountChange(
                      index,
                      (counts[index] || item.quantity) + 1
                    )
                  }
                >
                  +
                </button>
                <span className="text-2xl font-bold">
                  {counts[index] || item.quantity}
                </span>
                <button
                  className="bg-orange-500 p-2 rounded-e-full font-bold"
                  onClick={() =>
                    handleCountChange(
                      index,
                      (counts[index] || item.quantity) - 1
                    )
                  }
                >
                  -
                </button>
              </td>
              <td>
                Rs.{item.price.toFixed(2)}
                /-
              </td>
              <td>
                <button onClick={() => handleRemoveItem(item.name)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-right">Total Price: Rs.{totalPrice.toFixed(2)}/-</h3>
      <div className="flex justify-center gap-4 py-14">
        <Button variant="warning" onClick={handlePayment}>
          Order Now
        </Button>
        <Button variant="warning" onClick={handlePrint}>
          Download Invoice
        </Button>
      </div>

      <div style={{ display: "none" }}>
        <div ref={printRef}>
          <div>
            <p className="text-4xl font-bold text-center pt-10 ">
              Eat- <span className="text-orange-500">Food</span>
            </p>
          </div>
          <h2>Invoice</h2>
          <p>Date: {currentTime.toLocaleString()}</p>
          <table className="container border-2">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{counts[index] || item.quantity}</td>
                  <td>
                    Rs.
                    {(item.price * (counts[index] || item.quantity)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Price: Rs.{totalPrice.toFixed(2)}/-</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
