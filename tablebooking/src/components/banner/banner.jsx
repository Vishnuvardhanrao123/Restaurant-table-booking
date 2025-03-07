import image4 from "../../assets/2.png";

const Banner = () => {
  return (
    <>
      <div className='container py-14'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div className="flex justify-center items-center animate-fade-in-left">
            <img src={image4} alt="image" className="animate-zoom-in" />
          </div>
          
        
          <div className="py-4 px-4 flex flex-col justify-center animate-fade-in-right">
            <h1 className="text-4xl font-semibold text-gray-800 animate-slide-in-top">Food Is Always Good</h1>
            <p className="py-4 font-semibold animate-slide-in-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic culpa quam similique mollitia alias</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;