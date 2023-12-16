import React from 'react'
import './modal.css'


const Modal = ({isOpen,onClose}) => {

    if(!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Your modal content */}
        <div className="modal-content">
          <h2>Basic Modal</h2>
          {/* Add your form or content for editing here */}
          <button onClick={onClose}>Close Modal</button>
        </div>
      </div>
    </div>
  )
}

export default Modal