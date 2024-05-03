import React, { useState, useRef, useEffect } from 'react';
import '../styles/Dialog.css';

function Dialog({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <div className='dialog' style={{ zIndex: 9999 }}>
            <button onClick={openDialog}>Open Dialog</button>
            {isOpen && (
                <div className="dialog-overlay" style={{ zIndex: 9999 }}>
                    <div ref={dialogRef} className="dialog-content" style={{ zIndex: 9999 }}>
                        <span className="close-button" onClick={closeDialog}>
                            &times;
                        </span>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dialog;
