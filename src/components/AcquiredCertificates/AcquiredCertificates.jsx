import "./AcquiredCertificates.css";
import ReactJSCertificate from "../../assets/images/ReactJSCertificate.png";
import JavaScriptCertificate from "../../assets/images/JavaScriptCertificate.png";
import WebDevCertificate from "../../assets/images/WebDevCertificate.png";
import pspo from "../../assets/images/pspo.webp";
import conflictResolutionSkills from "../../assets/images/conflictResolutionSkills.webp";
import interculturalComAndConfRes from "../../assets/images/interculturalComAndConfRes.webp";
import typesOfConflict from "../../assets/images/typesOfConflict.webp";

const AcquiredCertificates = (field) => {

    const certificates = [
        {
            name: "ReactJS",
            field: "Development",
            path: ReactJSCertificate,
            link: "https://www.coderhouse.com/certificados/6309376bab2fa90019078dce"
        },
        {
            name: "JavaScript",
            field: "Development",
            path: JavaScriptCertificate,
            link: "https://www.coderhouse.com/certificados/6309376bab2fa90019078dce"
        },
        {
            name: "Web Development",
            field: "Development",
            path: WebDevCertificate,
            link: "https://www.coderhouse.com/certificados/6309376bab2fa90019078dce"
        },
        {
            name: "Professional Scrum Product Owner™ I (PSPO I)",
            field: "Product",
            path: pspo,
            link: "https://www.credly.com/badges/a873a3d0-691e-4267-b786-7b91a3d87da0"
        },
        {
            name: "Types of Conflict",
            field: "Soft Skills",
            path: typesOfConflict,
            link: "https://www.coursera.org/account/accomplishments/certificate/RAJ76BCKEZMS"
        },
        {
            name: "Conflict Resolution Skills",
            field: "Soft Skills",
            path: conflictResolutionSkills,
            link: "https://www.coursera.org/account/accomplishments/certificate/ZLMVY3XFPTAX"
        },
        {
            name: "Intercultural Communication and Conflict Resolution",
            field: "Soft Skills",
            path: interculturalComAndConfRes,
            link: "https://www.coursera.org/account/accomplishments/certificate/D4PJUEVHET2M"
        },
    ]



    return (
        <div className="certificatesGrid">
                    {certificates.map((certificate) => {
                        if (certificate.field === field.field) {
                            return (
                                <div className="certificate">
                                    <img className="certificateImages" src={certificate.path} alt={certificate.name} />
                                    <p className="titleCert">{certificate.name}</p>
                                </div>
                            )
                        }
                    })}
        </div>
    )
}

export default AcquiredCertificates;