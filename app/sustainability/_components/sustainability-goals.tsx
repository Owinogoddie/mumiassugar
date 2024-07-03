import { motion } from 'framer-motion'

const goals = [
  { title: "Carbon Neutral by 2030", description: "Achieve carbon neutrality in our operations through renewable energy and offset programs" },
  { title: "Zero Waste to Landfill", description: "Implement comprehensive recycling and upcycling programs to eliminate waste sent to landfills" },
  { title: "100% Sustainable Sourcing", description: "Ensure all our raw materials are sourced from sustainable and ethical suppliers" },
  { title: "Water Positive by 2035", description: "Implement water conservation measures to return more water to communities and nature than we use" },
]

export const SustainabilityGoals = () => {
  return (
    <section className="py-20 bg-primary text-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Sustainability Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <motion.div 
              key={goal.title}
              className="bg-accent-blue bg-opacity-20 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
              <p>{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}