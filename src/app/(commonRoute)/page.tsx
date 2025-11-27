import Banner from "./_component/page/home/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <div>
        <button
          className="w-14 h-14 rounded-full bg-[#c73450] flex items-center justify-center shadow-lg 
         transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-[#e04363]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7 ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
