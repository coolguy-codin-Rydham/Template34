import { useState } from "react";
import Logo from "./images/logo.png"
import BagIcon from "./images/bag-icon.png"
import Fb from "./images/fb-icon.png"
import Footer from "./images/footer-logo.png"
import Img1 from "./images/img-1.png"
import Img2 from './images/img-2.png'
import Img3 from './images/img-3.png'
import InstaIcon from "./images/instagram-icon.png"
import LeftArrow from "./images/left-arrow.png"
import Linkedin from "./images/linkedin-icon.png"
import Quote from "./images/quote-icon.png"
import RightArrow from "./images/right-arrow.png"
import Search from "./images/search-icon.png"
import Twitter from "./images/twitter-icon.png"
import User from "./images/user-icon.png"
import "./css/style.css"




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="logo">
              <a href="index.html">
                <img src={Logo} />
              </a>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Products.html">
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Contact us
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  GET STARTED
                </button>
              </form>
              <div class="search_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src={User} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={BagIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Search} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="banner_section layout_padding">
          <div class="container">
            <div id="main_slider" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-md-6">
                      <h1 class="your_text">Your Favorite</h1>
                      <h1 class="Shows_text">Shows And Movies</h1>
                      <p class="there_text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or
                      </p>
                      <div class="start_bt">
                        <a href="#">Start Now</a>
                      </div>
                      <div class="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="images_1">
                        <img src={Img1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-6">
                      <h1 class="your_text">Your Favorite</h1>
                      <h1 class="Shows_text">Shows And Movies</h1>
                      <p class="there_text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or
                      </p>
                      <div class="start_bt">
                        <a href="#">Start Now</a>
                      </div>
                      <div class="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="images_1">
                        <img src={Img1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-6">
                      <h1 class="your_text">Your Favorite</h1>
                      <h1 class="Shows_text">Shows And Movies</h1>
                      <p class="there_text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or
                      </p>
                      <div class="start_bt">
                        <a href="#">Start Now</a>
                      </div>
                      <div class="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="images_1">
                        <img src={Img1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#main_slider"
                role="button"
                data-slide="prev"
              >
                <i class="fa-arrow-left">
                  <img src={LeftArrow} />
                </i>
              </a>
              <a
                class="carousel-control-next"
                href="#main_slider"
                role="button"
                data-slide="next"
              >
                <i class="fa-angle-right">
                  <img src={RightArrow} />
                </i>
              </a>
            </div>
            <div class="banner_section_2">
              <div class="row">
                <div class="col-lg-4 col-sm-12">
                  <div class="box_main">
                    <div class="internet_icon"></div>
                    <h4 class="broadband_text">Broadband</h4>
                    <p class="many_text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, m Ipsum, you need to be
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                  <div class="box_main active">
                    <div class="internet_icon1"></div>
                    <h4 class="broadband_text active">Broadband</h4>
                    <p class="many_text active">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, m Ipsum, you need to be
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                  <div class="box_main">
                    <div class="internet_icon2"></div>
                    <h4 class="broadband_text">Broadband</h4>
                    <p class="many_text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, m Ipsum, you need to be
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="image_2">
                <img src={Img2} />
              </div>
            </div>
            <div class="col-md-6">
              <h1 class="live_text">
                Live Sport and TV-shows for best friends
              </h1>
              <p class="lorem_text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
              <div class="online_bt_main">
                <div class="online_bt">
                  <a href="#">4K Ultra HD Quality</a>
                </div>
                <div class="online_bt1">
                  <a href="#">200+ Online Channels</a>
                </div>
                <div class="read_bt1">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product_section layout_padding">
        <div class="container">
          <h2 class="tariffs_text">Tariffs</h2>
          <h1 class="choose_text">Choose your plan</h1>
          <p class="lorem_text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in
            elementum urna est ut ligula.
          </p>
          <div class="product_section2">
            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <h2 class="easy_text">Easy Surfing</h2>
                <h1 class="internet_text">Internet</h1>
                <div class="month_main clearfix">
                  <h1 class="dolor_text">$24.99</h1>
                  <h2 class="month_text">Month</h2>
                  <p class="long_text">
                    It is a long established f act distracteontent{" "}
                  </p>
                </div>
                <div class="seemore_main">
                  <div class="see_more">
                    <a href="#">SEE MORE</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                <h2 class="easy_text">Impression</h2>
                <h1 class="internet_text">Tv</h1>
                <div class="month_main clearfix">
                  <h1 class="dolor_text">$24.99</h1>
                  <h2 class="month_text">Month</h2>
                  <p class="long_text">
                    It is a long established f act distracteontent{" "}
                  </p>
                </div>
                <div class="seemore_main">
                  <div class="see_more">
                    <a href="#">SEE MORE</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                <h2 class="easy_text">Premium Plan</h2>
                <h1 class="internet_text">Internet + TV + Phone</h1>
                <div class="month_main clearfix">
                  <h1 class="dolor_text">$24.99</h1>
                  <h2 class="month_text">Month</h2>
                  <p class="long_text">
                    It is a long established f act distracteontent{" "}
                  </p>
                </div>
                <div class="seemore_main">
                  <div class="see_more">
                    <a href="#">SEE MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact_section layout_padding">
        <div class="container">
          <h1 class="check_text">
            Check ability to connect our services in your area
          </h1>
          <div class="contact_section2">
            <div class="addres_main">
              <div class="input_bg">
                <h3 class="fact_text">
                  It is a long established fact that a reader will be distracted
                </h3>
                <input
                  type="text"
                  class="address_text"
                  placeholder="Enter your address"
                  name="text"
                />
                <button type="button" class="get_bt">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="client_section layout_padding">
        <div class="container">
          <h1 class="client_taital">What our clients say</h1>
          <div class="client_section2 layout_padding">
            <div class="row">
              <div class="col-sm-4">
                <div class="client_image">
                  <img src={Img3} />
                </div>
              </div>
              <div class="col-sm-8">
                <div class="miller_text">
                  Miller
                  <span class="quote_icon">
                    <img src={Quote} />
                  </span>
                </div>
                <p class="ipsum_text">
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id e
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="subscribe_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h1 class="subscribe_text">Subscribe Now</h1>
            </div>
            <div class="col-sm-8">
              <div class="mail_main">
                <input
                  type="text"
                  class="address_text1"
                  placeholder="Enter your address"
                  name="text"
                />
                <button type="button" class="get_bt1">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="fooer_logo">
                <img src={Footer} />
              </div>
              <h1 class="customer_text">CUSTOMER SERVICE</h1>
              <p class="footer_lorem_text">
                There are many variat ions of passages of L orem Ipsum available
                , but the majority h ave suffered altera tion in some form, by{" "}
              </p>
            </div>
            <div class="col-lg-3 col-sm-6">
              <h1 class="customer_text">LET US HELP YOU</h1>
              <p class="footer_lorem_text">
                There are many variat ions of passages of L orem Ipsum available
                , but the majority h ave suffered altera tion in some form, by{" "}
              </p>
            </div>
            <div class="col-lg-3 col-sm-6">
              <h1 class="customer_text">INFORMATION</h1>
              <p class="footer_lorem_text1">
                About Us
                <br />
                Careers
                <br />
                Sell on shopee
                <br />
                Press & News
                <br />
                Competitions
                <br />
                Terms & Conditions
              </p>
            </div>
            <div class="col-lg-3 col-sm-6">
              <h1 class="customer_text">OUR SHOP</h1>
              <p class="footer_lorem_text">
                There are many variat ions of passages of L orem Ipsum available
                , but the majority h ave suffered altera tion in some form, by{" "}
              </p>
              <div class="social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src={Fb} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Twitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={InstaIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Linkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright_section">
        <div class="container">
          <div class="border"></div>
          <p class="copyright_text">
            2020 All Rights Reserved. Design by{" "}
            <a href="https://html.design">Free html Templates</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;