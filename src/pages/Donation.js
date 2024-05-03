import "../styles/Donation.css"
import cat from "../images/cat1.jpg"

function Donation(){

    return(
        <>
            <section className="donation">
                <div className="image">
                    <img src={cat}></img>
                </div>
                <div className="infos">
                    <div style={{ backgroundColor: "#fff" }}>Estatísticas de abandono de animais</div>
                    <div style={{ backgroundColor: "#fff" }}>infomações sobre quantidade de animais no abrigo</div>
                    <div style={{ backgroundColor: "#fff" }}>infomações sobre gastos</div>
                    <div style={{ backgroundColor: "#fff" }}>infomações pix para doação</div>
                </div>
            </section>

        </>
    );
}

export default Donation;