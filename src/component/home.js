import React from "react";
import img from "../assets/cover.jpg";
export const Home = () => {
  return (
    <div className="bg-cover mt-32 mb-20">
      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <main className="h-full flex items-center px-6 lg:px-32">
            <section className="w-full md:w-9/12 xl:w-8/12">
              <h1 className="text-3xl lg:text-5xl font-bold text-blue-400">
                SpaceX
                <br />
                Launches
              </h1>
              <p className="text-gray-600 mt-5 mb-8">
                SpaceX manufactures launch vehicles to operate its launch
                provider services and to execute its various exploration goals.
              </p>
            </section>
          </main>
        </div>
        <div className="w-full md:w-1/2">
          <img src={img} alt="Monitoring" />
        </div>
      </div>
    </div>
  );
};
