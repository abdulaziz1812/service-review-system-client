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
        <nav className="flex flex-col items-center pt-4">
          <h6 className="footer-title">Links</h6>
          <div className="flex gap-4">
            <Link className="link link-hover" to="services">
              Services
            </Link>
            <Link className="link link-hover" to="add-service">Add Service</Link>
            <Link className="link link-hover" to="my-reviews">My Reviews</Link>
            <Link className="link link-hover" to="my-services">My Service</Link>
          </div>
        </nav>
      </footer>
      <div className="divider "></div>
      <div>
        <h3 className="text-center py-6">
          © 2025 Review Radar. All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
