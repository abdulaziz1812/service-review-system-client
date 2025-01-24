import { motion } from "framer-motion";
import choose from "../../assets/how it works/choose.jpg";
import rate from "../../assets/how it works/rate.jpg";
import review from "../../assets/how it works/review.jpg";

const steps = [
  {
    title: "Choose a Service",
    description: "Browse through the list of services available for review.",
    icon: choose,
  },
  {
    title: "Rate the Service",
    description: "Give your rating based on your experience with the service.",
    icon: rate,
  },
  {
    title: "Write Your Review",
    description:
      "Share your thoughts on what went well and what could be improved.",
    icon: review,
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 px-5 bg-white ">
      <div className="w-10/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 shadow-lg p-6 rounded-lg text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="mx-auto mb-4 w-40 h-40 object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
