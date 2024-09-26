export default function KeyFeature({ keyFeature}) {
  return (
    <li className="services__modal-service">
      <i className="uil uil-check-circle services__modal-icon"></i>
      <p className="services__modal-info">
        {keyFeature}
      </p>
    </li>
  );
}
