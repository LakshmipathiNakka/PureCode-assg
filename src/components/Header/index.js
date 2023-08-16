import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="nav-bar-large-container">
          <div>
            <img
              className="website-logo"
              alt="logo"
              src="https://monumental-ganache-c14cf0.netlify.app/static/media/logo1.95d47bbac8db6c1e8f997bbf26ca05cf.svg"
            />
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">.</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <p className="nav-link active" aria-current="page" href="#">
                    Men
                  </p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">Women</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">Beauty</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">Sport</p>
                </li>

                <li className="nav-item dropdown">
                  <p
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Templates
                  </p>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <p className="dropdown-item">Action</p>
                    </li>
                    <li>
                      <p className="dropdown-item">Another action</p>
                    </li>
                    <li>
                      <p className="dropdown-item">Something else here</p>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <p
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Explore
                  </p>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <p className="dropdown-item">Action</p>
                    </li>
                    <li>
                      <p className="dropdown-item">Another action</p>
                    </li>
                    <li>
                      <p className="dropdown-item">Something else here</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <AiOutlineSearch className="icon" />
            <AiOutlineShoppingCart className="icon" />
            <BsFillPersonFill className="icon" />
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
