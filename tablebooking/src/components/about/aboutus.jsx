import Bgimage from "../../assets/table.jpg";
import Services from "../Services/services";

const AboutPage = () => {
  const bgStyle = {
    backgroundImage: `url(${Bgimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center ">
        <header className="bg-custom-orange text-white w-full py-10 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2">Your gateway to a seamless dining experience!</p>
        </header>

        <main style={bgStyle} className="w-full container-fluid py-10 space-y-8 ">
         
          <section className="bg-white shadow-md rounded-lg px-10 py-3  custom-section">
            <h2 className="text-2xl font-semibold text-orange-500">Our Story</h2>
            <p className="mt-4 text-gray-700">
              Welcome to our restaurant table booking app! We’re passionate about
              connecting diners with their favorite restaurants, making the booking
              process effortless and stress-free.
            </p>
          </section>

        
          <section className="bg-white shadow-md rounded-lg px-10 py-3 mx-60 custom-section">
            <h2 className="text-2xl font-semibold text-orange-500">Why Choose Us?</h2>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Real-time table availability at your favorite restaurants.</li>
              <li>Quick and easy bookings with just a few clicks.</li>
              <li>Personalized recommendations based on your preferences.</li>
              <li>24/7 customer support to assist you anytime.</li>
            </ul>
          </section>

        
          <section className="bg-white shadow-md rounded-lg px-10 py-3 mx-60 custom-section">
            <h2 className="text-2xl font-semibold text-orange-500">Our Mission</h2>
            <p className="mt-4 text-gray-700">
              To revolutionize the dining experience by providing a user-friendly
              platform that brings convenience and joy to restaurant bookings.
            </p>
          </section>

     
          <section className="bg-white shadow-md rounded-lg px-10 py-3 mx-60 custom-section">
            <h2 className="text-2xl font-semibold text-orange-500">Meet the Team</h2>
            <p className="mt-4 text-gray-700">
              We are a group of food enthusiasts, developers, and designers committed
              to delivering the best experience to both diners and restaurant owners.
              Let’s make dining better, together!
            </p>
          </section>
        </main>
      </div>
      <Services />
    </div>
  );
};

export default AboutPage;