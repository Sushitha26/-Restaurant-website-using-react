import React from "react";
import star1 from "./star.jpg";
import star2 from "./star2.jpg";
import des1 from "./des1.jpg";
import des2 from "./des2.png";
import des3 from "./des3.jpg";
import star3 from "./satr3.jpg";
import dish1 from "./diash1.jpg";
import dish3 from "./dish3.jpeg";
import dish4 from "./dish4.jpeg";
import "./Style.css";
const Mainmenu = () => {
  return (
    <div>
      <div>
        <h1 className="text-black font-bold text-6xl font-Italianno mb-[10px]">
          Starters
        </h1>

        <img
          className="absolute h-32 w-32 top-[90px] ml-4  rounded-full border-2 border-black border-solid"
          src={star1} alt="star1"
        />
        <div className="bg-black text-white p-4 absolute top-[90px] left-40 mr-96">
          <h2 className="text-2xl font-semibold font-mono">
            Apricot Pixie Puffs
          </h2>
          <p className="text-lg font-mono">
            Delight in flaky puff pastries filled with a luscious apricot
            compote, perfectly balanced with a hint of forest herbs. Each bite
            is a whimsical journey, blending the sweetness of ripe apricots with
            the subtle freshness of enchanted greenery, making it a truly
            magical starter
          </p>
        </div>
        <img
          className="absolute h-32 w-32 ml-4 rounded-full border-2 top-[280px] border-black border-solid"
          src={star2} alt="star2"
        />
        <div className="bg-black top-[280px] text-white p-4 absolute left-40 mr-96 ">
          <h2 className="text-2xl font-semibold font-mono">
            Enchanted Forest Salad
          </h2>
          <p className="text-lg font-mono">
            Unearth the wonders of the enchanted woods with this vibrant salad,
            blending fresh baby greens with wild mushrooms, candied nuts, and
            seasonal berries, all kissed by a sparkling raspberry vinaigrette. A
            garden of flavors awaits.
          </p>
        </div>
        <img
          className="absolute h-32 w-32 ml-4 rounded-full border-2 top-[480px] border-black border-solid"
          src={star3} alt="star3"
        />
        <div className="bg-black top-[480px] text-white p-4 absolute left-40 mr-96 ">
          <h2 className="text-2xl font-semibold font-mono">
            Fairy Dust Crostini
          </h2>
          <p className="text-lg font-mono">
            Venture into a realm of taste with these dainty crostini, where each
            bite is a whimsical dance of herb-infused cheese, honey-glazed figs,
            and a delicate sprinkle of edible fairy dust. A magical prelude to
            your feast.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text- absolute top-[670px] left-[20px]  font-bold text-6xl font-Italianno mb-[10px]">
          Main Courses
        </h1>
        <img
          className="absolute h-[140px] w-32 rounded-full border-2 top-[750px] right-[20px] mr-4 border-black border-solid"
          src={dish1} alt="dish1"
        />
        <div className="bg-black top-[750px] left-[220px] text-white p-4 absolute  mr-[180px] ">
          <h2 className="text-2xl font-semibold font-mono">
            Mystic Mushroom Risotto
          </h2>
          <p className="text-lg font-mono">
            Journey through a creamy arborio rice landscape, imbued with the
            essence of forest mushrooms and a hint of white truffle oil.
            Finished with a sprinkle of fairy dust parmesan, this risotto is a
            celestial adventure in every spoonful.
          </p>
        </div>
        <img
          className="absolute h-[135px] w-32 top-[950px] right-[20px] mr-4 rounded-full border-2 border-black border-solid"
          src={dish3} alt="dish3"
        />
        <div className="bg-black top-[950px] left-[220px] text-white p-4 absolute  mr-[180px] ">
          <h2 className="text-2xl font-semibold font-mono">
            Starlight Seafood Medley
          </h2>
          <p className="text-lg font-mono">
            Dive into the depths of the ocean with our starlight seafood medley,
            where shrimp, scallops, and lobster mingle in a shimmering champagne
            sauce. Paired with moonlit asparagus, this dish captures the essence
            of a night under the stars.
          </p>
        </div>
        <img
          className="absolute h-[135px] w-32 top-[1150px] right-[20px] mr-4 rounded-full border-2 border-black border-solid"
          src={dish4} alt="dish4"
        />
        <div className="bg-black top-[1150px] left-[220px] text-white p-4 absolute  mr-[180px] ">
          <h2 className="text-2xl font-semibold font-mono">
            Wishing Well Veggie Delight
          </h2>
          <p className="text-lg font-mono">
            Cast your wishes on a hearty stew of enchanted vegetables, infused
            with magical herbs and spices. Served over ethereal pearl couscous,
            this dish is a celebration of nature’s bounty.
          </p>
        </div>
      </div>
      <div>
      <h1 className="text- absolute top-[1280px] left-[20px]  font-bold text-6xl font-Italianno mb-[30px]">
          Desserts
        </h1>
        <img
          className="absolute h-32 w-32 top-[1350px] ml-4 mt-2  rounded-full border-2 border-black border-solid"
          src={des1} alt="des1"
        />
        <div className="bg-black top-[1350px] mt-2 text-white p-4 absolute  left-40 mr-96">
          <h2 className="text-2xl font-semibold font-mono">
            Apricot Pixie Puffs
          </h2>
          <p className="text-lg font-mono">
            Delight in flaky puff pastries filled with a luscious apricot
            compote, perfectly balanced with a hint of forest herbs. Each bite
            is a whimsical journey, blending the sweetness of ripe apricots with
            the subtle freshness of enchanted greenery, making it a truly
            magical starter
          </p>
        </div>
        <img
          className="absolute h-32 w-32 ml-4 rounded-full border-2 top-[1550px] border-black border-solid"
          src={des2} alt="des2"
        />
        <div className="bg-black top-[1550px] text-white p-4 absolute left-40 mr-96 ">
          <h2 className="text-2xl font-semibold font-mono">
            Enchanted Forest Salad
          </h2>
          <p className="text-lg font-mono">
            Unearth the wonders of the enchanted woods with this vibrant salad,
            blending fresh baby greens with wild mushrooms, candied nuts, and
            seasonal berries, all kissed by a sparkling raspberry vinaigrette. A
            garden of flavors awaits.
          </p>
        </div>
        <img
          className="absolute h-32 w-32 ml-4 rounded-full border-2 top-[1750px] border-black border-solid"
          src={des3} alt="des3"
        />
        <div className="bg-black top-[1750px] text-white p-4 absolute left-40 mr-96 ">
          <h2 className="text-2xl font-semibold font-mono">
            Fairy Dust Crostini
          </h2>
          <p className="text-lg font-mono">
            Venture into a realm of taste with these dainty crostini, where each
            bite is a whimsical dance of herb-infused cheese, honey-glazed figs,
            and a delicate sprinkle of edible fairy dust. A magical prelude to
            your feast.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Mainmenu;
