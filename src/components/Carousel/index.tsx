import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

type Slider = {
  uid: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

interface CarouselProps {
  sliders: Slider[];
}

export default function Carousel({ sliders }: CarouselProps): JSX.Element {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {sliders.map((slider) => (
        <SwiperSlide key={slider.uid}>
          <Link href={slider.link}>
            <a>
              <div className="content">
                <h1>{slider.title}</h1>
                <p>{slider.subtitle}</p>
              </div>
              <div className="overlay"></div>
              <img src={slider.image} />
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
