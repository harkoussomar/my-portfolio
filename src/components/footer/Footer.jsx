import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Omar</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://web.facebook.com/omar.harkouss.3/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/harkoussomar/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/omar-harkouss-2071b9304"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Formulapp, All rights reserved
        </span>
      </div>
    </footer>
  );
}
