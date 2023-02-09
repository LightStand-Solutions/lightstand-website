'use client';

import styles from "../styles";
import { useState } from "react";
import { motion } from "framer-motion";
import { exploreDevelopers } from "../constants"
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = () => {

  const [active, setActive] = useState('dev-2')

  return(
    <section className={`${styles.paddings}`} id ="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount:0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Quem Somos?" textStyles="text-center" />
        <TitleText 
          textStyles="text-center"
          title={
            <>
              Conheça a nossa equipe de
              <br className="md:block hidden"/> programadores 
            </>
          }
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreDevelopers.map((dev, index) => (
            <ExploreCard 
              key={dev.id}
              {...dev}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>

      </motion.div>
    </section>
  )
};

export default Explore;
