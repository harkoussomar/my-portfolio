export default function ContactFormDiv({ formField }) {
  const { label, type, name, placeholder, component } = formField;
  return (
    <>
      {component === "input" ? (
        <div className="contact__form-div">
          <label htmlFor="" className="contact__form-tag">
            {label}
          </label>
          <input
            typeof={type}
            name={name}
            className="input contact__form-input"
            placeholder={placeholder}
            required={true}
          ></input>
        </div>
      ) : (
        <div className="contact__form-div contact__form-area">
          <label htmlFor="" className="contact__form-tag">
            {label}
          </label>
          <textarea
            name={name}
            cols="30"
            rows="10"
            className="input contact__form-input"
            placeholder={placeholder}
            required={true}
          ></textarea>
        </div>
      )}
    </>
  );
}
