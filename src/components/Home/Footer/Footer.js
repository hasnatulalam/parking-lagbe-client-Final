import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../assets/images/footer.jpg"
import logo from "../../assets/images/logo.png"
import SocialIcons from "../../Shared/SocialIcons";


const Footer = () => {
  return (
    <div className="mt-auto" style={{ backgroundImage: `url(${footerImg})` }}>
      <footer>
        <div className="footer p-10 py-16 text-white ">
          <div className='bg-white text-secondary p-5 rounded'>
            <img src={logo} alt="" classN='mb-5 ' />
            <h4 className="text-xl">Immune and Inspired</h4>
            <SocialIcons></SocialIcons>
          </div>
          <div>
            <span className="footer-title text-lg text-primary mb-3 opacity-100">Explore Us</span>
            <Link to='/' className="link link-hover font-semibold text-white">About</Link>
            <Link to='/about' className="link link-hover font-semibold text-white">Contact Us</Link>
            <Link to='/contact' className="link link-hover font-semibold text-white">Contact Us</Link>
            <Link to='/#news-later' className="link link-hover font-semibold text-white">News Later</Link>
          </div>
          <div>
            <span className="footer-title text-lg text-primary mb-3 opacity-100">Company</span>
            <Link to='' className="link link-hover font-semibold text-white">About us</Link>
            <Link to='' className="link link-hover font-semibold text-white">Contact</Link>
            <Link to='' className="link link-hover font-semibold text-white">Jobs</Link>
            <Link to='' className="link link-hover font-semibold text-white">Press kit</Link>
          </div>
          <div>
            <span className="footer-title text-lg text-primary
             mb-3 opacity-100">Legal</span>
            <Link to='' className="link link-hover font-semibold text-white">Terms of use</Link>
            <Link to='' className="link link-hover font-semibold text-white">Privacy policy</Link>
            <Link to='' className="link link-hover font-semibold text-white">Cookie policy</Link>
          </div>
        </div>

        <div className="footer max-w-full footer-center pb-10 text-white">
          <div >
            <p>Copyright &copy;2022 Immune and Inspired</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
