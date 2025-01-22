import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "motion/react";

import banner01 from "../../assets/Banner/1.jpg";
import banner02 from "../../assets/Banner/2.jpg";
import banner03 from "../../assets/Banner/3.jpg";
import banner04 from "../../assets/Banner/4.jpg";3
const Banner = () => {
  return (
    <div className="max-w-screen-2xl rounded-lg mx-auto">
      <div className="banner-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="h-[550px] w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative">
              <img
                src={banner01}
                alt="Discover Top-Rated Services"
                className="object-cover object-right h-full w-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 flex flex-col bg-black bg-opacity-60"
              >
                <div className="p-32">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.5,
                      ease: [0, 1, 0.2, 1.01],
                    }}
                    className="text-4xl font-bold mb-2 text-[#a0913e]"
                  >
                    Discover Top-Rated Services
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      ease: [0, 1, 0.2, 1.01],
                    }}
                    className="text-xl text-white"
                  >
                    Your trusted platform for authentic reviews
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, backdropFilter: blur }}
              transition={{ duration: 2 }}
              className="relative "
            >
              <img
                src={banner02}
                alt="Share Your Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col  bg-black bg-opacity-60 px-28 py-20">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 1, 0.2, 1.01],
                  }}
                  className="text-4xl font-bold mb-2 text-[#a0913e] "
                >
                  Share Your Experience
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 1, 0.2, 1.01],
                  }}
                  className="text-xl text-white"
                >
                  Help others by providing insightful reviews
                </motion.p>
              </div>
            </motion.div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="relative "
            >
              <img
                src={banner03}
                alt="Your Reviews Matter"
                className="w-full h-full object-cover object-bottom"
              />
              <div className="absolute inset-0 flex flex-col  bg-black bg-opacity-50 p-32">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 1, 0.2, 1.01],
                  }}
                  className="text-4xl font-bold mb-2 text-[#a0913e]"
                >
                  Your Reviews Matter
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 1, 0.2, 1.01],
                  }}
                  className="text-lg text-white"
                >
                  Join a growing community of reviewers
                </motion.p>
              </div>
            </motion.div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="relative"
            >
              <img
                src={banner04}
                alt="Explore Services Anywhere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 1, 0.2, 1.01],
                  }}
                  className="text-4xl font-bold mb-2 text-[#a0913e]"
                >
                  Explore Services Anywhere
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 1, 0.2, 1.01],
                  }}
                  className="text-lg"
                >
                  Your go-to platform for service reviews
                </motion.p>
              </div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
