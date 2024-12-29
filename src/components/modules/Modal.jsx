import React, { useState } from 'react';

const Modal = ({visible, setVisible, setBtn}) => {
    const modalBtn = () => {
        setVisible(false)
        setBtn(false)
        document.querySelector('body').classList.remove('no-scroll');
        document.querySelector('html').classList.remove('no-scroll');
    }
    return (
        <div id='overlay' onClick={modalBtn} className={visible ? "overlay overlay-active" : "overlay"}>
            <div className="modal-wrap">
                <div className="modal">
                    <img src="img/klen.svg" alt="klen-list" />
                    <ul>
                        <li><a href="#face">Главная</a></li>
                        <li><a href="#list">Авто коды</a></li>
                        <li><a href="#footer">Сотрудничество</a></li>
                    </ul>
                    <button onClick={modalBtn} className="burger burger-active"></button>
                </div>
            </div>
        </div>
    );
};

export default Modal;