import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import './ThemeToggle.scss'
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    document.body.classList.toggle('dark-mode', isDark)
  }, [])
  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode)
    document.body.classList.toggle('dark-mode', newMode)
  }
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}
export default ThemeToggle