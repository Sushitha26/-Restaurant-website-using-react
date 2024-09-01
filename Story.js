import React from "react";
import line from "./line.png";
import line2 from "./straightline.png";
import chef from "./chef1.webp";
import main from "./main.jpg";
import founder from "./founder.jpg";
import staff from "./staff.jpg";
import "./Style.css";
import { Button } from "@mui/material";
const Story = () => {
  return (
    <div className="mx-5 my-4">
      <div>
        <img className="h-6 w-[1900px]" src={line2} alt="line2" />
        <p className="font-extrabold text-sm">@Whinsy Heaven | SINCE 1987</p>
        <img className="h-6 w-[1900px]" src={line2} alt="line2" />
        <h1 className="font-Rubik Mono One text-center text-6xl font-extrabold">
          OUR STORY
        </h1>
        <img className="h-6 w-[1900px]" src={line2} alt="line2" />
        <div className="flex">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-3xl">THE BEGINNING</h1>
            <h4 className="font-semibold text-xl">The Dreams Take Flight</h4>
            <p className="text-lg w-1/4 text-justify ">
              Whimsy Haven was born from a dream to create a place where the
              magic of fairy tales comes to life. Inspired by enchanting stories
              and a love for whimsical adventures, our founder envisioned a
              dining experience that transports guests to a world of wonder and
              delight.
            </p>
            <img className="h-[230px] w-[400px]" src={staff} />
            <p className="text-lg w-1/4 text-justify absolute top-[700px]">
              Our journey began with a simple yet profound idea: to craft a
              space where every detail exudes charm and enchantment. From the
              twinkling fairy lights to the lush, whimsical decor, every element
              of Whimsy Haven was meticulously designed to evoke the beauty and
              wonder of a fairy tale.
            </p>
          </div>
          <img
            className="absolute left-[480px] h-[700px] w-[40px]"
            src={line}
          />
          <img
            src={main}
            className="h-[400px] w-[550px] absolute left-[580px]"
          />
          <div className="flex flex-col gap-6 absolute left-[1250px]">
            <h1 className="font-bold text-3xl">CRAFTING THE MAGIC</h1>
            <h4 className="font-semibold text-xl"> Creating Enchantment</h4>
            <p className="text-lg w-3/4 text-justify ">
              At Whimsy Haven, every detail is crafted with care and
              imagination. From the twinkling lights that adorn our Party
              Enclave to the lush greenery of our Enchanted Terrace, our team of
              talented artists, designers, and chefs work tirelessly to create a
              truly magical atmosphere. "We wanted to create a space where every
              corner tells a story," says our founder. "A place where guests can
              escape reality and immerse themselves in enchantment."
            </p>
          </div>
          <img
            className="h-[300px] w-[300px] absolute right-[80px] top-[680px]"
            src={founder}
          />
          <img
            className="absolute left-[1200px] h-[500px] w-[40px]"
            src={line}
          />
          <div className="flex flex-col gap-6 absolute top-[580px] left-[540px]">
            <h1 className="font-bold text-3xl">THE WHIMSY EXPERIENCE</h1>
            <h4 className="font-semibold text-xl">Where Dreams Come True</h4>
            <p className="text-lg w-3/5 text-justify mt-2 ">
              When you step into Whimsy Haven, you're entering a world where
              dreams come true. Whether you're celebrating in the vibrant Party
              Enclave, enjoying a romantic evening in the Cozy Nook, or dining
              under the stars in the Enchanted Terrace, every experience is
              designed to be unforgettable. Our guests often share their stories
              of magical moments, and we take pride in creating a place where
              memories are made.
            </p>
          </div>
          <div className="flex flex-col gap-6 absolute top-[900px] ">
            <h1 className="font-bold text-3xl">THE WHIMSY EXPERIENCE</h1>
            <h4 className="font-semibold text-xl">Where Dreams Come True</h4>
            <p className="text-lg  text-justify w-2/5 ">
              When you step into Whimsy Haven, you're entering a world where
              dreams come true. Whether you're celebrating in the vibrant Party
              Enclave, enjoying a romantic evening in the Cozy Nook, or dining
              under the stars in the Enchanted Terrace, every experience is
              designed to be unforgettable. Our guests often share their stories
              of magical moments, and we take pride in creating a place where
              memories are made.
            </p>
            <img className="h-8 w-[1900px]" src={line2} alt="line2" />
          </div>
          <div className="flex flex-col gap-6 absolute top-[890px] left-[800px] bg-black text-white p-4 rounded-2xl items-center  ">
            <h1 className="font-bold text-3xl">BECOME A PART OF OUR STORY</h1>
            <p className="text-lg  text-justify w-4/5 ">
              Follow us on social media, sign up for our newsletters, and share
              your own magical moments at Whimsy Haven. Leave a review, post
              your photos, and join our growing community of enchanted diners.
              We can't wait to hear your stories and see how Whimsy Haven has
              touched your heart.
            </p>

            {/* <button className="bg-white text-black p-2 rounded-lg font-bold">
  Subscribe To Our newsletter
</button> */}
            <a href="mailto:your-email@example.com">
              <Button variant="contained"> Subscribe To Our newsletter</Button>
            </a>
          </div>

          {/* <img className="h-8 w-[1600px]" src={line2} alt="line2" /> */}

          <div className="flex flex-col gap-6 absolute top-[1240px] ">
            <h1 className="font-bold text-3xl">MEET THE TEAM</h1>
            <h4 className="font-semibold text-xl"> The Magical Makers</h4>
            <p className="text-lg  text-justify w-1/5 ">
              At Whimsy Haven, our team is the heart and soul of our enchanting
              dining experience. Meet the talented individuals who bring magic
              to life, from crafting delightful dishes to creating whimsical
              decor and ensuring every guest feels like royalty.
            </p>
            {/* <img className="h-8 w-[1600px]" src={line2} alt="line2" /> */}
          </div>
        </div>
      </div>
      <div className=" absolute top-[1250px] left-[720px] rounded-xl  ">
        <img className="w-48 h-48 " src={chef} />
        <h2 className="font-bold text-xl mt-4">
          Chef Elara - The Culinary Enchantress
        </h2>
        <p className="w-2/5 font-medium">
          <span className="font-semibold">Bio:</span> With a background in
          gourmet cuisine and a flair for magical flavors, Chef Elara leads our
          kitchen with creativity and passion. She draws inspiration from fairy
          tales and nature, crafting dishes that are as beautiful as they are
          delicious.
        </p>
        <p className="w-2/5 font-medium">
          <span className="font-semibold">Fun Fact:</span> Chef Elara loves to
          forage for wild herbs and flowers, often incorporating them into her
          enchanting recipes.
        </p>
      </div>
      <div className=" absolute top-[1250px] left-[1220px] rounded-xl  ">
        <img className="w-48 h-48 " src={chef} />
        <h2 className="font-bold text-xl mt-4">Luna - The Whimsy Designer</h2>
        <p className="w-6/6 font-medium">
          <span className="font-semibold">Bio:</span> Luna is the visionary
          behind the enchanting decor at Whimsy Haven. With a degree in interior
          design and a love for all things whimsical, she transforms our spaces
          into magical wonderlands. Luna's attention to detail and creative
          flair make every corner of Whimsy Haven a delight to explore.
        </p>
        <p className="w-4/4 font-medium">
          <span className="font-semibold">Fun Fact:</span> Luna has a collection
          of over 100 fairy figurines that inspire her designs.
        </p>
      </div>
      <div className=" absolute top-[1750px] left-[20px] rounded-xl  ">
        <img className="w-48 h-48 " src={chef} />
        <h2 className="font-bold text-xl mt-4">
          Finn - The Enchantment Engineer
        </h2>
        <p className="w-1/5 font-medium">
          <span className="font-semibold">Bio:</span>Finn is our go-to expert
          for creating the whimsical ambiance that defines Whimsy Haven. From
          the twinkling fairy lights to the gentle lanterns, Finn's technical
          skills and artistic touch ensure that every dining area exudes magic.
        </p>
        <p className="w-1/5 font-medium">
          <span className="font-semibold">Fun Fact:</span> Finn can play over
          ten musical instruments and often serenades the team during breaks.
        </p>
      </div>
      <div className=" absolute top-[1750px] left-[450px] rounded-xl  ">
        <img className="w-48 h-48 " src={chef} />
        <h2 className="font-bold text-xl mt-4">
          Mira - The Guest Experience Guru
        </h2>
        <p className="w-1/4 font-medium">
          <span className="font-semibold">Bio:</span>Mira's warm and welcoming
          personality ensures that every guest at Whimsy Haven feels like
          they're part of a magical story. With years of experience in
          hospitality, Mira leads our front-of-house team, making sure that
          every visit is enchanting and memorable.
        </p>
        <p className="w-1/4 font-medium">
          <span className="font-semibold">Fun Fact:</span>Mira is an avid reader
          of fantasy novels and often shares book recommendations with guests.
        </p>
      </div>
      <div className=" absolute top-[1750px] left-[850px] rounded-xl  ">
        <img className="w-48 h-48 " src={chef} />
        <h2 className="font-bold text-xl mt-4">
          Theo - The Beverage Alchemist
        </h2>
        <p className="w-1/3 font-medium">
          <span className="font-semibold">Bio:</span>Theo crafts our delightful
          drinks menu, blending flavors and ingredients to create beverages that
          are truly magical. With a background in mixology and a passion for
          experimenting, Theo's creations are a highlight of the Whimsy Haven
          experience.
        </p>
        <p className="w-1/3 font-medium">
          <span className="font-semibold">Fun Fact:</span>Theo once won a
          national mixology competition with a drink inspired by a fairy tale.
        </p>
      </div>
      <div className=" absolute top-[1750px] left-[1260px] rounded-xl  ">
        <img className="w-48 h-48 " src={chef} />
        <h2 className="font-bold text-xl mt-4">Isla - The Sweet Sorceress</h2>
        <p className="w-3/4 font-medium">
          <span className="font-semibold">Bio:</span>Isla is the genius behind
          our whimsical desserts. Her sweet creations are not only delicious but
          also visually stunning, adding a touch of magic to the end of every
          meal. With a background in pastry arts, Isla's desserts are a true
          work of art.
        </p>
        <p className="w-3/4 font-medium">
          <span className="font-semibold">Fun Fact:</span>Isla's favorite
          pastime is painting, and she often uses her artistic skills to
          decorate her desserts.
        </p>
      </div>
      <div>
        <footer className="bg-black text-white py-10 px-5 absolute top-[2276px] w-screen mt-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2 text-xl">
              123 Enchanted Lane, Fairy Tale City, Magicland
            </p>
            <p className="mb-2 text-2xl text-blue-300">
              Phone: (123) 456-7890 | Email: info@whimsyhaven.com
            </p>
            <div className="flex justify-center mb-4 ">
              <a href="https://www.instagram.com" className="mx-2 text-white ">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://www.facebook.com" className="mx-2 text-white  ">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://www.twitter.com" className="mx-2 text-white ">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
            <p className="mb-4 text-xl font-semibold">
              Follow us on Instagram, Facebook, and Twitter
            </p>
            <a
              href="./reservations"
              className="bg-sky-600 text-white font-bold py-2 px-4 rounded-lg text-2xl hover:bg-sky-800 transition duration-300"
            >
              Ready to experience the magic? Make a reservation today and let
              Whimsy Haven enchant you!
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Story;
