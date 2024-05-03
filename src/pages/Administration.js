import React, { useState } from 'react';
import "../styles/Administration.css"
import ModalAction from "../components/ModalAction.js";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddPet from "../components/AddPet.js";
import { addSugestion, removeSugestion } from "../db.js"

function Administration(){
    const [data, setData] = useState(JSON.parse(sessionStorage.getItem("data")));
    const [open, setOpen] = useState(false);
    const [,setForm] = useState("");
    const [button, setButton] = useState("");

    const handleOpenModal = (e) => {
        let aux = JSON.parse(sessionStorage.getItem("aux"));

        if(aux)
            sessionStorage.setItem("data", JSON.stringify(aux));

        setForm(e.target.id);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleClick = (e) => {
        setButton(e.target.id);
        setData(JSON.parse(sessionStorage.getItem("data")));
        sessionStorage.setItem("aux", JSON.stringify(data));

        setData(JSON.parse(sessionStorage.getItem("sugestion")));
        sessionStorage.setItem("data", JSON.stringify(data));
    }

    const handleSugestion = (index, event) => {
        let action = event.target.id;

        if (action === "delete-sugestion"){
            removeSugestion(index);
        } else {
            addSugestion(index);
        }
        setData(JSON.parse(sessionStorage.getItem("sugestion")));
    }

    const handleList = () => {
        let aux = JSON.parse(sessionStorage.getItem("aux"));
        setButton("");

        if (aux){
            setData(aux);
        }
    }

    return(
        <div className="adm">
            <h1>Ações de Administrador</h1>
            <div style={{ display: "flex" }}>
                <Button onClick={handleList} className='buttonClose' style={{ margin: "1vw 6.3vw 0 0", width: "15vw" }}>
                    Listar pets
                </Button>
                <Button onClick={handleOpenModal} className='buttonClose' style={{ margin: "1vw 6.3vw 0 0", width: "15vw" }}>
                    Adicionar novo pet
                </Button>
                <Button id="sugestion" onClick={handleClick} className='buttonClose' style={{ margin: "1vw 0 0 0", width: "15vw" }}>
                    Verificar sugestões
                </Button>
            </div>
            <Dialog open={open} onClose={handleCloseModal}>
                <DialogTitle style={{ backgroundColor: "#adf0b6", color: "#7B3F00", fontWeight: "bold" }}> Edição </DialogTitle >
                <DialogContent style={{ marginTop: "1vw" }}>
                    <AddPet i /> 
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} className='buttonClose'>
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
            <section className="actions">
                <table className="petList">
                    <thead>
                        <tr>
                            <th>Número de Registro</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Sexo</th>
                            <th>Castrado</th>
                            <th>Vacinado</th>
                            <th>Ações</th>
                            <th>OBS</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((pet, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{pet.name}</td>
                                <td>{pet.age}</td>
                                <td>{pet.sex}</td>
                                <td>{pet.castrated}</td> 
                                <td>{pet.vaccinated}</td>
                                {
                                    button !== "sugestion" ?
                                    <td className="actions-icons">
                                        <ModalAction index={index}></ModalAction>
                                    </td> : 
                                    <td>
                                        <svg id='add-sugestion' onClick={(event) => handleSugestion(index, event)}  width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <title>Adicionar</title>

                                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </g>

                                        </svg>
                                        <svg id='delete-sugestion' onClick={(event) => handleSugestion(index, event) } fill="#000000" height="12px" width="16px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.607 180.607" style={{ marginBottom: "0.4vw", marginLeft: "0.3vw" }}>
                                            <title>Excluir</title>

                                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z" /> </g>

                                        </svg>
                                    </td>
                                }
                                <td title={pet.obs}>
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: "0.33vw", marginLeft: "0.3vw" }}>

                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                        <g id="SVGRepo_iconCarrier"> <path d="M7 8H17M7 12H17M9 16H15M4 4H20V20H4V4Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </g>

                                    </svg>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Administration;