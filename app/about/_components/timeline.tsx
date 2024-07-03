import { motion } from 'framer-motion'

const timelineEvents = [
  { year: 1971, event: "Mumias Sugar Company founded" },
  { year: 1976, event: "First sugar production" },
  { year: 1990, event: "Expansion of production capacity" },
  { year: 2001, event: "Implementation of sustainable farming practices" },
  { year: 2015, event: "Modernization of factory equipment" },
  { year: 2024, event: "Celebrating over 50 years of sweetening lives" },
]

export const Timeline = () => {
  return (
    <section className="py-20 text-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
        <div className="relative">
          {timelineEvents.map((item, index) => (
            <motion.div 
              key={item.year}
              className="mb-8 flex"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-1 text-right pr-8">
                {index % 2 === 0 && (
                  <>
                    <h3 className="text-xl font-semibold">{item.year}</h3>
                    <p>{item.event}</p>
                  </>
                )}
              </div>
              <div className="w-4 h-4 bg-accent-blue rounded-full mt-2 relative">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="flex-1 pl-8">
                {index % 2 !== 0 && (
                  <>
                    <h3 className="text-xl font-semibold">{item.year}</h3>
                    <p>{item.event}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-blue -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  )
}
