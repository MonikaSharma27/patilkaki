import React from "react";
import image2 from "../images/homeback.png";
import image3 from "../images/heroimg.png";
import image4 from "../images/specialimg.jpeg";
import image5 from "../images/healthimg.png";
import image6 from "../images/traditionalimg.png";
import image7 from "../images/snackimg.png";
import image8 from "../images/ladoosimg.png";
import image9 from "../images/chakli.jpg";
import image10 from "../images/puranpoliimg.jpg";
import image11 from "../images/modak.jpg";
import image12 from "../images/kachori.jpg";
import image13 from "../images/chivda.jpg";

const sliderData = [
  {
    image: image9,
    name: "Bhajani Chakli",
    price: "169",
  },
  {
    image: image10,
    name: "Handmade Puranpoli",
    price: "199",
  },
  {
    image: image11,
    name: "Handmade Ukadiche Modak",
    price: "219",
  },
  {
    image: image12,
    name: "Kachori",
    price: "169",
  },
];

const Home = () => {
  return (
    <div>
      <div className="mt-32 ">
        <img className="h-96 sm:h-auto" src={image2} />
      </div>

      <div className="flex flex-col mt-9 items-center justify-center text-gray-700 md:w-[80vw] md:mx-auto">
        <p className="font-bold text-lg text-center lg:text-3xl">
          Bringing ‘Maa-ke-haath’ ka khana to your doorstep!
        </p>
        <p className="text-sm text-center mt-6 p-2 lg:text-lg lg:pl-16 lg:pr-16">
          Our home made snacks are the way to bring you quality binge-time
          experiences. We’ve stocked a range of yummy goodies that will enliven
          your taste buds and make you come back for more
        </p>
        <img className="mt-8 " src={image3} />
      </div>

      <div className="mt-14 md:w-[80vw] md:mx-auto ">
        <h1 className="text-center font-bold text-gray-700 mb-14 lg:text-3xl">
          Snacks by Category{" "}
        </h1>
        <div className="md:flex ">
          <div className="left p-6 ">
            <img src={image4} />
          </div>
          <div className="right grid grid-cols-2 gap-6 p-6 text-sm font-medium text-gray-700">
            <div className="bg-pink-100">
              <h1 className="pt-2 pl-2">#Healthy</h1>
              <img src={image5} />
            </div>
            <div className="bg-blue-100">
              <h1 className="pt-2 pl-2">#OfficeSnacking</h1>
              <img src={image7} />
            </div>
            <div className="bg-orange-100">
              <h1 className="pt-2 pl-2">#Traditional</h1>
              <img src={image6} />
            </div>
            <div className="bg-yellow-100">
              <h1 className="pt-2 pl-2">#Laddoos</h1>
              <img src={image8} />
            </div>
          </div>
        </div>
      </div>



      <div className="mt-14 sm:w-[80vw] sm:mx-auto ">
        <h1 className="text-center font-bold text-gray-700 mb-14 sm:text-xl md:text-3xl ">
          Most Loved Snacks
        </h1>
        <div className="grid grid-cols-2 gap-2 p-3 rounded-md m-1 sm:grid-cols-3 lg:grid-cols-4 ">

          {sliderData.map((item, key) => (
            <div key={key} className="shadow-lg m-2 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl -z-10">
              <img
                className="w-full h-48 object-cover"
                key={key}
                src={item.image}
                alt={item.name}
              />
              <div className="p-4">
                <p className="text-orange-600 font-semibold text-lg truncate">
                  {item.name}
                </p>
                <div className="flex items-center flex-col md:flex-row justify-between mt-3">
                  <p className="text-lg font-medium text-gray-700">
                    &#x20b9;{item.price}
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-orange-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


       <div className="bg-slate-200 mt-14 pb-5 " >
        <h1 className="text-center sm:text-xl md:text-3xl font-bold text-gray-700 pt-5 mb-10">Something for every #Ghar </h1>
        <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 md:grid-cols-4 sm:w-[80vw] sm:mx-auto  ">
        <div className="m-2 rounded-lg shadow-lg bg-white">
          <img className="w-full h-24 object-cover rounded-tl-md rounded-tr-md" src={image13}/>
          <h2 className="font-bold text-sm pl-2 pr-2 pt-2">Tasty Namkeens</h2>
          <p className="text-sm pl-2 pr-2 pb-2">Whether it's evening chai or a late night binge, our namkeen won't disappoint.</p>
        </div>
        <div className="m-2 rounded-lg shadow-lg bg-white">
          <img className="w-full h-24 object-cover rounded-tl-md rounded-tr-md" src={image12}/>
          <h2 className="font-bold text-sm pl-2 pr-2 pt-2">Healthy Snacks</h2>
          <p className="text-sm pl-2 pr-2 pb-2">Weight lose kar rahe ho ya dole shole bana rahe ho? We've got something for you too.</p>
        </div>
        <div className="m-2 rounded-lg shadow-lg bg-white">
          <img className="w-full h-24 object-cover rounded-tl-md rounded-tr-md" src={image9}/>
          <h2 className="font-bold text-sm pl-2 pr-2 pt-2">Authentic Maharashtrian</h2>
          <p className="text-sm pl-2 pr-2 pb-2">Your search for authentic, damdaar and flavourful Maharashtrian snacks stops here.</p>
        </div>
        <div className="m-2 rounded-lg shadow-lg bg-white">
          <img className="w-full h-24 object-cover rounded-tl-md rounded-tr-md" src={image11}/>
          <h2 className="font-bold text-sm pl-2 pr-2 pt-2">Tasty Ladoo's</h2>
          <p className="text-sm pl-2 pr-2 pb-2">Find the Top Ladoo's required for every occasion.</p>
        </div>
        </div>
       


      
       </div>
    </div>
  );
};

export default Home;
