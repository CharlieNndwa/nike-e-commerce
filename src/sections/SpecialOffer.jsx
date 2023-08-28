/* eslint-disable react/no-unescaped-entities */
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          "Unlock Your Savings with Our Exclusive Nike-Inspired Special Offers!
          We believe that stepping into style shouldn't come with a hefty price
          tag. That's why we're thrilled to present to you a selection of
          unbeatable special offers on our range of sneakers and athletic gear.
        </p>
        <p className="mt-6  lg:max-w-lg info-text">
          From the timeless classics that have left an indelible mark on sneaker
          culture to the latest in technological advancements, we offer a
          diverse range that caters to both athletes and trendsetters.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View details" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
