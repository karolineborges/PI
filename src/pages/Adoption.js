import "../styles/Adoption.css"
import React, {useState} from 'react';
import '../App.css';
import Images from '../components/Images.js';
import Controls from '../components/Controls.js';
import ModalVisit from '../components/ModalVisit.js';
import AddPet from "../components/AddPet.js";
import Dialog from "../components/Dialog.js";


function Adoption() {
    const [,setModalOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleOpenModal = (e) => {
        let aux = JSON.parse(sessionStorage.getItem("aux"));

        if (aux)
            sessionStorage.setItem("data", JSON.stringify(aux));

        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <div className="adoption">
            <p>Conheça os pets que estão em busca de um novo lar!</p>
            <div className="cards">
                <div className="cards-container">
                    <Images/>
               </div>
                <div className="cards-controls">
                    <Controls/>
                </div>
                <div className="pets-info">
                    <div className="pets-description">
                       <div>Mia</div> 
                    </div>
                    <ModalVisit closeModal={closeModal} />
                </div>
                <Dialog>
                    <AddPet IsSugestion={true} />
                </Dialog>

                <div className="mini-cards">
                    <p>Conhece algum animalzinho que esteja aprecisando de abrigo temporário? Faça o cadastro dele <span onClick={handleOpenModal}>AQUI!</span></p>
                </div>
            </div>
        </div>
    );
}

export default Adoption;