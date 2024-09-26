import { useState } from "react";
import ServiceMoreInfo from "./ServiceMoreInfo";

export default function Service({ service }) {
    const { namePartOne, namePartTwo, icon } = service;
    const [showServiceInfo,setShowServiceInfo] = useState(false)

  return (
    <div className="services__content">
      <div>
        <i className={`uil ${icon} services__icon`}></i>
        <h3 className="services__title">
          {namePartOne} <br />
          {namePartTwo}
        </h3>
      </div>

      <span
        className="services__button"
        onClick={() => setShowServiceInfo((show) => !show)}
      >
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      {showServiceInfo && (
        <ServiceMoreInfo
          service={service}
          onShowServiceInfo={setShowServiceInfo}
        />
      )}
    </div>
  );
}
