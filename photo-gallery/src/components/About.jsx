import React from "react";

function About() {
  return (
    <div>
      <section class="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
        <div class="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div class="lg:max-w-md">
                <div class="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                  <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                    About App
                  </h1>
                </div>
                <p class="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  It is a collection of images that are organized in a
                  particular way, with the intention of displaying them to
                  others. These galleries take many forms, from simple
                  collections of images arranged in grid , it has complex
                  galleries with filters, categories, and search capabilities
                </p>
              </div>
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-U2viHQ7vYCe7lQUT3q0YCC24WrDrXIGnayGFZZsX9g&s"
                alt=""
                class="relative z-40 object-cover w-full h-full rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
