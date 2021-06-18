import React, { useEffect } from 'react';
import './modal.css'

const overlayClass = 'overlay'

const Modal = ({toggle, children, time = false}) => {
    
    const handleClose = (e) => {
        if(e.target.className === overlayClass) {
            toggle();
        }
    }
    
    useEffect(() => {
        if(time) {
            setTimeout(() => {
                toggle()
        }, time*1000)
        } 
        return () => toggle()
    }, [time, toggle])

    return (
        <>
            <div onClick={(e) => handleClose(e)} className={overlayClass}>
                <div className="modal">
                    <button onClick={() => toggle()} className="close">X</button>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;