import React, {useState} from "react";

function Images(){
    const [isExpanded, setIsExpanded] = useState(false);
    let database = JSON.parse(sessionStorage.getItem("data"));
    const pets = database;

    const handleClick = () => {
            setIsExpanded(!isExpanded);
        };

    return(
        <>
            {pets.map((item, index) => 
            <>
                <img className={`card-item card-item-${index + 1} ? 'expanded' : ""}`} src={item.image} key={index} alt={`Imagem ${index + 1}`} onClick={handleClick}></img>
            </>
            )} 
        </>
    );
}

export default Images;