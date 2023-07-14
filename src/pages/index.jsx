import Head from 'next/head'
import Navbar from './components/navbar'
import Footer from './components/footer'
import BuyProduct from './components/buy'
import { team, work, priece, product } from './data/json'
import Image from 'next/image'
import Back from '../../public/im.jpg'
import Bed from '../../public/divan.png'
import { FaTelegramPlane, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiFillCheckCircle, AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi';
import { CiMail } from 'react-icons/ci';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

const responsives = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const getServerSideProps = async () => {
  return {
    props: {
      pTeam: team,
      pWork: work,
      pPriece: priece,
      pProduct: product,
    }
  }
}

export default function Home({ pTeam, pWork, pPriece, pProduct }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <title>YEDO - PoloSide</title>
      </Head>

      <Navbar />
      <div className="Body" id='hero'>
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" data-aos="fade-up">
                <h1 className='name'>We Are Digital Experts Let's Join Our Team?</h1>
                <h4>Based in Los Angeles / CA</h4>
                <h6 className='taggers'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, pariatur molestiae doloremque nostrum enim vitae nobis non inventore quaerat repellat!</h6>
                <button className='defaultButton'>Get Started</button>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="right_top">
                  <Image src={Back} className='img-fluid' />
                  <div className="shape"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about" id='about'>
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="img_part">
                  <Image src={Bed} className='img-fluid' />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" data-aos="fade-up">
                <div className="text_right">
                  <h6 className="title">about</h6>
                  <h1 className="name">We Create Digital Solutions Services.</h1>
                  <h5 className='taggers'>Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</h5>
                  <h5 className="info">Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.</h5>
                  <button className="defaultButton">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team" id='team'>
          <div className="container">
            <div className="HeadTitle" data-aos="fade-up">
            <h6 className="title">our team</h6>
            <h1 className="name">We Are Passionate</h1>
            <h6 className="info">Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.</h6>
            </div>
            <div className="row" data-aos="fade-up" data-aos-duration="3000">
              {pTeam.map((teamm) => {
                return (
                  <>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="card">
                        <div className="img_frame">
                          <img src={teamm.img} alt="" />
                        </div>
                        <h4 className='n2_name'>{teamm.name}</h4>
                        <p className='n2_title'>{teamm.job}</p>
                      </div>
                    </div>

                  </>
                )
              })}
            </div>
          </div>
        </div>
        <div className="work" id='work' data-aos="fade-left">
          <div className="container">

            <h6 className="title">our works</h6>
            <h1 className="name"> Love What We Do </h1>
            <h5 className='info'>Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.</h5>

            <Carousel responsive={responsives}>
              <div>
                <div className="row">
                  {pWork.map((works) => {
                    return (
                      <>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="card-work">
                            <div className="imagess">
                              <img src={works.img} className='img-fluid' lt="Works" />
                            </div>
                            <div className="shape-hover">
                              <h4 className='n2_name'>view works</h4>
                              <p className='n2_title'>Click for enter</p>
                              <div className="icons">
                                <FaTelegramPlane className='icns' />
                                <FaInstagram className='icns' />
                                <FaLinkedinIn className='icns' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>
              </div>
              <div>
                <div className="row">
                  {pWork.map((works) => {
                    return (
                      <>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="card-work">
                            <img src={works.img} className='img-fluid' lt="Works" />
                            <div className="shape-hover">
                              <h2>view works</h2>
                              <p>Click for enter</p>
                              <div className="icons">
                                <FaTelegramPlane className='icns' />
                                <FaInstagram className='icns' />
                                <FaLinkedinIn className='icns' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>
              </div>
            </Carousel>

          </div>
        </div>
        <div className="pricing" id='pricing' data-aos="fade-up">
          <div className="container">
            <h6 className="title">our pricing</h6>
            <h1 className="name"> Best Price Guarantee </h1>
            <h5 className='info' >Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.</h5>
            <div className="row">
              {pPriece.map((pric) => {
                return (
                  <>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="prices">
                        <div className="price-title">
                          <h4 className="title_price">{pric.title}</h4>
                        </div>
                        <h6 className="per"><BsFillCalendarCheckFill className='data' />{pric.per}</h6>
                        <div className="features">
                          <p className="feature"><AiFillCheckCircle className='checking_icon' />{pric.featureA}</p>
                          <p className="feature"><AiFillCheckCircle className='checking_icon' />{pric.featureB}</p>
                          <p className="feature"><AiFillCheckCircle className='checking_icon' />{pric.featureC}</p>
                          <p className="feature-d"><AiFillCheckCircle className='checking_icon disabled' />{pric.featureD}</p>
                          <p className="feature-d"><AiFillCheckCircle className='checking_icon disabled' />{pric.featureF}</p>
                          <div className="btn_anima">
                            <div className="circle"></div>
                            <p>PURCHASE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
        <div className="blog" id='product' data-aos="fade-up">
          <div className="container">
            <h6 className="title">our product</h6>
            <h1 className="name"> Top Seller Products </h1>
            <h5 className='info' >Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.</h5>
            <div className="row">
              {pProduct.map((prod) => {
                return (
                  <>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 xol-xs-12">
                      <div className="card">

                        <div className="imgBox">
                          <img src={prod.img} alt="mouse corsair" className="mouse img-fluid" />
                        </div>

                        <div className="contentBox">
                          <h4 className='n2_name'>{prod.name}</h4>
                          <h2 className="price">{prod.priece}<small>{prod.pricSmall}</small> €</h2>
                          <BuyProduct />
                        </div>

                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
        <Footer />


      </div>


    </>
  )
}
