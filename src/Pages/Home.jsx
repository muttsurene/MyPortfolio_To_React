import React from "react";

function Home() {
  return (
    <div className="text-white">
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 px-0 mx-5">
          <div className="grid grid-cols-3 gap-5 mx-4">
            <div className=" col-span-2">
              <div className=" bg-black/30 max-w-4xl rounded-[40px] p-5 h-[75%] mb-[30%] mt-16">
                <h1 className="font-bold font-serif ml-11 p-10">
                  Roman A. Soledad Jr
                </h1>
                <h2 className="font-bold font-serif ml-12 text-4xl p-2">
                  HELLO! I'm Roman
                </h2>
                <div className="flex p-5">
                  <p className="text-1xl text-justify px-10">
                    A Computer Engineer, graduated at Bulacan State University
                    and I'm 24 years old. I love building tools that are
                    user-friendly, simple, delightful. <br />
                    <br />A dedicated student with a strong work ethics and
                    passion of learning who seeks steady growth in the computer
                    engineering industry where I am fully utilize my skills and
                    knowledge, gained experiences and further enhance them to
                    contribute to my development as an individual.
                  </p>
                  <img
                    className="h-[50%] ml-auto p-2 rounded-[40px] w-[30%]"
                    src="../Roman A. Soledad Jr-2x2Pic.jpg"
                    alt=""
                  />
                </div>
                <div className="flex gap-2 ml-[6%]">
                  <img
                    className="h-[40px]"
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
                    className="h-[40px]"
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
            <div className="col-span-1">
              <div className="bg-black/30 max-w-4xl rounded-[40px] p-4 h-[75%] mb-[30%] mt-16">
                <h1 className="font-serif text-2xl p-2 text-center">
                  MY SKILLS
                </h1>
                <img
                  className="h-[90px] p-2"
                  src="../react-2.png"
                  alt="This is HTML image"
                />
                <img
                  className="h-[90px]"
                  src="../tailwindcss.png"
                  alt="This is HTML image"
                />
                <img
                  className="h-[80px]"
                  src="../html.png"
                  alt="This is HTML image"
                />
                <img
                  className="h-[110px] p-4"
                  src="../css.png"
                  alt="This is HTML image"
                />
                <img
                  className="h-[110px] p-4"
                  src="../sql.png"
                  alt="This is HTML image"
                />
                <img
                  className="h-[90px] p-2"
                  src="../php.png"
                  alt="This is HTML image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
