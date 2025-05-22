import { motion } from 'framer-motion'
import './About.scss'

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h2 className="blue-title">About Me</h2>
        
        <div className="about-content">
          <div className="content-card">
            <h3>Profile</h3>
            <p>
              Passionate Computer Science Engineering student with a strong foundation in programming, algorithms, and web development.
              Enthusiastic about problem-solving, AI, and full-stack development. Eager to apply technical skills to real-world projects and contribute to innovative solutions.
            </p>
          </div>

          <div className="content-card">
            <h3>Skill Sets</h3>
            <ul>
              <li>Effective English communication</li>
              <li>Leadership development and hardworking</li>
              <li>Basics of C, Python, and Java programming languages</li>
              <li>Basics of MS Word, PowerPoint, Excel</li>
              <li>Web and App development - HTML, CSS, JavaScript, PHP, and Kotlin</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
