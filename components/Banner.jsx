import { useRouter } from "next/router";
const Banner = () => {
  const router = useRouter();
  return (
    <div className=" absolute flex flex-col bottom-4 items-center gap-8 rounded-xl bg-neutral/80 px-10 py-4 z-50">
      <h1 className=" font-extrabold text-2xl sm:text-4xl md:text-6xl">
        What <span className="text-action">Tuk</span> you so long{" "}
      </h1>
      <button onClick={()=>{router.push("/tours")}} className="px-4 bg-neutral-2 py-1 border w-fit text-5xl rounded-md hover:text-action font-extrabold">
        Book Now
      </button>
    </div>
  );
};

export default Banner;
