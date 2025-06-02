import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                style={{ cursor: socialImg.url ? "pointer" : "default" }}
                onClick={() => {
                  if (socialImg.url) {
                    window.open(socialImg.url, "_blank");
                  }
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Maarif Alawi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
