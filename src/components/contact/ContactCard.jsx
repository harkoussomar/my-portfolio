export default function ContactCard({ contactInfo }) {
    const {iconClass,title,data,link} = contactInfo; 
  return (
    <div className="contact__card">
      <i className={iconClass}></i>
          <h3 className="contact__card-title">{title}</h3>
          <span className="contact__card-data">{data}</span>
      <a href={link} className="contact__button">
        Write me
        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
      </a>
    </div>
  );
}
