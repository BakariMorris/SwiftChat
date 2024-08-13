import SpacemanCanvas from "./SpaceMan";
import "./styles.module.scss";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className='parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start'>
        <div className="flex-1 lg:mb-0">
        </div>
      </div>

      <img className="parallax__stars" src="/img/png/galactic.jpg" alt="" />
      <img className="parallax__planets" src="/img/svg/parallax/2Planets.svg" alt="" />
      <img className="parallax__sun" src="/img/svg/parallax/6Sun.svg" alt="" />

      <SpacemanCanvas className="spaceCanvas" scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
