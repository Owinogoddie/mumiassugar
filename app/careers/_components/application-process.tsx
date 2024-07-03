import { motion } from 'framer-motion'

const steps = [
  { title: "Browse Openings", description: "Explore our current job listings and find the perfect fit for your skills and aspirations." },
  { title: "Submit Application", description: "Complete our online application form and upload your resume and cover letter." },
  { title: "Initial Screening", description: "Our HR team will review your application and reach out if there is a potential match." },
  { title: "Interviews", description: "Participate in a series of interviews to showcase your skills and learn more about the role." },
  { title: "Job Offer", description: "If selected, you'll receive a competitive job offer to join our team." },
]

export const ApplicationProcess = () => {
  return (
    <section className="py-20 bg-neutral-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Application Process</h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex items-start mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}