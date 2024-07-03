import { motion } from 'framer-motion'

const jobListings = [
  { title: "Agricultural Engineer", department: "Agriculture" },
  { title: "Process Improvement Specialist", department: "Operations" },
  { title: "Sustainability Coordinator", department: "Environmental Affairs" },
  { title: "Marketing Manager", department: "Sales & Marketing" },
  { title: "Quality Assurance Analyst", department: "Quality Control" },
]

export const JobOpenings = () => {
  return (
    <section className="py-20 bg-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobListings.map((job, index) => (
            <motion.div
              key={job.title}
              className="bg-neutral-lightGray rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600">{job.department}</p>
              <motion.button
                className="mt-4 bg-primary text-white px-4 py-2 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}