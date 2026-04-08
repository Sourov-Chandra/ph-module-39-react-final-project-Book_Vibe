import React from 'react'
import bannerImg from '../../assets/hero_img.jpg'

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-[70vh] container mx-auto my-8 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-12">
              Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn text-white btn-success">
              View The List
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner