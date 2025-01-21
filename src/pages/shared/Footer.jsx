import React from "react";
import logo from "../../assets/Icon.png";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto">

        <footer className="footer  text-base-content p-10 ">
      <aside className="">
        <img src={logo} alt="" />
        <p>
          <strong>Review Radar Ltd.</strong>
          <br />
          Your go-to platform for discovering 
          <br />
           and sharing authentic service reviews.
           <br />
            Connect, explore, and share experiences with confidence.
        </p>
        <div className="flex gap-4 text-3xl">
              <Link to="https://www.facebook.com/">
                <FaFacebook />
              </Link>
              <Link to={"https://x.com/"}>
                <BsTwitterX />
              </Link>
              <Link to={"https://www.youtube.com/"}>
                <FaYoutube />
              </Link>
              <Link to={"https://github.com/"}>
                <FaGithub />
              </Link>
            </div>
      </aside>
      <nav>
        <h6 className="footer-title">Links</h6>
        <Link className="link link-hover" to="services">Services</Link>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    <div className="divider "></div>
    <div>

<h3 className="text-center py-6">© 2025 Review Radar. All rights reserved.</h3></div>
    </div>
  );
};

export default Footer;
