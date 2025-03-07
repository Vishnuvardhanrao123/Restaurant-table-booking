import image1 from "../../assets/3.png";
import image2 from "../../assets/4.png";
import image3 from "../../assets/5.png";

const fooddata = [
  {
    id: 1,
    image: image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Pizza",
    desc: "A delicious pizza with a variety of toppings.",
  },
  {
    id: 2,
    image: image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Pizza",
    desc: "A delicious pizza with a variety of toppings.",
  },
  {
    id: 3,
    image: image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Pizza",
    desc: "A delicious pizza with a variety of toppings.",
  },
];

const Items = () => {
  return (
    <div className="container py-14">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {fooddata.map((a, b) => {
          return (
            <div
              key={b}
              className="bg-white/50 rounded-3xl p-3 hover:scale-110 transition duration-150 cursor-pointer"
            >
              <img
                src={a.image}
                alt="image"
                className="w-48 h-48 mx-auto object-cover rounded-full img-shadow "
              />
              <div className="space-y-2">
                <p className="">{a.rating}</p>
                <h2 className="text-2xl font-semibold">{a.name}</h2>
                <p>{a.desc}</p>
                <h4 className="text-lg font-semibold">{a.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Items;
