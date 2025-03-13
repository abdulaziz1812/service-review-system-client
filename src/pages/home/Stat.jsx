import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";

const Stat = () => {
  const [counts, setCounts] = useState({});
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const fetchCounts = async () => {
      const response = await fetch(
        "https://service-review-system-server-beta.vercel.app/counts"
      );
      const data = await response.json();
      setCounts(data);
    };
    fetchCounts();
  }, []);

      
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={() => {
        setStartCount(true); 
        return { opacity: 1, x: 0 }}}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex justify-center items-center mx-auto w-fit p-8 bg-white rounded-xl shadow-xl mb-8 hover:shadow-2xl"
    >
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value">
            <CountUp end={counts.userCount || 0} start={startCount ? 0 : undefined} duration={5} />
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Reviews</div>
          <div className="stat-value">
            <CountUp end={counts.reviewCount || 0} start={startCount ? 0 : undefined} duration={5} />
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Services</div>
          <div className="stat-value">
            <CountUp end={counts.serviceCount || 0} start={startCount ? 0 : undefined} duration={4} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stat;
