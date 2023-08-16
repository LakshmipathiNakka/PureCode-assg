import {BsInfoCircleFill} from 'react-icons/bs'
import {BiColorFill} from 'react-icons/bi'
import {IoIosResize} from 'react-icons/io'

import {Component} from 'react'
import './index.css'

class OrderSection extends Component {
  state = {
    Q1: 1,
    Q2: 1,
    Q3: 1,
  }

  onIncrement1 = () => {
    this.setState(prevState => ({Q1: prevState.Q1 + 1}))
  }

  onIncrement2 = () => {
    this.setState(prevState => ({Q2: prevState.Q2 + 1}))
  }

  onIncrement3 = () => {
    this.setState(prevState => ({Q3: prevState.Q3 + 1}))
  }

  onDecrement1 = () => {
    const {Q1} = this.state
    if (Q1 >= 2) {
      this.setState(prevState => ({Q1: prevState.Q1 - 1}))
    }
  }

  onDecrement2 = () => {
    const {Q2} = this.state
    if (Q2 >= 2) {
      this.setState(prevState => ({Q2: prevState.Q2 - 1}))
    }
  }

  onDecrement3 = () => {
    const {Q3} = this.state
    if (Q3 >= 2) {
      this.setState(prevState => ({Q3: prevState.Q3 - 1}))
    }
  }

  render() {
    const {Q1, Q2, Q3} = this.state
    const price1 = Q1 * 74
    const price2 = Q2 * 132
    const price3 = Q3 * 28
    const subTotal = price1 + price2 + price3
    const grandTotal = subTotal + 5 + 24.9
    return (
      <div className="order-container">
        <h1 className="order-heading">Order Summary</h1>
        <div className="product-container">
          <div className="image-container">
            <img
              className="product-image"
              alt="product"
              src="https://monumental-ganache-c14cf0.netlify.app/static/media/hoodie.7701cf9446a6b588de67.png"
            />
          </div>
          <div className="product-details">
            <p>Rey Nylon Backpack</p>
            <div className="color-size">
              <p className="black-text">
                <BiColorFill className="size-icon" />
                Black
              </p>

              <p>
                <IoIosResize className="size-icon" /> 2XL
              </p>
            </div>
            <div className="color-size">
              <button
                onClick={this.onDecrement1}
                type="button"
                className="icon-button"
              >
                -
              </button>

              <p className="quantity-No">{Q1}</p>
              <button
                onClick={this.onIncrement1}
                type="button"
                className="icon-button"
              >
                +
              </button>
            </div>
          </div>
          <div className="product-details">
            <button className="price" type="button">
              {`$ ${price1}`}
            </button>
            <button className="remove-button" type="button">
              remove
            </button>
          </div>
        </div>
        <hr />
        <div className="product-container">
          <div className="image-container">
            <img
              className="product-image"
              alt="product"
              src="https://monumental-ganache-c14cf0.netlify.app/static/media/beanie.5ed8bd8a65af67fd6c5c.png"
            />
          </div>
          <div className="product-details">
            <p>Rey Nylon Backpack</p>
            <div className="color-size">
              <p className="black-text">
                <BiColorFill className="size-icon" />
                Black
              </p>

              <p>
                <IoIosResize className="size-icon" /> 2XL
              </p>
            </div>
            <div className="color-size">
              <button
                onClick={this.onDecrement2}
                type="button"
                className="icon-button"
              >
                -
              </button>

              <p className="quantity-No">{Q2}</p>
              <button
                onClick={this.onIncrement2}
                type="button"
                className="icon-button"
              >
                +
              </button>
            </div>
          </div>
          <div className="product-details">
            <button className="price" type="button">
              {`$ ${price2}`}
            </button>
            <button className="remove-button" type="button">
              remove
            </button>
          </div>
        </div>
        <hr />
        <div className="product-container">
          <div className="image-container">
            <img
              className="product-image"
              alt="product"
              src="https://monumental-ganache-c14cf0.netlify.app/static/media/purse.7342ded3cf1426f3ce5e.png"
            />
          </div>
          <div className="product-details">
            <p>Rey Nylon Backpack</p>
            <div className="color-size">
              <p className="black-text">
                <BiColorFill className="size-icon" />
                Black
              </p>

              <p>
                <IoIosResize className="size-icon" /> 2XL
              </p>
            </div>
            <div className="color-size">
              <button
                onClick={this.onDecrement3}
                type="button"
                className="icon-button"
              >
                -
              </button>

              <p className="quantity-No">{Q3}</p>
              <button
                onClick={this.onIncrement3}
                type="button"
                className="icon-button"
              >
                +
              </button>
            </div>
          </div>
          <div className="product-details">
            <button className="price" type="button">
              {`$ ${price3}`}
            </button>
            <button className="remove-button" type="button">
              remove
            </button>
          </div>
        </div>

        <div className="input-container">
          <div>
            <label htmlFor="discount">Discount code</label>
            <input
              className="form-control input-field"
              id="discount"
              type="text"
            />
          </div>
          <button type="button" className="apply-button">
            Apply
          </button>
        </div>
        <div className="final-price">
          <div className="price-detailes">
            <p>Subtotal</p>
            <p>Shipping estimate</p>
            <p>Tax estimate</p>
            <p className="order-total">Order total</p>
          </div>
          <div className="order-total">
            <p> {`$ ${subTotal}`} </p>
            <p>$5.00</p>
            <p>$24.90</p>
            <p> {`$ ${grandTotal} `} </p>
          </div>
        </div>
        <div className="text-center">
          <button type="button" className="custom-button">
            Confirm Order
          </button>
          <p>
            <BsInfoCircleFill className="social-icon" /> Learn more
            <span className="check-underline "> Taxes</span> and
            <span className="check-underline "> Shipping</span> information
          </p>
        </div>
      </div>
    )
  }
}
export default OrderSection
