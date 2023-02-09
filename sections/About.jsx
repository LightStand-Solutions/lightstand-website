'use client';

import styles from '../styles';
import { motion } from 'framer-motion';
import { TypingText} from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre Nós" textStyles="text-center"/>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        
        A <span className="font-extrabold text-white">Ligh Stand</span> é um grupo organizado por estudantes de tecnologia
        com a intenção de trazer ideias e soluções para o mundo de uma forma moderna, eficiente e elegante. <br/>
        
        Buscamos sempre compreender a necessidade para assim poder resolver problemas com a ajuda das 
        <span className="font-extrabold text-white"> tecnologias mais poderosas</span> e ideias para cada serviço!

      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
