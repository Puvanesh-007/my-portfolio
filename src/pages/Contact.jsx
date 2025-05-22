import { motion } from 'framer-motion'
import './Contact.scss'
const Contact = () => {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-details">
          <p><strong>Email:</strong> maheshp1729@gmail.com</p>
          <p><strong>Phone:</strong> +91 934-221-7137</p>
          <p><strong>Address:</strong> Boys Hostel 2, Anna University Regional Campus Coimbatore, Somayampalayam Village, Coimbatore, Tamil Nadu</p>
        </div>
      </div>
    </motion.section>
  )
}
export default Contact
