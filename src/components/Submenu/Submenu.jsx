import "./Submenu.css";

function Submenu({handleClick, certificates, section}) {

    const subsections = [
        {
            name: "Development",
            section: "Certifications",
        },
        {
            name: "Product",
            section: "Certifications",
        },
        {
            name: "Soft Skills",
            section: "Certifications",
        },
        {
            name: "Languages",
            section: "Certifications",
        }
    ]

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
            {subsections.map((subsection) => {
                if (subsection.section === section){
                return (
                    <button className={buttonClass(subsection.name)} onClick={(e)=>handleClick(e)}>{subsection.name}</button>
                )
                }
            })}
        </div>
    )
}

export default Submenu;