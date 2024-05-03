import React, { useEffect, useRef } from 'react';

function Controls () {
    const imgRefs = useRef([]);
    const containerRefs = useRef(null);
    const controlsRefs = useRef(null);
    const petDescriptionRefs = useRef(null);
    const cardsControls = ['previous', 'next'];
    let indexPet = 3;
    let database = JSON.parse(sessionStorage.getItem("data"));

    useEffect((e) => {
        const getContainer = () => {
            const imgElements = Array.from(document.querySelectorAll('.card-item'));
            imgRefs.current = imgElements;

            const cardsContainer = document.querySelector('.cards-container');
            containerRefs.current = cardsContainer;

            const cardsControlsContainer = document.querySelector('.cards-controls');
            controlsRefs.current = cardsControlsContainer;

            const petDescription = document.querySelector('.pets-description');
            petDescriptionRefs.current = petDescription;
        }

        getContainer();

        const setPetName = (index) => {
            indexPet = index;
            let pet = database[indexPet];
            
            petDescriptionRefs.current.appendChild(document.createElement('div')).className = "pets-description"
            document.querySelector(".pets-description").innerHTML = `Ola, Visitante! Meu nome é ${pet.name.toUpperCase()}. Idade: ${pet.age}. Vacinado: ${pet.vaccinated}. OBS: ${pet.obs}`;
        };

        const updateGallery = () => {
            imgRefs.current.forEach(item => {
                item.classList.remove('card-item-1');
                item.classList.remove('card-item-2');
                item.classList.remove('card-item-3');
                item.classList.remove('card-item-4');
                item.classList.remove('card-item-5');
            })

            imgRefs.current.slice(0, 5).forEach((item, i) => {
                item.classList.add(`card-item-${i + 1}`)

                const elementMiddle = item.getAttribute('alt');

                if (elementMiddle === "Imagem 3") {
                    setPetName(i);
                }
            });
        };

        const setCurrentState = (direction) => {
            if (direction.className === 'cards-controls-previous') {
                imgRefs.current.unshift(imgRefs.current.pop());
            } else {
                imgRefs.current.push(imgRefs.current.shift());
            }
            updateGallery();
        }

        const setControls = () => {
            
            if (!window.location.href.includes('/adoption')) {
                return;
            }

            cardsControls.forEach(control => {
                controlsRefs.current.appendChild(document.createElement('button')).className = `cards-controls-${control}`
            });

            const triggers = [...controlsRefs.current.childNodes];
            triggers.forEach(control => {

                control.addEventListener('click', e => {
                    e.preventDefault();
                    setCurrentState(control); 
                });
            });
        } 

        return () => {
            imgRefs.current = [];
            setControls();
        };
    }, []);

    return (
        <>
        </>        
    );
};

export default Controls;
