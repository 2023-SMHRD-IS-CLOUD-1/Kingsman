// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, options, onSelect }) => {
    return isOpen ? (
        <div className="modal-overlay">
            <div className="modal">
                <h2>제품명 선택</h2>
                <ul>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => onSelect(option)}>{option}</li>
                    ))}
                </ul>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    ) : null;
};

export default Modal;