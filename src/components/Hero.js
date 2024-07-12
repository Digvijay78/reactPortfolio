import { HERO_CONTENT } from "../constants";
import herroPic from "../assets/heropic.jpg";
import { motion } from "framer-motion";
import MotionElement from "../customHook/MotionElement";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <MotionElement delay={0}>
              <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                Digvijay Singh
              </h1>
            </MotionElement>
            <MotionElement delay={0.5}>
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                Full Stack Developer
              </span>
            </MotionElement>
            <MotionElement delay={1}>
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
              </p>
            </MotionElement>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <MotionElement delay={1.2}>
              <motion.img
              width={400}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={herroPic}
                alt=""
              />
            </MotionElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
