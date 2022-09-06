import AcquiredCertificates from "../AcquiredCertificates/AcquiredCertificates";
import "./Certifications.css";

const Certifications = (certificates) => {

    return (
            <div className="certificationsContainer">
                    <AcquiredCertificates field={certificates.certificates} />
            </div>
    )
}

export default Certifications;