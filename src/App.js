import {Component} from 'react'

import CartContext from './context/CartContext'

import Header from './components/Header'
import Footer from './components/Footer'
import FormSection from './components/FormSection'
import OrderSection from './components/OrderSection'

import './App.css'

class App extends Component {
  render() {
    return (
      <CartContext.Provider>
        <div>
          <div className="logo-container">
            <img
              className="logo-img"
              alt="logo"
              src="https://monumental-ganache-c14cf0.netlify.app/static/media/logo.f6121fbbfec25dbc851a3e5aea13c8ad.svg"
            />
            <button className="buy-button" type="button">
              Buy Now
            </button>
          </div>
          <div className="app-container">
            <Header />
            <div className="order-section">
              <FormSection />
              <OrderSection />
            </div>

            <Footer />
          </div>
        </div>
      </CartContext.Provider>
    )
  }
}

export default App
