import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/UI/HowItWorksCard";
import Image from "next/image";
import React from "react";

const How_It_Works = () => {
  return (
    <div
      className="container bg-gradient-to-r from-[rgba(255, 255, 255, 0.8)] to-[rgba(117, 255, 247, 0.8)]"
      id="how-it-works"
    >
      <div className="text-center">
        <h2 className="font-bold mt-6  text-2xl md:text-3xl md:pt-20 select-none">
        <p className="text-lg mt-3 md:text-xl ">
        Wasteless empowers both individuals and companies to embrace a more sustainable lifestyle. Learn how our app simplifies waste management for everyone:
        </p>
        <h2 className="font-semibold md:font-bold text-xl md:text-2xl mt-3 md:my-5">
          1.As a common user you can:
        </h2>
      </div>
      <div className="">
        <div className="flex justify-center gap-10 m-10 relative">
          <div className="my-5">
            <p className="text-2xl font-medium text-[#65FF00]">
              Learn about the 3R's
            </p>
            <Image
              src="/images/Arrow1.png"
              alt=""
              width={180}
              height={0}
              className="absolute ml-24"
            />
          </div>
          <Card className="bg-[#FFF8ED] p-16">
            <CardHeader>
              <CardTitle>Become a Waste Management Pro</CardTitle>
            </CardHeader>
            <CardContent className="text-xl">
              <p>Empower yourself with knowledge! Access informative articles, tips, and resources to learn about waste reduction, recycling best practices, and composting techniques. Take control of your waste footprint and make a difference.</p>
            </CardContent>
          </Card>

        <Image
          src="/images/flower.png"
          alt=""
          width={200}
          height={0}
          className="hidden md:rotate-12 md:absolute md:right-[168px]  md:-bottom-[40px]"
        />
      </div>
      <div className="flex justify-center gap-10 m-10">
        <Image
          src="/images/flower.png"
          alt=""
          width={200}
          height={0}
          className="hidden md:rotate-45 md:left-[150px] md:-bottom-[180px]"
        />
          <p className="text-2xl font-medium my-16 text-[#65FF00]">
            Community Engagement
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-10 m-10 relative">
        <div className="my-5">
          <Card className="bg-[#D2B8DF] bg-opacity-20 p-16">
            <CardHeader>
              <CardTitle>Join the Wasteless Movement</CardTitle>
            </CardHeader>
            <CardContent className="text-xl">
              <p>Connect with like-minded individuals passionate about reducing waste! Share experiences, swap tips, and find encouragement within our supportive community forum. Together, we can create positive change for our planet.</p>
            </CardContent>
          </Card>
          <div className="my-5">
            <Image
              src="/images/Arrow 2.png"
              alt=""
              width={200}
              height={0}
              className="rotate-12 absolute right-20"
            />
           
        </div>
        <div className="flex justify-center gap-10 mx-10 relative">
          <div className="my-5">
            <Image
              src="/images/Arrow 3.png"
              alt=""
              width={170}
              height={0}
              className="absolute ml-16"
            />
            <p className="text-2xl font-medium my-28 text-[#65FF00]">
              Recycling places near you
            </p>
          </div>
          <Card className="bg-[#FFF8ED] p-16 text-center ">
            <CardHeader>
              <CardTitle>Effortless Recycling Made Easy</CardTitle>
            </CardHeader>
            <CardContent className="text-xl">
              <p>Locate recycling companies in your area with a tap! Our app connects you with a network of verified recyclers, simplifying responsible waste disposal. Find the perfect recycling solution for your needs and contribute to a more sustainable future.</p>
            </CardContent>
          </Card>
        <Image
          src="/images/flower.png"
          alt=""
          width={200}
          height={0}
          className="hidden md:rotate-12 md:absolute md:right-[140px] md:-bottom-[40px]"
        />
      </div>
    </div>
  );
};

export default How_It_Works;
