import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing Bob."
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I'm Bob</h1>
      <p>I blog about nothing in particular.</p>
    </section>
  );
};
export default Hero;
