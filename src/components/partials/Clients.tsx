import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/components/clients.css";
import "swiper/css/navigation";
import Title from "../elements/Title";

SwiperCore.use([Navigation]);

const carouselImageData = [
    {
        id: 1,
        img: '/img/client-1.png',
    },
    {
        id: 2,
        img: '/img/client-2.png',
    },
    {
        id: 3,
        img: '/img/client-3.png',
        active: true
    },
    {
        id: 4,
        img: '/img/client-4.png',
        active: true
    },
    {
        id: 5,
        img: '/img/client-5.png',
    },
]

const Clients = () => {
        return (
            <div id="clients">
                <Title title="КЛИЕНТЫ"/>
                <div className="main-carousel">
                    <Swiper
                        style={{ height: "auto" }}
                        modules={[Navigation]}
                        spaceBetween={50}
                        navigation
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={1000}
                        breakpoints={{
                            300: {
                              slidesPerView: 1,
                            },
                            500: {
                              slidesPerView: 2,
                            },
                            1000: {
                              slidesPerView: 3,
                            },
                          }}
                    >
                        {carouselImageData.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="carousel-image">
                                    <img className={item.active ? 'active' : ''} src={item.img} alt="carousel-pic" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        );
};

export default Clients;
