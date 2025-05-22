import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './SocialLinks.scss'
const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/Puvanesh-007" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/puvanesh-p-2387a0355/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </div>
  )
}
export default SocialLinks