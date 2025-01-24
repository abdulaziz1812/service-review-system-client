import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";

const Stat = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const fetchCounts = async () => {
      const response = await fetch("http://localhost:5000/counts");
      const data = await response.json();
      setCounts(data);
    };
    fetchCounts();
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: .5, delay: 0.2 }} 
    className="flex justify-center items-center mx-auto w-fit p-8 bg-white rounded-xl shadow-xl mb-8">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value">
            <CountUp end={counts.userCount || 0} duration={2} />
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Reviews</div>
          <div className="stat-value">
            <CountUp end={counts.reviewCount || 0} duration={2} />
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Services</div>
          <div className="stat-value">
            <CountUp end={counts.serviceCount || 0} duration={3} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stat;
