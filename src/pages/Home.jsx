import { motion } from 'framer-motion'
import './Home.scss'
const Home = () => {
  return (
    <motion.section 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home-content">
        <h1>Hi, I'm <span>Puvanesh P</span></h1>
        <h2>CSE Student</h2>
        <p>I build beautiful, responsive websites and applications</p>
      </div>
    </motion.section>
  )
}
export default Home