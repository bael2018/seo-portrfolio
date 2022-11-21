import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/components/clients.css";
import "swiper/css/navigation";
import Title from "../elements/Title";

SwiperCore.use([Navigation]);

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
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        speed={1000}
                    >
                        <SwiperSlide>
                            <div className="carousel-image">
                            <div></div>
                            <div></div>
                            <div></div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        );
};

export default Clients;
