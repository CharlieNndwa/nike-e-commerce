import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red">Top</span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step into Greatness with Nike Sneakers! Elevate your style and
          performance with our cutting-edge collection of Nike sneakers.
          Designed to inspire and empower athletes and sneaker enthusiasts
          alike, each pair embodies the spirit of innovation and determination
          that defines the Nike brand.
        </p>
        <p className="mt-6  lg:max-w-lg info-text">
          Our unwavering commitment to precision and perfection guarantees your
          utmost contentment.
        </p>
        <div className="mt-11">
          <Button label="Shop now" iconURL={arrowRight} />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
