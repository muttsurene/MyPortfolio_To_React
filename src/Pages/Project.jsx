import React from "react";
import { Link, Outlet } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Project() {
  return (
    <div>
      <div className="bg-black/30 max-w-6xl rounded-[40px] p-5 h-[75%] mb-[30%] mt-16 ml-[7%]">
        <h1 className="text-center font-bold font-serif mx-6 text-2xl p-5">
          This is my project! React-Sample-Carousel
        </h1>
        <div className="Slider">
          <Carousel responsive={responsive}>
            <div className=" rounded-lg mx-5">
              <img
                className="h-[180px] p-2 rounded-[20px] ml-3"
                src="../FinalHomePageErov.png"
                alt="Pic1"
              ></img>
              <p className="text-2xl p-2 text-center">Project Home Page</p>
              <p className="text-2xl p-2 text-center font-bold">@Erovoutika</p>
              <p className="text-center">
                <button className="bg-black/20 hover:bg-white/15 p-5 font-bold rounded-lg">
                  Click Here!
                </button>
              </p>
            </div>
            <div className=" rounded-lg mx-3">
              <img
                className="h-[180px] ml-4 rounded-[20px] p-2"
                src="../QuizPage.png"
                alt="pic2"
              ></img>
              <p className="text-2xl p-2 text-center">Project Quiz Page</p>
              <p className="text-2xl p-2 text-center font-bold">@Erovoutika</p>
              <p className="text-center">
                <button className="bg-black/20 hover:bg-white/15 p-5 font-bold rounded-lg">
                  Click Here!
                </button>
              </p>
            </div>
            <div className=" rounded-lg mx-3">
              <img
                className="h-[180px] ml-4 rounded-[20px] p-2"
                src="../LogInPage.png"
                alt="pic2"
              ></img>
              <p className="text-2xl p-2 text-center">Project Log in Page</p>
              <p className="text-2xl p-2 text-center font-bold">@Erovoutika</p>
              <p className="text-center">
                <button className="bg-black/20 hover:bg-white/15 p-5 font-bold rounded-lg">
                  Click Here!
                </button>
              </p>
            </div>
            <div className=" rounded-lg mx-3">
              <img
                className="h-[180px] ml-4 rounded-[20px] p-2"
                src="../RegisterPage.png"
                alt="pic2"
              ></img>
              <p className="text-2xl p-2 text-center">Project Register Page</p>
              <p className="text-2xl p-2 text-center font-bold">@Erovoutika</p>
              <p className="text-center">
                <button className="bg-black/20 hover:bg-white/15 p-5 font-bold rounded-lg">
                  Click Here!
                </button>
              </p>
            </div>
            <div className=" rounded-lg mx-3">
              <img
                className="h-[180px] ml-4 rounded-[20px] p-2"
                src="../GmailPage.png"
                alt="pic2"
              ></img>
              <p className="text-2xl p-2 text-center">Project Gmail Page</p>
              <p className="text-2xl p-2 text-center font-bold">@Erovoutika</p>
              <p className="text-center">
                <button className="bg-black/20 hover:bg-white/15 p-5 font-bold rounded-lg">
                  Click Here!
                </button>
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Project;
