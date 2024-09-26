import "./scrollupper.css";

export default function ScrollUpper() {
  window.addEventListener("scroll", function () {
    const ScrollUpper = document.querySelector(".scrollup");
    if (window.scrollY >= 560) ScrollUpper.classList.add("show-scroll");
    else ScrollUpper.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}
