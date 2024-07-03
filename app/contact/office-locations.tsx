import { motion } from 'framer-motion'

const locations = [
  {
    name: "Headquarters",
    address: "123 Sugar Lane, Mumias, Kenya",
    phone: "+254 20 111 2222",
    email: "hq@mumiassugar.com"
  },
  {
    name: "Nairobi Office",
    address: "456 Uhuru Highway, Nairobi, Kenya",
    phone: "+254 20 333 4444",
    email: "nairobi@mumiassugar.com"
  },
  {
    name: "Mombasa Distribution Center",
    address: "789 Port Road, Mombasa, Kenya",
    phone: "+254 20 555 6666",
    email: "mombasa@mumiassugar.com"
  }
]

export const OfficeLocations = () => {
  return (
    <section className="py-20 bg-neutral-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
              <p className="mb-2">{location.address}</p>
              <p className="mb-2">Phone: {location.phone}</p>
              <p>Email: {location.email}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}