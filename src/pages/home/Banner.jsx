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
import banner04 from "../../assets/Banner/4.jpg";
3;
const Banner = () => {
  const animationTitle = {
    initial: { opacity: 0, x: -100 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        type: "spring",
        bounce: 0.6,
      },
    },
  };

  const animationP = {
    initial: { opacity: 0, x: 150 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
        bounce: 0.4,
        type: "spring",
      },
    },
  };

  return (
    <div className=" max-w-screen-2xl  mx-auto overflow-hidden bg-black">
      <div className="banner-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          effect="fade"
          className="h-[180px] md:h-[300px] lg:h-[400px] xl:h-[620px] w-full"
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
                transition={{ duration: 1.8 }}
                className="absolute inset-0 flex flex-col bg-black bg-opacity-70"
              >
                <div className="text-center pt-6 md:p-32">
                  <motion.h2
                    {...animationTitle}
                    className="md:text-4xl font-bold mb-2 text-[#a0913e]"
                  >
                    Discover Top-Rated Services
                  </motion.h2>
                  <motion.p 
                  {...animationP}
                  className=" md:text-xl text-white">
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
              transition={{ duration: 1.8 }}
              className="relative "
            >
              <img
                src={banner02}
                alt="Share Your Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col  bg-black bg-opacity-70 px-28 py-20">
                <motion.h2
                  {...animationTitle}
                  className=" md:text-4xl font-bold mb-2 text-[#a0913e] "
                >
                  Share Your Experience
                </motion.h2>
                <motion.p
                  {...animationP}
                  className=" md:text-xl text-white"
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
              transition={{ duration: 1.8 }}
              className="relative "
            >
              <img
                src={banner03}
                alt="Your Reviews Matter"
                className="w-full h-full object-cover object-bottom"
              />
              <div className="absolute inset-0 flex flex-col  bg-black bg-opacity-50 p-6 md:p-32">
                <motion.h2
                  {...animationTitle}
                  className="md:text-4xl font-bold mb-2 text-[#a0913e]"
                >
                  Your Reviews Matter
                </motion.h2>

                <motion.p
                  {...animationP}
                  className="text-xs md:text-lg text-white"
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
                  {...animationTitle}
                  className="md:text-4xl font-bold mb-2 text-[#a0913e]"
                >
                  Explore Services Anywhere
                </motion.h2>
                <motion.p
                  {...animationP}
                  className="text-xs md:text-lg"
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
