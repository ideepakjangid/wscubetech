import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <>
      <div className="w-full bg-[#2699fb]">
        <div className="max-w-[1240px] mx-auto pb-28 md:pb-[240px] pt-20 text-center">
          <span className="font-bold text-xl">Learn with Us</span>
          <h2 className="text-[50px] md:text-[60px] font-bold text-white">Grow with Us.</h2>
          <h2 className="text-[30px] md:text-4xl font-bold text-white my-2">
            Learn
            <ReactTyped className="pl-2"
              strings={[
                "Digital Marketing",
                "Web Development",
                "Ethical Hacking",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
          <button className="bg-black rounded p-2 px-10 text-white mt-5">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
