import { imagesCertificates } from "../images/images";
// D:\GitHub - projects\ar-project\src\images\certificates
// "../images/certificates"
// D:\GitHub - projects\ar-project\src\images\certificates
const Certificates = () => {
  return (
    <section className="certificates">
      <div className="container">
        <p>Here will be certificates</p>
        <div className="box-certificate">
          <img
            src={imagesCertificates}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
