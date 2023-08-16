import {IoIosContact} from 'react-icons/io'
import {BiCheck} from 'react-icons/bi'
import {MdPayment} from 'react-icons/md'
import {FaShippingFast} from 'react-icons/fa'

import './index.css'

const FormSection = () => (
  <div>
    <div className="checkout-container">
      <h1 className="check-heading">Checkout</h1>
      <p className="path-para">
        Homepage / Clothing Categories /
        <span className="check-underline">Checkout</span>
      </p>
    </div>
    <div className="contact-info-container">
      <div>
        <h1 className="contact-info-heading">
          <IoIosContact className="social-icon" /> CONTACT INFO
          <BiCheck className="social-icon" />
        </h1>
        <p className="contact-description">Enrico Smith +855-666-7744</p>
      </div>
      <div>
        <button className="change-button" type="button">
          Change
        </button>
      </div>
    </div>
    <div className="user-container">
      <div className="user-address-container">
        <div>
          <h1 className="contact-info-heading">
            <FaShippingFast className="social-icon" /> SHIPPING ADDRESS
            <BiCheck className="social-icon" />
          </h1>
          <p className="contact-description">
            St. Paul`s Road, Norris, SD 57560, Dakota, USA
          </p>
        </div>
        <div>
          <button className="change-button" type="button">
            Change
          </button>
        </div>
      </div>
      <hr />
      <form>
        <div className="input-container">
          <div className="input-container-1">
            <label htmlFor="name">First Name</label>
            <input
              placeholder="First Name"
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="input-container-1">
            <label className="Last name" htmlFor="Last name">
              Last name
            </label>
            <input
              className="form-control"
              id="Last name"
              placeholder="Last name"
              type="text"
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-container-1">
            <label className="Address" htmlFor="Address">
              Address
            </label>
            <input
              className="form-control address-input"
              id="Address"
              placeholder="Address"
              type="text"
            />
          </div>
          <div className="input-container-1">
            <label className="" htmlFor="Apt, Suite *">
              Apt, Suite *
            </label>
            <input
              className="form-control"
              id="Apt, Suite *"
              placeholder="Apt"
              type="text"
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-container-1">
            <label className="" htmlFor="City">
              City
            </label>
            <input
              className="form-control"
              id="City"
              placeholder="City"
              type="text"
            />
          </div>
          <div className="input-container-1">
            <label className="" htmlFor="Country">
              Country
            </label>
            <select className="form-control" id="Country">
              <option value="select Country">Select Country</option>
              <option value="Country 1">Country 1</option>
              <option value="Country 2">Country 2</option>
            </select>
          </div>
        </div>
        <div className="input-container">
          <div className="input-container-1">
            <label className="" htmlFor="State/Province">
              State/Province
            </label>
            <input
              className="form-control"
              id="State/Province"
              placeholder="State"
              type="text"
            />
          </div>
          <div className="input-container-1">
            <label className="" htmlFor="Postal code">
              Postal code
            </label>
            <input
              className="form-control"
              id="Postal code"
              placeholder="Postal code"
              type="text"
            />
          </div>
        </div>
        <div>
          <p>Address Type</p>
          <div className="input-container">
            <div>
              <input type="radio" name="Address Type" id="home" />
              <label className="radio-lable" htmlFor="home">
                Home (All day Delivery)
              </label>
            </div>
            <div>
              <input type="radio" name="Address Type" id="office" />
              <label className="radio-lable" htmlFor="office">
                Office (Delivery 9 AM - 5 PM)
              </label>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="custom-button" type="submit">
            Save and next to Payment
          </button>
          <button className="cancel-button" type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
    <div className="contact-info-container">
      <div>
        <h1 className="contact-info-heading">
          <MdPayment className="social-icon" /> PAYMENT METHOD
          <BiCheck className="social-icon" />
        </h1>
        <p className="contact-description">
          Google / Apple Wallet xxx-xxx-xx55
        </p>
      </div>
      <div>
        <button className="change-button" type="button">
          Change
        </button>
      </div>
    </div>
  </div>
)

export default FormSection
