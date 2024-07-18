import React from "react";
import { Button } from "./UI/Button";

const make_difference = () => {
  return (
    <section className="px-4 mt-[50px] font-bold text-3xl flex flex-col items-center w-screen">
      <blockquote className=" italic text-xl flex flex-col items-center justify-center bg-gradient-to-r from-quotebg  to-highpink sm: w-full sm: h-auto lg:w-[1250px] lg:h-[200px] rounded-3xl">
        <p className="max-w-[300px] py-4 lg:max-w-[800px] text-center">“Do your little bit of good where you are; it is those little bits of
        good put together that overwhelm the world.”</p>
        <p className=" not-italic mt-[24px] pb-2 font-extralight">ARCHBISHOP DESMOND TUTU</p>
      </blockquote>
      <h2 className=" mt-[48px]">Make a difference today</h2>
      <Button className=" bg-green-500 mt-[28px] text-black rounded-full hover:bg-green-200 mb-[80px]">
        Start your journey
      </Button>
    </section>
  );
};

export default make_difference;
