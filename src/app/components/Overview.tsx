"use client";
import React from "react";

const Overview = ({ title, image }: { title: string; image: string }) => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="max-w-5xl w-full px-8 py-32 sm:py-48 md:py-56 lg:py-64">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
          {title}
        </h2>
      </div>
    </section>
  );
};

export default Overview;
