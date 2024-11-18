import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";

const Feedbacks = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto h-auto lg:w-[700px] px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">My Course Certifications</h2>
      <Slider {...settings}>
        {certificates.map((certificate, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
              <img
                src={certificate.image}
                alt={certificate.courseName}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-black font-semibold">{certificate.courseName}</h3>
                <p className="text-gray-600">{certificate.organization}</p>
                <a
                  href={certificate.validationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Validate Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SectionWrapper(Feedbacks);
