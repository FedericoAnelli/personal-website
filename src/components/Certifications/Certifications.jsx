import AcquiredCertificates from "../AcquiredCertificates/AcquiredCertificates";
import "./Certifications.css";
import { useState } from "react";

const Certifications = () => {
    const [certificates, setCertificates] = useState("Development");

    const handleClick = (e) => {
        setCertificates(e.target.innerText);
    }

    function buttonClass (e){
        if (certificates !== e){
            return "customButtons";
        }
        else {
            return "customSelectedButton";
        }
    }

    return (
        <div className="certifications">
            <div className="buttonSection">
            <button className={buttonClass("Development")} onClick={(e) => handleClick(e)}>Development</button>
            <button className={buttonClass("Product")} onClick={(e) => handleClick(e)}>Product</button>
            <button className={buttonClass("Languages")} onClick={(e) => handleClick(e)}>Languages</button>
            <button className={buttonClass("Soft Skills")} onClick={(e) => handleClick(e)}>Soft Skills</button>
            </div>
            <div className="certificationsContainer">
                    <AcquiredCertificates field={certificates} />
            </div>
        </div>
    )
}

export default Certifications;