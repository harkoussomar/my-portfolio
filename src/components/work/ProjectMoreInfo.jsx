// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function ProjectMoreInfo({ worksItem, onShowMoreInfo }) {
  const { images, title, description, links, type, repository } = worksItem;
  return (
    <div className="project__modal">
      {type === "video" ? (
        <div className="project__modal-content">
          <i
            className="uil uil-times project__modal-close"
            onClick={() => onShowMoreInfo((show) => !show)}
          ></i>
          <h3 className="project__modal-title">{title}</h3>
          {/* <p className="project__modal-description">{description}</p> */}

          <iframe
            className="project__modal-video"
            src={links.source}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <ul className="project__modal-links">
            <li>
              <a
                href={links.video}
                target="_blank"
                className="project__modal-link"
              >
                <i className="uil uil-youtube"></i> Video
              </a>
            </li>
            <li>
              <a
                href={links.repository}
                target="_blank"
                className="project__modal-link"
              >
                <i className="uil uil-code-branch"></i> Repository
              </a>
            </li>
            <li>
              <a
                download=""
                href={links.presentation}
                className="project__modal-link"
              >
                <i className="uil uil-presentation-play"></i> presentation
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="project__modal-content">
          <i
            className="uil uil-times project__modal-close"
            onClick={() => onShowMoreInfo((show) => !show)}
          ></i>
          <h3 className="project__modal-title">{title}</h3>
          <p className="project__modal-description">{description}</p>

          <Swiper
            className="project__modal-container"
            loop={true}
            grabCursor={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 48,
              },
            }}
            modules={[Pagination]}
          >
            {images.map((image, index) => {
              return (
                <SwiperSlide className="project__modal-card" key={index}>
                  <img src={image} alt="" className="project__modal-img" />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <a href={repository} target="_blank" className="project__modal-link">
            <i className="uil uil-code-branch"></i> Repository
          </a>
        </div>
      )}
    </div>
  );
}
