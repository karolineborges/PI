import React, { useState } from 'react';
import Button from './Button.js';
import FormVisit from "./FormVisit.js";
import Dialog from './Dialog.js';

function ModalVisit() {
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpenModal} className="visitButton" >
                Venha me fazer uma visita!
            </Button>

            <Dialog >  <FormVisit />
                </Dialog>          

        </div>
    );
}

export default ModalVisit;
