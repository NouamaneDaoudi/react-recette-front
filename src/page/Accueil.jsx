import React from 'react';
import { Link } from 'react-router-dom';

function Accueill() {
  return (
    <>
      {/*
        Heads up! 👋

        This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
      */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Chwaya.jpg')" }}
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white	">
              Let us find your
              <strong className="block font-extrabold text-rose-700"> Favorite food. </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white	">
              ''Welcome to our delightful food haven! Our website is a culinary paradise dedicated to helping you discover your next favorite meal. With a diverse range of recipes, curated recommendations, and insightful articles, we aim to tantalize your taste buds and inspire your culinary adventures. Whether you're a seasoned chef or a curious foodie, our platform is your ultimate companion in the journey to explore, savor, and celebrate the world of gastronomy. Join us and embark on a delicious voyage of flavors, aromas, and culinary wonders!''

            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link to={'/menu'}
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accueill;
