import { Link } from "react-router-dom";
import '../styles/Home.css';
import '../styles/Login.css';
import dog2 from "../images/dog2.jpg";
import cat2 from "../images/cat2.jpg";
import { database, sugestion } from "../db.js"

function Home(){
    sessionStorage.setItem("data", JSON.stringify(database));
    sessionStorage.setItem("sugestion", JSON.stringify(sugestion));
    sessionStorage.removeItem("aux");

    return (
        <>
        <div className="pets-home">
            <h1>Adote um bichinho</h1>
            <span>Nos ajude a encontrar um novo lar para eles, adote!</span>
            <button>
                <Link to="/adoption" >Ver pets disponíveis</Link>
            </button>
        </div>
        <h3>Pets em destaque</h3>       
        <div className="cards-home">
            <div className="card-home">
                <img src={cat2} />
            </div>
                <div className="card-home">
                    <img src={dog2}/>
            </div>
        </div>
        </>

    );
}

export default Home;