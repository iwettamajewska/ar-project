import { imagesCertificates } from "../images/images.js";
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
            className="certificate-image"
            src={imagesCertificates.certyficatel}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image"
            src={imagesCertificates.certyficate2}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image"
            src={imagesCertificates.certyficate3}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image"
            src={imagesCertificates.certyficate4}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image"
            src={imagesCertificates.certyficate5}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image"
            src={imagesCertificates.certyficate6}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image"
            src={imagesCertificates.certyficate7}
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
