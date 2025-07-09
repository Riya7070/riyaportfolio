import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#120000] border-t border-neutral-800 py-10 text-[#FAF3E0]">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="text-center text-3xl font-semibold tracking-tight"
        >
          Contact
        </motion.h2>

        <p className="mt-2 text-center text-sm text-[#FAF3E0]">
          Feel free to reach out!
        </p>

        <div className="mt-6 flex justify-center space-x-6 text-2xl">
          <a href={`mailto:${CONTACT.email}`} aria-label="Email">
            <FaEnvelope className="hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/riyar7070"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/Riya7070"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="https://www.instagram.com/riya._.salian"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
          </a>
        </div>

        <div className="mt-6 flex justify-center">
  {/* <a
    href={`mailto:${CONTACT.email}`}
    className="bg-[#B8860B] hover:bg-[#8C6B1F] text-black font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
  >
    Contact Me
  </a> */}
</div>

      </div>
    </section>
  );
};

export default Contact;
