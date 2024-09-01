import React, { useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import eatImage from "./eat.jpg";
import ice from "./icecream.jpg";
import coke from "./coke.jpg";
import image from "./image.png";
import pizza from "./pizza.jpg";
import crois from "./crois.png";
import plate from "./plate.jpg";
import arrow from "./arrow.png";
import Menu from "./Menu";
import line from "./linewhite.png";
import { motion } from "framer-motion";
import { Button, Stack, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SlideUp = (delay) => {
  return {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#FFFFFF" },
  },
});
const Foodmain = () => {
  const footerRef = useRef(null); 
  const galleryRef=useRef(null);

  const handleScrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToGallery=()=>{
    galleryRef.current.scrollIntoView({ behavior: "smooth" });

  }
  return (
    <div>
      <div className="  border-[2px] border-solid border-black mt-3 ml-4 mr-4 ">
        <ul className="list-none flex gap-3 items-center justify-evenly  text-sm font-semibold ">
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="hover:underline hover:decoration-2"
          >
            <Link to="/home">HOME</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="hover:underline hover:decoration-2"
          >
            <Link to="/mainmenu">MAGICAL MENU</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="hover:underline hover:decoration-2"
          >
            <Link to="/story">OUR STORY</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="hover:underline hover:decoration-2"
          >
            <Link  onClick={handleScrollToGallery}>WHIMSICAL GALLERY</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="hover:underline hover:decoration-2"
          >
            <Link to="/hostparty">HOST A PARTY</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="hover:underline hover:decoration-2"
          >
            <Link onClick={handleScrollToFooter}>GET IN TOUCH</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="border-2 hover:bg-white hover:text-black hover:border-black border-white  border-solid p-2 bg-black text-white mt-2 mb-2 "
          >
            <Link to="/book">BOOK YOUR TABLE</Link>
          </motion.li>
        </ul>
      </div>
      <Outlet />
      <div>
        <div id="heading">
          <img className="ml-[520px] mt-4" src={eatImage} alt="eat" />
          <img
            className="h-20 absolute -rotate-12 top-[120px] left-[320px] "
            src={ice}
            alt="ice"
          />
          <img
            className="h-20 absolute rotate-12 top-[320px] left-[220px] "
            src={coke}
            alt="coke"
          />
          <img
            className="h-20 absolute top-[120px] -rotate-12 left-[1200px]"
            src={pizza}
            alt="pizza"
          />
          <img
            className="h-20 absolute top-[250px] left-[430px]"
            src={crois}
            alt="crois"
          />
          <img
            className="h-20 absolute  top-[380px] left-[450px] rotate-45 "
            src={plate}
            alt="plate"
          />
          <img
            className="h-40  absolute top-[90px] left-[600px]"
            src={arrow}
            alt="arrow"
          />

          <motion.h4
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView="animate"
            className="font-mono font-medium text-3xl absolute top-[220px] left-[150px]"
          >
            "Transforming Meals into <br /> Magical Moments"
          </motion.h4>
          <h1 className="font-Italianno text-7xl font-bold flex absolute rotate-90 top-[230px] left-[-120px]">
            Whinsy Heaven
          </h1>
          <Menu />
        </div>
        <div className="flex flex-col items-center mt-24 gap-5">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-center font-bold text-5xl font-mono"
          >
            Host a Party With Whimsical Heaven
          </motion.h1>
          <motion.p
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl mb-5"
          >
            Experience the magic of dining in an enchanted world.
          </motion.p>
          <Link to="/hostparty">
            <motion.button
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-white p-5 border-2 border-solid border-black hover:text-black transition duration-300"
            >
              Create Your Fairy-Tale Event
            </motion.button>
          </Link>
          <motion.p
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-2xl mt-3"
          >
            Turn your celebration into a magical experience. Click to explore
            our enchanting party options!
          </motion.p>
        </div>
        <div ref={galleryRef} className="mt-3  ">
          <img
            className="mt-6 h-[600px] x-[600px] mb-4 ml-[10px] "
            alt="gallery"
            src={image}
          />
        </div>
        <div className="p-6 bg-black text-white  flex gap-28">
          <div className="mt-28">
            <h1 className="text-4xl font-bold">KEEP UP TO DATE WITH WHINSY </h1>
            <p className="text-3xl">Be the First to Catch Our Magic</p>
          </div>
          <div>
            <ThemeProvider theme={lightTheme}>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="First Name"
                    id="name"
                    variant="standard"
                    placeholder="First Name"
                    helperText="Please enter your name"
                    sx={{
                      input: {
                        color: (theme) => theme.palette.primary.main,
                        fontSize: "24px",
                        border: "1px solid white",
                      },
                    }}
                  />
                  <TextField
                    label="Last Name"
                    id="name"
                    variant="standard"
                    placeholder="Last Name"
                    helperText="Please enter your name"
                    sx={{
                      input: {
                        color: (theme) => theme.palette.primary.main,
                        fontSize: "24px",
                        border: "1px solid white",
                      },
                    }}
                  />
                </Stack>
                <Stack>
                  <TextField
                    label="Email"
                    id="name"
                    variant="standard"
                    placeholder="Email"
                    helperText="Please enter valid email"
                    sx={{
                      input: {
                        color: (theme) => theme.palette.primary.main,
                        fontSize: "24px",
                        border: "1px solid white",
                      },
                    }}
                  />
                </Stack>
                <Stack>
                  <TextField
                    label="Phone Number"
                    id="name"
                    variant="standard"
                    placeholder="Phone Number"
                    defaultValue="Enter Phone Number"
                    helperText="Please enter valid number"
                    sx={{
                      input: {
                        color: (theme) => theme.palette.primary.main,
                        fontSize: "24px",
                        border: "1px solid white",
                      },
                    }}
                  />
                </Stack>
                <Stack>
                  <Button
                    variant="outlined"
                    sx={{
                      fontSize: "24px",
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </Stack>
            </ThemeProvider>
          </div>
        </div>
      </div>
      <div>
        <footer ref={footerRef} className="bg-black text-white mt-14 p-6">
          <div className="flex justify-between">
            <div>
              <img src={line} className="absolute top-[2280px] border-red-400  h-52 left-[550px]"/>
              <h1 className="text-3xl font-bold">Whinsy Heaven</h1>
              <p className="text-2xl">
                Upper Level, Overseas Passenger Terminal, The Rocks, Sydney 2000
              </p>
              <p className="text-2xl">Phone: 02 9251 5600</p>
            </div>
            <img src={line} className="absolute top-[2280px] border-red-400  h-52 left-[1220px]"/>
            <div>
              <h1 className="text-3xl font-bold">Opening Hours</h1>
              <p className="text-2xl">
                <span className="underline-offset-1 text-sky-500 font-bold">LUNCH</span>: Saturday and Sunday, Reservations from 12pm to 1.30pm
              </p>
              <p className="text-2xl">
                <span  className="underline-offset-1 text-sky-500 font-bold">DINNER</span>: Wednesday to Sunday, Reservations from 6pm to 8.45pm
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Reservations</h1>
              <p className="text-xl text-sky-500 hover:text-sky-600 cursor-pointer">MAKE A RESERVATION</p>
            </div>
          </div>
          <div className="text-center mt-14">
            <p className="text-2xl">
              We acknowledge the Traditional Custodians of this land upon which
              Whinsy Heaven sits, the Gadigal of the Eora Nation.
            </p>
            <p className="text-2xl">
              We recognise their continuing connection and unique cultural and
              spiritual relationship to the land, water and community.
            </p>
            <p className="text-2xl">
              We pay our deepest respects to them and their culture, and to
              Elders, past, present and emerging.
            </p>
          </div>
          <div className="text-center mt-6">
            <p className="text-2xl">
              FINK | beach byron bay | bennelong | firedoor | Gildas | otto
              sydney | otto brisbane | Whimsical
            </p>
            <p className="text-2xl">
              {" "}
              2023 &#169; Whinsy Heaven. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Foodmain;
