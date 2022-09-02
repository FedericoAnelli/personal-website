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
            id: "REACT",
            name: "ReactJS",
            field: "Development",
            grade: 10,
            path: ReactJSCertificate,
            link: "https://www.coderhouse.com/certificados/6309376bab2fa90019078dce"
        },
        {
            id: "JAVASCRIPT",
            name: "JavaScript",
            field: "Development",
            grade: 9,
            path: JavaScriptCertificate,
            link: "https://www.coderhouse.com/certificados/6309376bab2fa90019078dce"
        },
        {
            id: "WEBDEV",
            name: "Web Development",
            field: "Development",
            grade: 10,
            path: WebDevCertificate,
            link: "https://www.coderhouse.com/certificados/6309376bab2fa90019078dce"
        },
        {
            id: "PSPO",
            name: "Professional Scrum Product Owner™ I (PSPO I)",
            field: "Product",
            grade: "88.8%",
            path: pspo,
            link: "https://www.credly.com/badges/a873a3d0-691e-4267-b786-7b91a3d87da0"
        },
        {
            id: "TYPES",
            name: "Types of Conflict",
            field: "Soft Skills",
            grade: "89.78%",
            path: typesOfConflict,
            link: "https://www.coursera.org/account/accomplishments/certificate/RAJ76BCKEZMS"
        },
        {
            id: "CONFRES",
            name: "Conflict Resolution Skills",
            field: "Soft Skills",
            grade: "100%",
            path: conflictResolutionSkills,
            link: "https://www.coursera.org/account/accomplishments/certificate/ZLMVY3XFPTAX"
        },
        {
            id: "INTCOM",
            name: "Intercultural Communication and Conflict Resolution",
            field: "Soft Skills",
            grade: "100%",
            path: interculturalComAndConfRes,
            link: "https://www.coursera.org/account/accomplishments/certificate/D4PJUEVHET2M"
        },
    ]



    return (
        <div className="certificatesGrid">
                    {certificates.map((certificate) => {
                        if (certificate.field === field.field) {
                            return (
                                <div key={certificate.id} className="certificateCard">
                                    <div className="imageContainer">
                                    <img className="certificateImages" src={certificate.path} alt={certificate.name} />
                                    </div>
                                    <div className="detailCert">
                                    <h2 className="detailTitle">{certificate.name}</h2>
                                    <p className="detailSchool">Coderhouse</p>
                                    {!certificate.grade ? null : <p className="detailSchool">Grade: {certificate.grade}</p>}
                                    </div>
                                    </div>
                            )
                        }
                    })}
        </div>
    )
}

export default AcquiredCertificates;