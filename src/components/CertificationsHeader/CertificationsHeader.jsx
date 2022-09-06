import "./CertificationsHeader.css";

function CertificationsHeader({handleClick, certificates}) {

    function buttonClass (e){
        if (certificates !== e){
            return "customButtons";
        }
        else {
            return "customSelectedButton";
        }
    }

    return (
        <div className="buttonSection">
            <button className={buttonClass("Development")} onClick={(e)=>handleClick(e)}>Development</button>
            <button className={buttonClass("Product")} onClick={(e)=>handleClick(e)}>Product</button>
            <button className={buttonClass("Languages")} onClick={(e)=>handleClick(e)}>Languages</button>
            <button className={buttonClass("Soft Skills")} onClick={(e)=>handleClick(e)}>Soft Skills</button>
        </div>
    )
}

export default CertificationsHeader;