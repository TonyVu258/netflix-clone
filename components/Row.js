import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Thumbnail from "../components/Thumbnail";
import { useRef, useState } from "react";


function Row({ title, movies }) {
    const rowRef = useRef(null)
    const [isMoved, setIsMoved] = useState(false)

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 opacity-0 cursor-pointer transition hover:scale-125 group-hover:opacity-100" />

        <div ref={rowRef} className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
        {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie}/>
        ))}
        </div>

        <ChevronRightIcon className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 opacity-0 cursor-pointer transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
}

export default Row;
