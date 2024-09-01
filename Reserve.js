import React from "react";
import "./Style.css";
import table1 from "./table1.jpg";
import table3 from "./table3.png";
import table2 from "./table2.avif";
import table4 from "./table4.jpg";
const Reserve = () => {
  return (
    <div>
      <div className="ml-40 mr-40">
        <div className="mb-44">
          <h1 className="text-black text-6xl font-extrabold font-Vans text-center mb-44">
            ETHEREAL DINING SPACES
          </h1>
        </div>
        <div className="border-4 border-solid border-black mb-44 rounded-2xl py-20 px-10">
          <h1 className="text-gray-900 text-8xl font-extrabold font-Vans text-center ml-[80px] absolute top-[180px] left-[300px]">
            CLASSIC HEAVEN
          </h1>
          <img className="h-[450px] ml-[250px] mb-10" src={table1} alt="table1" />
          <div className="flex gap-20">
            <h3 className="text-5xl font-bold font-Vans">CLASSIC HEAVEN</h3>
            <p className="text-xl font-medium">
              For those who appreciate the timeless charm of a traditional
              dining experience, our Classic Haven offers a warm and inviting
              atmosphere. This elegant setting features beautifully arranged
              tables, comfortable seating, and a touch of whimsy in the décor.
              It's the perfect place to enjoy a delicious meal with family and
              friends, enveloped in the enchanting ambiance of Whimsy Haven.
            </p>
          </div>
          <div className="flex gap-20 justify-center items-center mt-8">
          <button className="bg-black text-white p-4 text-lg rounded-xl">Know More</button>
          <button className="bg-black text-white p-4 text-lg rounded-xl"onClick={() => (window.location.href = "/reservations")}>Book table</button>
          </div>
        </div>

        <div className="border-4 border-solid border-black mb-44 rounded-2xl py-20 px-10">
          <h1 className="text-gray-800 text-8xl font-extrabold font-Vans text-center ml-[80px] absolute top-[1250px] left-[340px]">
            PARTY ENCLAVE
          </h1>
          <img className="h-[480px] w-[800px] ml-[260px] mb-10" src={table3} alt="table3" />
          <div className="flex gap-20">
            <h3 className="text-5xl font-bold font-Vans">PARTY ENCLAVE</h3>
            <p className="text-xl font-medium">
              Step into the Party Enclave, a vibrant and festive corner of
              Whimsy Haven where celebrations come alive. Draped in twinkling
              fairy lights and adorned with whimsical decorations, this space is
              perfect for joyous gatherings and unforgettable moments. Whether
              it's a birthday bash or a jubilant reunion, the Party Enclave
              promises to enchant and delight every guest.
            </p>
          </div>
          <div className="flex gap-20 justify-center items-center mt-8">
          <button className="bg-black text-white p-4 text-lg rounded-xl  ">Know More</button>
          <button className="bg-black text-white p-4 text-lg rounded-xl"onClick={() => (window.location.href = "/reservations")}>Book table</button>
          </div>
        </div>

        <div className="border-4 border-solid border-black mb-44 rounded-2xl py-20 px-10">
          <h1 className="text-gray-900 text-8xl font-extrabold font-Vans text-center absolute top-[2340px] left-[230px]">
            ENCHANTED TERRACE
          </h1>
          <img className="h-[450px] w-[980px] ml-[100px] mb-10" src={table2} alt="table2" />
          <div className="flex gap-20">
            <h3 className="text-5xl font-bold font-Vans"> ENCHANTED TERRACE</h3>
            <p className="text-xl font-medium">
              Breathe in the fresh air and bask in the beauty of nature at our
              Enchanted Terrace. This outdoor dining area is a whimsical garden
              paradise, surrounded by lush greenery and illuminated by gentle
              lanterns. Perfect for those who love the great outdoors, the
              Enchanted Terrace offers a magical dining experience under the
              stars, where every meal feels like a fairy tale.
            </p>
          </div>
          <div className="flex gap-20 justify-center items-center mt-8">
          <button className="bg-black text-white p-4 text-lg rounded-xl">Know More</button>
          <button className="bg-black text-white p-4 text-lg rounded-xl"onClick={() => (window.location.href = "/reservations")}>Book table</button>
          </div>
        </div>

        <div className="border-4 border-solid border-black mb-44 rounded-2xl py-20 px-10">
          <h1 className="text-gray-800 text-8xl font-extrabold font-Vans text-center ml-[80px] absolute top-[3400px] left-[450px]">
            COZY NOOK
          </h1>
          <img className="h-[480px] w-[800px] ml-[220px] mb-10" src={table4} alt="table4" />
          <div className="flex gap-20">
            <h3 className="text-5xl font-bold font-Vans">COZY NOOK</h3>
            <p className="text-xl font-medium">
              Experience the magic of intimacy in our Cozy Nook, a private haven
              designed for those who seek a serene and enchanting dining
              experience. Tucked away from the bustle, this charming alcove is
              adorned with soft, ambient lighting and plush seating, creating
              the perfect atmosphere for a romantic date or a quiet dinner with
              loved ones. Enjoy your meal in a cocoon of comfort and charm.
            </p>
          </div>
          <div className="flex gap-20 justify-center items-center mt-8">
          <button className="bg-black text-white p-4 text-lg rounded-xl">Know More</button>
          <button className="bg-black text-white p-4 text-lg rounded-xl" onClick={() => (window.location.href = "/reservations")}>Book table</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-black text-white font-serif  font-medium text-2xl p-24">
        <h2>
          At Whimsy Haven, every dining experience is a journey into a world of
          enchantment and delight. Whether you're celebrating a joyous occasion
          in the vibrant Party Enclave, seeking a serene escape in the Cozy
          Nook, enjoying the beauty of nature at the Enchanted Terrace, or
          savoring the classic elegance of the Classic Haven, we invite you to
          indulge in a magical dining adventure.
        </h2>
        <h2>
          Choose your perfect setting and let us craft an unforgettable
          experience for you and your loved ones. Reserve your table today and
          step into a realm of whimsy and wonder.
        </h2>
        <button
          className="bg-white text-black text-5xl font-mono font-bold mt-6 ml-[500px] rounded-2xl mr-[500px] border-4 border-white border-solid hover:bg-black hover:text-white"
          onClick={() => (window.location.href = "/reservations")}
        >
          RESERVATION
        </button>
      </div>
    </div>
  );
};

export default Reserve;
