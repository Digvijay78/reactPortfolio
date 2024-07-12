import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import aboutmepic from "../assets/about.jpg";
import resume from "../assets/resume.pdf"; // Adjust the path if needed

import { certificate } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h2 className="my-20 text-center text-4xl ">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center ">
            <img src={aboutmepic} alt="" className="rounded-2xl" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            <a
              href={resume}
              download="resume.pdf"
              className="mt-4 inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      <h2 className="my-20 text-center text-4xl">Certificates</h2>
      <div className="flex flex-wrap">
        <div className="flex items-center justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              {certificate.map((el, index) => {
                return (
                  <img
                    src={el}
                    key={index}
                    alt="certificate"
                    className="rounded-lg"
                    style={{ width: '500px', height: 'auto' }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
  