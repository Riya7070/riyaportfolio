import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/RIYAprofile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-36">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 px-4">
        
        {/* LEFT SECTION */}
        <div className="w-full lg:flex-2 text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-5xl lg:text-6xl font-semibold pb-4 text-custom-beige"
          >
            Hey! I'm Riya
          </motion.h1>

          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg lg:text-2xl font-light tracking-tight leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.span
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="block mt-4 text-base sm:text-lg lg:text-xl font-light"
          >
            Feel free to reach out if you want to share ideas and collaborate!
          </motion.span>

          {/* ✨ Deep Gold Button with Glow */}
          <motion.a
            href="mailto:riyar2004oct@gmail.com"
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-[#B8860B] hover:bg-[#8C6B1F] text-black text-lg font-medium shadow-md hover:shadow-[0_0_20px_#B8860B] transition-all duration-300 hover:scale-105 animate-pulse"
          >
            Contact Me
          </motion.a>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 flex justify-center mt-16">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Riya R"
            className="mb-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-cover rounded-full shadow-lg dark:bg-neutral-900"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
