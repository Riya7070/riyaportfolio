import journeyImg1 from "../assets/SahyadriLogo.png";
import journeyImg2 from "../assets/Boscosslogo.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="journey">
      <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-14 text-center text-4xl font-semibold text-[#F5F5DC]">
          MY <span className="text-[#D4A373]">JOURNEY</span>
        </h2>

        {/* Sahyadri Block */}
        <motion.div
          className="flex flex-col items-center lg:flex-row mb-6 hover:bg-[#2A1E17] rounded-xl transition duration-300 group px-4 py-3 cursor-pointer"
        >
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              className="rounded-xl w-28 h-28 object-cover transition-transform transform group-hover:scale-105 duration-300"
              src={journeyImg1}
              alt="Sahyadri College"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex items-center justify-center">
            <p className="my-2 max-w-xl py-4 text-center lg:text-left text-[#F5F5DC] text-base lg:text-lg leading-relaxed">
              <strong className="text-[#F5F5DC] text-2xl">Sahyadri College of Engineering and Management</strong>
              <br />
              I'm currently pursuing my B.E in Computer Science & Engineering with a CGPA of 9.52.
            </p>
          </div>
        </motion.div>

        {/* BOSCOSS Block */}
        <motion.div
          className="flex flex-col items-center lg:flex-row mb-4 hover:bg-[#2A1E17] rounded-xl transition duration-300 group px-4 py-3 cursor-pointer"
        >
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              className="rounded-full w-28 h-28 object-cover transition-transform transform group-hover:scale-105 duration-300"
              src={journeyImg2}
              alt="Boscoss PU College"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex items-center justify-center">
            <p className="my-2 max-w-xl py-4 text-center lg:text-left text-[#F5F5DC] text-base lg:text-lg leading-relaxed">
              <strong className="text-[#F5F5DC] text-xl">BOSCOSS PU College</strong>
              <br />
              Secured 97.3% in the 12th board examinations under the PCMC stream. Ranked first at the college level, making it a proud and memorable milestone for both myself and my family.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
