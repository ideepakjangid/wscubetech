import laptop from "../assets/img/laptop.jpg";

export default function LearnFromExports() {
  return (
    <>
      <div className="w-full py-12">
        <div className="max-w-[1240px] mx-auto md:flex justify-center gap-5 items-center">
          <div className="w-full md:w-[40%]">
            <img src={laptop} alt="" />
          </div>
          <div className="w-full pl-4 md:pl-0 md:w-[45%]">
            <h3 className="text-[#00df9a] font-bold mb-2">LEARN FROM EXPORTS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              ad ea voluptatibus veritatis magni fuga esse, omnis nam tempora
              nesciunt doloribus qui id consequatur labore incidunt laborum
              commodi molestias architecto
            </p>
            <button className="bg-black rounded p-2 px-10 text-white mt-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
