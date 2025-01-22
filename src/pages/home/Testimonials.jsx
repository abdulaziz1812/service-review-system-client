import { motion } from "framer-motion";
import sarah from "../../assets/Testimonial Pic/sarah.jpg"
import michael from "../../assets/Testimonial Pic/Michael.jpg"
import emma from "../../assets/Testimonial Pic/emma.jpg"

// Sample testimonials data (replace with actual user data)
const testimonials = [
  {
    name: "Sarah ",
    comment: "Review Radar made it so easy to share my feedback. The platform is user-friendly, and I love how the reviews help others make informed decisions!",
    avatar: sarah,
  },
  {
    name: "Michael",
    comment: "I’ve been able to discover the best services thanks to the detailed reviews on Review Radar. Highly recommended!",
    avatar: michael,
  },
  {
    name: "Emma",
    comment: "The review submission process is seamless. I feel like my opinions are valued, and the community is great!",
    avatar: emma,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-5 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">What Users Say About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
            />
            <h3 className="font-semibold text-xl mb-2">{testimonial.name}</h3>
            <p className="text-gray-600 mt-4">"{testimonial.comment}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
