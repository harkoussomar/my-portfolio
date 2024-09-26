import { useState } from "react";
import ProjectMoreInfo from "./ProjectMoreInfo";

export default function WorksItems({ worksItem }) {
  const { image,images, title } = worksItem;
  const [showMoreInfo,setShowMoreInfo] = useState(false)

  return (
    <div className="work__card">
      <img src={image ? image : images[0]} alt="" className="work__img" />
      <h3 className="work__title">{title}</h3>
      <span
        className="work__button"
        onClick={() => setShowMoreInfo((show) => !show)}
      >
        View More <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </span>
      {showMoreInfo && (
        <ProjectMoreInfo worksItem={worksItem} onShowMoreInfo ={setShowMoreInfo}/>
      )}
    </div>
  );
}
