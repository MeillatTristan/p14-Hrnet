import React, { useEffect, useRef, useState } from 'react';
import "./style.css"


function Modal(props) {
  const [isOpen, setIsOpen] = useState("");
  const textModal = props.text
  useEffect(() => {
    if (props.open === true) {
      setIsOpen("active");
    } else {
      setIsOpen("")
    }
  }, [props.open])

  let modalRef = useRef();

  let closeModal = () => {
    setIsOpen('')
  }

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIsOpen("")
      }
    })
  })
  return (
      <div className={'modal ' + isOpen}>
        <div ref={modalRef} className='containerText'>
          <div className='modalHeader'>
            <i onClick={closeModal} className="fa-solid fa-xmark"></i>
          </div>
          <p>{ textModal }</p>
        </div> 
      </div>
  );
}

export default Modal;