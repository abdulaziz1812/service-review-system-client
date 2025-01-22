import { motion } from "framer-motion";

const partners = [
  {
    name: "Tech Solutions Ltd.",
    logo: "https://i.ibb.co.com/k9srZn7/Tech-Solutions-Ltd.jpg ", // Replace with actual logo URL
    description: "Tech Solutions Ltd. is a leader in innovative software development and IT consulting.",
  },
  {
    name: "Creative Designs Studio",
    logo: "https://i.ibb.co.com/rFr3bS5/Creative-Designs-Studio.jpg", // Replace with actual logo URL
    description: "Creative Designs Studio specializes in graphic design, branding, and digital marketing strategies.",
  },
  {
    name: "Cloud Innovations",
    logo: "https://i.ibb.co.com/qgXWp29/Cloud-Innovations.jpg", // Replace with actual logo URL
    description: "Cloud Innovations offers cloud computing services that help businesses scale efficiently.",
  },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <section className="py-16 px-5 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
            />
            <h3 className="font-semibold text-xl mb-2">{partner.name}</h3>
            <p className="text-gray-700">{partner.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
