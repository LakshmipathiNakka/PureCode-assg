import {SiFacebook} from 'react-icons/si'
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="contact-container">
      <img
        className="logo-icon"
        src="https://monumental-ganache-c14cf0.netlify.app/static/media/logo1.95d47bbac8db6c1e8f997bbf26ca05cf.svg"
        alt="logo"
      />
      <p className="topic">
        <SiFacebook className="social-icon" /> Facebook
      </p>
      <p className="topic">
        <AiFillYoutube className="social-icon" /> Youtube
      </p>
      <p className="topic">
        <FaTelegram className="social-icon" /> Telegram
      </p>
      <p className="topic">
        <AiOutlineTwitter className="social-icon" /> Twitter
      </p>
    </div>
    <div className="contact-container">
      <h1 className="topic-title">Getting Started</h1>
      <p className="topic">Release Notes</p>
      <p className="topic">Upgrade Guide</p>
      <p className="topic">Browser Support</p>
      <p className="topic">Dark Mode</p>
    </div>
    <div className="contact-container">
      <h1 className="topic-title">Explore</h1>
      <p className="topic">Prototyping</p>
      <p className="topic">Design Systems</p>
      <p className="topic">Pricing</p>
      <p className="topic">Security</p>
    </div>
    <div className="contact-container">
      <h1 className="topic-title">Resources</h1>
      <p className="topic">Best Practices</p>
      <p className="topic">Support</p>
      <p className="topic">Developers</p>
      <p className="topic">Learn design</p>
    </div>
    <div className="contact-container">
      <h1 className="topic-title">Community</h1>
      <p className="topic">Discussion Forums</p>
      <p className="topic">Code of Conduct</p>
      <p className="topic">Contributing</p>
      <p className="topic">API Referencee</p>
    </div>
  </div>
)

export default Footer
