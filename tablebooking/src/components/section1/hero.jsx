import Carousel from "react-bootstrap/Carousel";
import sandwich from '../../assets/sandwich.png';
import pizza from '../../assets/pizza.png';
import hero2 from '../../assets/hero2.png';
import image1 from "../../assets/rice.png";
import { useNavigate } from 'react-router-dom';


const Hero = ({ isLogin }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (isLogin) {
      navigate('/reservation');
    } else {
      navigate("/signup");
    }
  };

  const handlefooditems = () => {
    navigate("/categories");
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] pb-5">
        
      
        <div className="flex flex-col justify-center gap-7 text-center md:text-left pt-24 pb-10 md:p-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-start">
            Delicious Food Is Waiting For You
          </h1>
          <p className="font-semibold text-black text-left">
            We are offering a combination of flavors, textures, and aromas that can evoke happiness and comfort. From the rich, savory taste of a well-cooked steak to the sweet, indulgent bite of a freshly baked dessert, delicious food has the power to bring people together and create lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center sm:justify-start">
            <button onClick={handlefooditems} className="primary-btn hover:scale-110 duration-300 hover:bg-white hover:text-orange-500 w-full sm:w-auto">
              Food Menu
            </button>
            <button onClick={handleNavigation} className="secondary-btn text-black hover:scale-110 duration-300 hover:bg-orange-500 w-full sm:w-auto sm:mt-0">
              {isLogin ? "Book Table Now" : "Login to Reserve a Table"}
            </button>
          </div>
        </div>

      
        <div className="flex flex-col justify-center">
          <Carousel className="flex flex-col justify-center mx-auto">
            <Carousel.Item>
              <img src={sandwich} alt="First slide" className="w-full h-auto sm:w-96 sm:h-72 object-cover" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={pizza} alt="Second slide" className="w-full h-auto sm:w-96 sm:h-72 object-cover" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={hero2} alt="Third slide" className="w-full h-auto sm:w-96 sm:h-72 object-cover" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={image1} alt="Fourth slide" className="w-full h-auto sm:w-96 sm:h-72 object-cover" />
            </Carousel.Item>
          </Carousel>
        </div>

      </div>
    </div>
  );
};

export default Hero;
