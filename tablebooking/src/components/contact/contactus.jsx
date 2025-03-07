import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";  
import { IoRestaurantOutline } from "react-icons/io5"; 
import axios from "axios";
import { useState } from "react"; 
import Services from "../Services/services";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
     
      const response = await axios.post(
        "https://signup-login-data-a4f69-default-rtdb.firebaseio.com/support.json",
        formData
      );

      console.log("Data submitted successfully:", response.data);

      
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (

    <div>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
     
      <header className="bg-orange-500 text-white w-full py-10 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2">
          Have questions? We’re here to help. Get in touch with us!
        </p>
      </header>

     
      <main className="w-full max-w-4xl px-6 py-10 space-y-8">
        
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-orange-500">Send Us a Message</h2>
          <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
          
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

           
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                rows="5"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

        
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </section>

       
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-orange-500">Contact Details</h2>
          <div className="mt-4 space-y-4">
            <p className="text-gray-700 flex">
              <span className="font-medium text-orange-500 mt-1"><IoRestaurantOutline /> </span>  Road No:2 KPHB, Hyderabad, Telangana, India
            </p>
            <p className="text-gray-700 flex">
              <span className="font-medium text-orange-500 mt-1"><FiPhoneCall /> </span>   +91 9948638817
            </p>
            <p className="text-gray-700 flex">
              <span className="font-medium text-orange-500 mt-1"><MdOutlineMail /> </span>  support@tablebooking.com
            </p>
          </div>
        </section>
      </main>

     
    </div>
    <Services/>
    </div>
  );
};

export default ContactPage;
