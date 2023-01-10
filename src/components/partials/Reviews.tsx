import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "../../styles/components/reviews.css";
import { FaQuoteRight } from 'react-icons/fa'
import Title from "../elements/Title";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Reviews = () => {
        return (
            <div id="reviews">
                <Title title="ОТЗЫВЫ"/>
                <div className="review-container" style={{ background: "url('/img/reviews-min.png') center / cover" }}>
                    <div className="review-carousel">
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
                                <div className="review-content">
                                    <div className="review-content__wrapper">
                                        <FaQuoteRight/>
                                        <p>Во время работы над этим проектом Султанбек продемонстрировал высокую квалификацию. Он провел анализ нашего сайта, затем реализовал этапы доработки. Выполнил внутреннюю и внешнюю оптимизацию нашей платформы и линкбилдинг. Положительные результаты показали себя через короткое время.</p>
                                        <span>Меерим Т / CEO (Исполнительный директор)</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        );
};

export default Reviews;
