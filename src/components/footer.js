import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      &copy; {new Date().getFullYear()} Dev Blog
    </footer>
  )
}

export default Footer
