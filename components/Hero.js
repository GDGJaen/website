import data from "/data/hero";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-hero-pattern h-screen object-cover w-full bg-no-repeat relative">
      <div className="absolute text-center top-1/2 w-4/6 -translate-y-2/4 translate-x-1/4">
        <h1 className="text-white text-3xl md:text-5xl  ">
          <span className="font-semibold">{data.boldWord}</span> {data.text}
        </h1>
      </div>
      <Link href={data.ticketsURL}>
        <a
          className="bg-blue-400 hover:bg-blue-300 absolute z-10 text-center top-3/4 w-4/6 md:w-3/6 md:translate-x-2/4  -translate-y-2/4 translate-x-1/4 text-white p-4 lg:text-2xl"
          target="_blank"
        >
          Saber más
        </a>
      </Link>
    </div>
  );
}

export default Hero;
