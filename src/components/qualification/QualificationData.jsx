export default function QualificationData({ index,item }) {
    const { title, location, date } = item;
  return (
    <div className="qualification__data">
      {index % 2 === 0 ? (
        <>
          <div>
            <h3 className="qualification__title">{title}</h3>
            <span className="qualification__subtitle">{location}</span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt"></i> {date}
            </div>
          </div>
          <div className="qualification__level--line"></div> {/* Empty div */}
          <div></div> {/* Empty div */}
        </>
      ) : (
        <>
          <div></div> {/* Empty div */}
          <div className="qualification__level--line"></div> {/* Empty div */}
          <div>
            <h3 className="qualification__title">{title}</h3>
            <span className="qualification__subtitle">{location}</span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt"></i> {date}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// export default function QualificationData({ index, item }) {
//   const { title, location, date } = item;
//   return (
//     <div className="qualification__data">
//       <div>
//         <h3 className="qualification__title">{title}</h3>
//         <span className="qualification__subtitle">{location}</span>
//         <div className="qualification__calendar">
//           <i className="uil uil-calendar-alt"></i> {date}
//         </div>
//       </div>
//       <div></div>
//       <div></div>
//     </div>
//   );
// }
