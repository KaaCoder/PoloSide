import {  AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GiSmartphone } from 'react-icons/gi';
import { CiMail } from 'react-icons/ci';
function Footer() {
    return (
        <>
            <footer>
          <div className="footer" id='contact'>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 xol-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="left-info">
                  <h6 className="title">get in touch</h6>
                  <h1 className="name"> Contact Us </h1>
                  <div className="row">
                    <div className="col-6 default">
                      <div className="details">
                        <HiOutlineLocationMarker className='Loc' />
                        <h1>Address</h1>
                        <h5>123 Street Name, City, England</h5>
                      </div>
                    </div>
                    <div className="col-6 bottom">
                      <div className="details">
                        <GiSmartphone className='Loc' />
                        <h1>Phone Nnumber</h1>
                        <h5>(800) 123-4567</h5>
                      </div>
                    </div>
                    <div className="col-6 default">
                      <div className="details">
                        <CiMail className='Loc' />
                        <h1>E-mail Adress</h1>
                        <h5>porto@portotheme.com</h5>
                      </div>
                    </div>
                    <div className="col-6 bottom">
                      <div className="details">
                        <AiOutlineCalendar className='Loc' />
                        <h1>Working Days/Hours</h1>
                        <h5>Mon - Sun / 9:00AM - 8:00PM</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 xol-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="form-box">
                  <h6 className="title">contact form</h6>
                  <h1 className="name"> Send a Message </h1>
                  <input maxLength='15' type="text" placeholder='Your Name' />
                  <input maxLength='12' type="url" placeholder='Your Address' />
                  <textarea maxLength='50' placeholder='Your Message' rows={3}></textarea><br />
                  <button className="defaultButton">Send Message</button>
                </div>
              </div>
            </div>
            <div className="mention">
              <p className="ment">
                <a href="https://t.me/kaan_coder">Yedo </a> &copy; 2023. All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
        </>
    )

}
export default Footer