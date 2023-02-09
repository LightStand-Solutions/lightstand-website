'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
<section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Um mundo de portas abertas" textStyles="text-center"/>
      <TitleText title={<>Construir um software não é fácil, e por isso vamos te ajudar</>} textStyles="text-center"/>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/3 left-20 p-[6px]">
          <img src="world-comment-1.png" alt="world" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        
        <div className="absolute bottom-52 right-52 p-[6px]">
          <img src="world-comment-2.png" alt="world" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
