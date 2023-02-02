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
            className="certificate-image1 certificate-image certificate-vertical"
            src={imagesCertificates.certyficatel}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image2 certificate-image certificate-vertical"
            src={imagesCertificates.certyficate2}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image3 certificate-image certificate-vertical"
            src={imagesCertificates.certyficate3}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image4 certificate-image certificate-vertical"
            src={imagesCertificates.certyficate4}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image5 certificate-image"
            src={imagesCertificates.certyficate5}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image6 certificate-image"
            src={imagesCertificates.certyficate6}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image7 certificate-image"
            src={imagesCertificates.certyficate7}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image8 certificate-image"
            src={imagesCertificates.certyficate8}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image9 certificate-image"
            src={imagesCertificates.certyficate9}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image10 certificate-image"
            src={imagesCertificates.certyficate10}
            alt={"certificate"}
            // alt={item.class}
            // className={`${item.class}`}
            // key={index}
          />
          <img
            className="certificate-image11 certificate-image"
            src={imagesCertificates.certyficate11}
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
