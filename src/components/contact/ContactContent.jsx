export default function ContactContent({children,sectionTitle}) {
  return (
    <div className="contact__content">
      <h3 className="contact__title">{sectionTitle}</h3>
      {children}
    </div>
  );
}