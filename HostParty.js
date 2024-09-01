import React from "react";
import background from "./back.jpg";
import { Link } from "react-router-dom";
import table2 from "./table2.webp";
import table4 from "./table4.jpg";

const HostParty = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat bg-fixed "
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex flex-col gap-5 p-14 items-center">
          <h1 className="text-5xl font-mono font-bold text-center text-white">
            Hey Dream Weavers and Magic Makers! ❤
          </h1>
          <p className="text-white text-2xl w-2/3 text-center font-semibold font-sans ">
            Ready to turn your special occasion into a fairy-tale adventure? At
            Whimsy Haven, we don't just host events—we create enchanting
            experiences that will leave you and your guests spellbound. Whether
            it's an intimate gathering or a grand celebration, our venue is the
            perfect canvas for your most magical memories.
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="max-w-sm mt-8 ml-6 mr-4  overflow-hidden p-9 shadow-lg transition border-black border-4 rounded-xl duration-300 ease-in-out transform hover:scale-105">
          <h1 className="text-3xl font-bold mb-4">A Whimsical Setting</h1>
          <p className="text-gray-600 text-lg">
            Nestled in the heart of Magicland, Whimsy Haven is the ideal
            backdrop for an extraordinary dining experience. Our uniquely
            designed space brims with charm and character, creating a fairy-tale
            atmosphere that's perfect for any occasion.
          </p>
        </div>
        <div className="max-w-sm mt-8 ml-6 mr-4  overflow-hidden p-9 shadow-lg transition border-black border-4 rounded-xl duration-300 ease-in-out transform hover:scale-105">
          <h1 className="text-3xl font-bold mb-4">
            Enchanting Culinary Delights
          </h1>
          <p className="text-gray-600 text-lg">
            Our culinary wizards craft a diverse menu that caters to every
            taste. From whimsical brunch delights to enchanting evening feasts,
            each dish is sprinkled with a touch of magic, making every bite an
            experience to remember.
          </p>
        </div>
        <div className="max-w-sm mt-8 ml-6 mr-4  overflow-hidden p-9 shadow-lg transition border-black border-4 rounded-xl duration-300 ease-in-out transform hover:scale-105">
          <h1 className="text-3xl font-bold mb-4">Tailored to Your Dreams</h1>
          <p className="text-gray-600 text-lg">
            Whether it's a lively reception or an intimate dinner, our event
            planners work with you to customize every detail to your desires. We
            can accommodate various party sizes and create the perfect layout to
            bring your vision to life.
          </p>
        </div>
        <div className="max-w-sm mt-8 ml-6 mr-4  overflow-hidden p-9 shadow-lg transition border-black border-4 rounded-xl duration-300 ease-in-out transform hover:scale-105">
          <h1 className="text-3xl font-bold mb-4">Magical Service</h1>
          <p className="text-gray-600 text-lg">
            At Whimsy Haven, hospitality is woven into every moment. Our
            dedicated team ensures that every guest is treated with care, making
            your private event seamless and truly enchanting.
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="max-w-sm mt-8 ml-6 mr-4  overflow-hidden p-9 shadow-lg transition border-black border-4 rounded-xl duration-300 ease-in-out transform hover:scale-105">
          <h1 className="text-3xl font-bold mb-4">
            Exclusive Use of Our Enchanted Spaces
          </h1>
          <p className="text-gray-600 text-lg">
            When you choose Whimsy Haven, you gain exclusive access to our
            magical venue, allowing your guests to enjoy the festivities in a
            private and intimate setting without any interruptions.
          </p>
        </div>
        <div className="max-w-sm mt-8 ml-6 mr-4  overflow-hidden p-9 shadow-lg transition border-black border-4 rounded-xl duration-300 ease-in-out transform hover:scale-105">
          <h1 className="text-3xl font-bold mb-4">
            Unforgettable Celebrations
          </h1>
          <p className="text-gray-600 text-lg">
            From cozy family gatherings to grand corporate events, Whimsy Haven
            has been the stage for countless magical moments, creating cherished
            memories for our guests.
          </p>
        </div>
        <div className="max-w-sm mt-8 ml-6 mr-4  overflow-hidden p-9 shadow-lg transition border-black border-4 rounded-xl duration-300 ease-in-out transform hover:scale-105">
          <h1 className="text-3xl font-bold mb-4">
            A/V Support for Your Event
          </h1>
          <p className="text-gray-600 text-lg">
            Need a touch of magic with your presentations or speeches? Our team
            is here to provide all the audio and visual support you need,
            turning your event into a spellbinding experience.
          </p>
        </div>
      </div>
      <h1 className="font-extrabold font-mono text-6xl text-center mt-20">
        EVENT SPACES
      </h1>
      <div className="flex gap-3 items-center justify-center">
        <div className="max-w-sm mt-8 bg-black ml-6 mr-4  overflow-hidden p-9 shadow-lg transition border-black border-4 rounded-xl duration-300 ease-in-out transform hover:scale-105">
          <img alt="table2" src={table2} className="rounded-2xl mb-4" />

          <h1 className="text-3xl text-white font-bold mb-4">
            The Enchanted Garden
          </h1>
          <p className="text-white text-lg">
            Our outdoor space, surrounded by lush greenery and twinkling lights,
            is perfect for up to 50 guests. Choose from plated or buffet-style
            menus to make your event magical.
          </p>
          <Link to="/book">
            <button className="border-2 border-white  font-semibold text-white font-semibold  text-xl p-1 rounded-lg ml-16 mt-4">
              Know more
            </button>
          </Link>
        </div>
        <div className="max-w-sm mt-8 ml-6  mr-4 bg-black  overflow-hidden p-14 shadow-lg transition border-black border-4 rounded-xl duration-300 ease-in-out transform hover:scale-105">
          <img
            alt="table4"
            src={table4}
            className="rounded-2xl mb-4 h-[200px]"
          />
          <h1 className="text-3xl  text-white font-bold mb-4">The Cozy Nook</h1>
          <p className=" text-white text-lg">
            A semi-private area ideal for intimate gatherings of up to 40
            guests. Enjoy whimsical food and drinks in a cozy, enchanting
            setting.
          </p>
          <Link to="/book">
            <button className="border-2 border-white  font-semibold text-white text-xl p-1 rounded-lg ml-16 mt-4">
              Know more
            </button>
          </Link>
        </div>
      </div>
      <footer className="flex flex-col justify-center items-center mt-28     gap-4">
        <h1 className="text-3xl font-semibold">Manage Preferences</h1>
        <p className="text-3xl font-sans">
          Follow us on <span className="text-sky-600">Instagram</span> |
          <span className="text-sky-600">Facebook</span> |
          <span className="text-sky-600">Careers</span> |
          <span className="text-sky-600">Gift Cards</span> |
          <span className="text-sky-600">Privacy Policy</span> |
          <span className="text-sky-600">Press</span> |
          <span className="text-sky-600">Contact</span>
        </p>
      </footer>
    </div>
  );
};

export default HostParty;
