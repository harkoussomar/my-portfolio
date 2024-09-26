import KeyFeature from "./KeyFeature";

export default function ServiceMoreInfo({ service, onShowServiceInfo }) {
  const { fullName, description, keyFeatures } = service;

  return (
    <div className="services__modal">
      <div className="services__modal-content">
        <i
          className="uil uil-times services__modal-close"
          onClick={() => onShowServiceInfo((show) => !show)}
        ></i>
        <h3 className="services__modal-title">{fullName}</h3>
        <p className="services__modal-description">{description}</p>

        <ul className="services__modal-services grid">
          {keyFeatures.map((keyFeature) => (
            <KeyFeature keyFeature={keyFeature} />
          ))}
        </ul>
      </div>
    </div>
  );
}
