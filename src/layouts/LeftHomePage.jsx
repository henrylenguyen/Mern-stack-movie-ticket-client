import React, { useEffect, useRef } from "react";
import Carousel from "./Carousel";
import MovieList from "./MovieList";

const LeftHomePage = () => {
  const ref = useRef(null);
 useEffect(() => {
   const height = ref.current.offsetHeight;
 }, []);
  return (
    <div className=" leftHomePage md:w-[75%]" ref={ref}>
      <Carousel></Carousel>
      <MovieList title={"Phim đang chiếu"}></MovieList>
      <MovieList title={"Đề xuất cho bạn"}></MovieList>
    </div>
  );
};

export default LeftHomePage;
