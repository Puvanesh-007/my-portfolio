import { motion } from 'framer-motion'
import './Projects.scss'
const projects = [
  {
  id: 1,
  title: "Android Application - Podcast App",
  description: "A mobile app to stream, download, and manage podcasts with a user-friendly interface and offline support.",
  technologies: ["Java/Kotlin", "Android Studio", "Retrofit", "SQLite", "Firebase"],
  link: "https://github.com/Nithish2005333/PodcastPlus-NM2024TMID05887"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Another project description",
    technologies: ["JavaScript", "CSS", "HTML"],
    link: "#"
  }
]
const Projects = () => {
  const project = projects[0]
  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container single-project-container">
        <div className="project-card single-project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <a href={project.link} className="btn">View Project</a>
        </div>
      </div>
    </motion.section>
  )
}
export default Projects
