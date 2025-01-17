import React from "react";

function Home() {
  return (
    <div className="text-white">
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-5 gap-1 mx-5">
            <div className=" md:col-span-2 w-full">
              <div className=" bg-black/30 rounded-3xl sm:p-5 p-1 h-fit">
                <div className="sm:p-5 md:px-10">
                  <h1 className="font-bold font-serif">Roman A. Soledad Jr</h1>
                  <h2 className="font-bold font-serif sm:text-xs md:text-4xl">
                    HELLO! I'm Roman
                  </h2>
                  <div className="flex-col-reverse items-center flex">
                    <p className="sm:text-1xl text-justify">
                      A Computer Engineer, graduated at Bulacan State University
                      and I'm 25 years old. I love building tools that are
                      user-friendly, simple, delightful. <br />
                      <br />A dedicated student with a strong work ethics and
                      passion of learning who seeks steady growth in the
                      computer engineering industry where I am fully utilize my
                      skills and knowledge, gained experiences and further
                      enhance them to contribute to my development as an
                      individual.
                    </p>
                    <img
                      className="h-[50%] p-2 rounded-[40px] w-[30%]"
                      src="../Roman A. Soledad Jr-2x2Pic.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-2 ml-[6%]">
                    <img
                      className="h-11"
                      src="../linkedin.svg"
                      alt="Likedin image"
                    />
                    <a
                      className="font-serif mt-2"
                      href="https://www.linkedin.com/in/soledad-jr-roman-a-14b891209/"
                    >
                      Likedin
                    </a>
                    <img
                      className="h-11"
                      src="../github.svg"
                      alt="Github image"
                    />
                    <a
                      className="font-serif mt-2"
                      href="https://github.com/muttsurene"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-1 md:gap-5 gap-1 w-full">
              <div className="md:col-span-1 w-full">
                <div className="flex w-full justify-center bg-black/30 rounded-3xl md:p-5 p-5 h-fit">
                  <div className="sm:p-5 md:px-10">
                    <h1 className="font-serif text-2xl text-center">
                      MY SKILLS
                    </h1>
                    <img
                      className="h-20 mx-auto"
                      src="../react-2.png"
                      alt="This is HTML image"
                    />
                    <img
                      className="h-18"
                      src="../tailwindcss.png"
                      alt="This is HTML image"
                    />
                    <img
                      className="h-20 mx-auto"
                      src="../html.png"
                      alt="This is HTML image"
                    />
                    <img
                      className="h-20 mx-auto"
                      src="../css.png"
                      alt="This is HTML image"
                    />
                    <img
                      className="h-20 mx-auto"
                      src="../sql.png"
                      alt="This is HTML image"
                    />
                    <img
                      className="h-20 mx-auto"
                      src="../php.png"
                      alt="This is HTML image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
