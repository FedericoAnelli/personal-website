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
        },
        {
            name: "Product Management - Web",
            section: "Projects",
        },
        {
            name: "Product Management - Mobile",
            section: "Projects",
        },
        {
            name: "Web Development",
            section: "Projects",
        },
        {
            name: "Others",
            section: "Projects",
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
                    <button key={subsection.name} className={buttonClass(subsection.name)} onClick={(e)=>handleClick(e)}>{subsection.name}</button>
                )
                }
            })}
        </div>
    )
}

export default Submenu;