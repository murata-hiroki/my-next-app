"use client";
import React from "react";

const Overview = ({ title, image }: { title: string; image: string }) => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl w-full px-8 py-64">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
      </div>
    </section>
  );
};

export default Overview;
