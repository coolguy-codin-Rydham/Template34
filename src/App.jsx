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

  return (
    <>
      <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              {/* <a href="index.html"> */}
                <img src={Logo} />
              {/* </a> */}
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Products.html">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact us
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  GET STARTED
                </button>
              </form>
              <div className="search_icon">
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
        <div className="banner_section layout_padding">
          <div className="container">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="your_text">Your Favorite</h1>
                      <h1 className="Shows_text">Shows And Movies</h1>
                      <p className="there_text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or
                      </p>
                      <div className="start_bt">
                        <a href="#">Start Now</a>
                      </div>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="images_1">
                        <img src={Img1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="your_text">Your Favorite</h1>
                      <h1 className="Shows_text">Shows And Movies</h1>
                      <p className="there_text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or
                      </p>
                      <div className="start_bt">
                        <a href="#">Start Now</a>
                      </div>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="images_1">
                        <img src={Img1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="your_text">Your Favorite</h1>
                      <h1 className="Shows_text">Shows And Movies</h1>
                      <p className="there_text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or
                      </p>
                      <div className="start_bt">
                        <a href="#">Start Now</a>
                      </div>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="images_1">
                        <img src={Img1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#main_slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa-arrow-left">
                  <img src={LeftArrow} />
                </i>
              </a>
              <a
                className="carousel-control-next"
                href="#main_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa-angle-right">
                  <img src={RightArrow} />
                </i>
              </a>
            </div>
            <div className="banner_section_2">
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="box_main">
                    <div className="internet_icon"></div>
                    <h4 className="broadband_text">Broadband</h4>
                    <p className="many_text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, m Ipsum, you need to be
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="box_main active">
                    <div className="internet_icon1"></div>
                    <h4 className="broadband_text active">Broadband</h4>
                    <p className="many_text active">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, m Ipsum, you need to be
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="box_main">
                    <div className="internet_icon2"></div>
                    <h4 className="broadband_text">Broadband</h4>
                    <p className="many_text">
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
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image_2">
                <img src={Img2} />
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="live_text">
                Live Sport and TV-shows for best friends
              </h1>
              <p className="lorem_text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
              <div className="online_bt_main">
                <div className="online_bt">
                  <a href="#">4K Ultra HD Quality</a>
                </div>
                <div className="online_bt1">
                  <a href="#">200+ Online Channels</a>
                </div>
                <div className="read_bt1">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_section layout_padding">
        <div className="container">
          <h2 className="tariffs_text">Tariffs</h2>
          <h1 className="choose_text">Choose your plan</h1>
          <p className="lorem_text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in
            elementum urna est ut ligula.
          </p>
          <div className="product_section2">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <h2 className="easy_text">Easy Surfing</h2>
                <h1 className="internet_text">Internet</h1>
                <div className="month_main clearfix">
                  <h1 className="dolor_text">$24.99</h1>
                  <h2 className="month_text">Month</h2>
                  <p className="long_text">
                    It is a long established f act distracteontent{" "}
                  </p>
                </div>
                <div className="seemore_main">
                  <div className="see_more">
                    <a href="#">SEE MORE</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <h2 className="easy_text">Impression</h2>
                <h1 className="internet_text">Tv</h1>
                <div className="month_main clearfix">
                  <h1 className="dolor_text">$24.99</h1>
                  <h2 className="month_text">Month</h2>
                  <p className="long_text">
                    It is a long established f act distracteontent{" "}
                  </p>
                </div>
                <div className="seemore_main">
                  <div className="see_more">
                    <a href="#">SEE MORE</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <h2 className="easy_text">Premium Plan</h2>
                <h1 className="internet_text">Internet + TV + Phone</h1>
                <div className="month_main clearfix">
                  <h1 className="dolor_text">$24.99</h1>
                  <h2 className="month_text">Month</h2>
                  <p className="long_text">
                    It is a long established f act distracteontent{" "}
                  </p>
                </div>
                <div className="seemore_main">
                  <div className="see_more">
                    <a href="#">SEE MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="check_text">
            Check ability to connect our services in your area
          </h1>
          <div className="contact_section2">
            <div className="addres_main">
              <div className="input_bg">
                <h3 className="fact_text">
                  It is a long established fact that a reader will be distracted
                </h3>
                <input
                  type="text"
                  className="address_text"
                  placeholder="Enter your address"
                  name="text"
                />
                <button type="button" className="get_bt">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="client_section layout_padding">
        <div className="container">
          <h1 className="client_taital">What our clients say</h1>
          <div className="client_section2 layout_padding">
            <div className="row">
              <div className="col-sm-4">
                <div className="client_image">
                  <img src={Img3} />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="miller_text">
                  Miller
                  <span className="quote_icon">
                    <img src={Quote} />
                  </span>
                </div>
                <p className="ipsum_text">
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
      <div className="subscribe_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h1 className="subscribe_text">Subscribe Now</h1>
            </div>
            <div className="col-sm-8">
              <div className="mail_main">
                <input
                  type="text"
                  className="address_text1"
                  placeholder="Enter your address"
                  name="text"
                />
                <button type="button" className="get_bt1">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="fooer_logo">
                <img src={Footer} />
              </div>
              <h1 className="customer_text">CUSTOMER SERVICE</h1>
              <p className="footer_lorem_text">
                There are many variat ions of passages of L orem Ipsum available
                , but the majority h ave suffered altera tion in some form, by{" "}
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="customer_text">LET US HELP YOU</h1>
              <p className="footer_lorem_text">
                There are many variat ions of passages of L orem Ipsum available
                , but the majority h ave suffered altera tion in some form, by{" "}
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="customer_text">INFORMATION</h1>
              <p className="footer_lorem_text1">
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
            <div className="col-lg-3 col-sm-6">
              <h1 className="customer_text">OUR SHOP</h1>
              <p className="footer_lorem_text">
                There are many variat ions of passages of L orem Ipsum available
                , but the majority h ave suffered altera tion in some form, by{" "}
              </p>
              <div className="social_icon">
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
      <div className="copyright_section">
        <div className="container">
          <div className="border"></div>
          <p className="copyright_text">
            2020 All Rights Reserved. Design by{" "}
            <a href="https://html.design">Free html Templates</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
