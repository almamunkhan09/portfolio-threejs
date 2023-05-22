// Import Framer Motion
// import { motion } from 'framer-motion';
// import { ComputerCanvas } from '../components/ComputerCanvas';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row gap-2 items-start`}
      >
        <div className=" flex flex-col justify-center items-center  ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          {' '}
          <h1 className={`${styles.heroHeadText} text-white`}>
            {' '}
            Hi,I'm <span className="text-[#915eff]"> Al Mamun </span>{' '}
          </h1>{' '}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {' '}
            I develope web Application using <br className="sm:block hidden" />
            React,Next.js,Express and MongoDB
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
