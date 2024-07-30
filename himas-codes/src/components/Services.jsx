import React from "react";

export default function Services() {
    return(
        <>
            <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
          Services
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          <div className="relative p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold md:text-5xl">Front-end</h3>
            <p className="text-sm text-gray-500">
            Building engaging and responsive user interfaces with a focus on clean design and seamless user experiences
            </p>
            <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
          </div>
          <div className="relative p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold md:text-5xl">Back-end</h3>
            <p className="text-sm text-gray-500">
            Developing robust server-side applications, handling data management, and ensuring secure and efficient backend operations
            </p>
            <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
          </div>
          <div className="p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold md:text-5xl">Full-stack</h3>
            <p className="text-sm text-gray-500">
            Combining front-end and back-end to create complete web solutions, from intuitive user interfaces to powerful server-side functionality
            </p>
          </div>
        </div>
      </div>
    </section>
        </>
    )}