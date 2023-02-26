import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Keyboard,Pagination } from "swiper";
const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
      loop={true}
      grabCursor={true}
      modules={[Autoplay, Navigation, Keyboard, Pagination]}
      className="select-none CarouselSwiper"
    >
      <SwiperSlide>
        <div className="relative bg-[url(https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg)] bg-cover h-[400px] rounded-3xl p-10 overflow-hidden">
          <div className="overlay absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
          <div className="content flex h-full gap-x-10 relative ">
            <div className="poster  overflow-hidden">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>
            <div className="text p-8 leading-8">
              <h2 className="capitalize text-[30px] font-bannerFont font-semibold">
                Avatar: The way of water
              </h2>
              <p className="desc text-[13px] font-normal">
                Jake Sully lives with his newfound family formed on the
                extrasolar moon Pandora. Once a familiar threat returns to
                finish what was previously started, Jake must work with Neytiri
                and the army of the Na'vi race to protect their home
              </p>
              <div>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm mr-5">
                  Action
                </span>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm mr-5">
                  Action
                </span>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm ">
                  Action
                </span>
              </div>
              <div className="flex mt-5 justify-between font-semibold">
                <button className="btnSecondary">Trailer</button>
                <button className="btnThird">Book Now</button>
              </div>
            </div>
          </div>
        </div>
    </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-[url(https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg)] bg-cover h-[400px] rounded-3xl p-10 overflow-hidden">
          <div className="overlay absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
          <div className="content flex h-full gap-x-10 relative ">
            <div className="poster  overflow-hidden">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>
            <div className="text p-8 leading-8">
              <h2 className="capitalize text-[30px] font-bannerFont font-semibold">
                Avatar: The way of water
              </h2>
              <p className="desc text-[13px] font-normal">
                Jake Sully lives with his newfound family formed on the
                extrasolar moon Pandora. Once a familiar threat returns to
                finish what was previously started, Jake must work with Neytiri
                and the army of the Na'vi race to protect their home
              </p>
              <div>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm mr-5">
                  Action
                </span>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm mr-5">
                  Action
                </span>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm ">
                  Action
                </span>
              </div>
              <div className="flex mt-5 justify-between font-semibold">
                <button className="btnSecondary">Trailer</button>
                <button className="btnThird">Book Now</button>
              </div>
            </div>
          </div>
        </div>
    </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-[url(https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg)] bg-cover h-[400px] rounded-3xl p-10 overflow-hidden">
          <div className="overlay absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
          <div className="content flex h-full gap-x-10 relative ">
            <div className="poster  overflow-hidden">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>
            <div className="text p-8 leading-8">
              <h2 className="capitalize text-[30px] font-bannerFont font-semibold">
                Avatar: The way of water
              </h2>
              <p className="desc text-[13px] font-normal">
                Jake Sully lives with his newfound family formed on the
                extrasolar moon Pandora. Once a familiar threat returns to
                finish what was previously started, Jake must work with Neytiri
                and the army of the Na'vi race to protect their home
              </p>
              <div>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm mr-5">
                  Action
                </span>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm mr-5">
                  Action
                </span>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm ">
                  Action
                </span>
              </div>
              <div className="flex mt-5 justify-between font-semibold">
                <button className="btnSecondary">Trailer</button>
                <button className="btnThird">Book Now</button>
              </div>
            </div>
          </div>
        </div>
    </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-[url(https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg)] bg-cover h-[400px] rounded-3xl p-10 overflow-hidden">
          <div className="overlay absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
          <div className="content flex h-full gap-x-10 relative ">
            <div className="poster  overflow-hidden">
              <img
                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>
            <div className="text p-8 leading-8">
              <h2 className="capitalize text-[30px] font-bannerFont font-semibold">
                Avatar: The way of water
              </h2>
              <p className="desc text-[13px] font-normal">
                Jake Sully lives with his newfound family formed on the
                extrasolar moon Pandora. Once a familiar threat returns to
                finish what was previously started, Jake must work with Neytiri
                and the army of the Na'vi race to protect their home
              </p>
              <div>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm mr-5">
                  Action
                </span>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm mr-5">
                  Action
                </span>
                <span className="w-[100px] bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm ">
                  Action
                </span>
              </div>
              <div className="flex mt-5 justify-between font-semibold">
                <button className="btnSecondary">Trailer</button>
                <button className="btnThird">Book Now</button>
              </div>
            </div>
          </div>
        </div>
    </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
