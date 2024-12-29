import React from 'react';

const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            <h2 className="footer-h2">Хочешь сотрудничать? <br /> Есть предложения?</h2>
            <div className="footer-wrapper">
                <div className="footer-link-wrap">
                    <a href="https://t.me/vovan_77" className="footer-link" target='_blank'>
                        <img src="img/tg.svg" alt="telegram" />
                    </a>
                </div>
                <div className="footer-link-wrap">
                    <a href="https://vk.com/volodya1yurkov" className="footer-link" target='_blank'>
                        <img src="img/vk.svg" alt="vk" />
                    </a>
                </div>
                <div className="footer-link-wrap">
                    <a href="https://wa.me/qr/LU7TPGTRRMOFO1" className="footer-link" target='_blank'>
                        <img src="img/whatsapp.svg" alt="whatsapp" />
                    </a>
                </div>  
            </div>
            <div className="down">Unosavvy <span>©2024</span></div>
        </footer>
    );
};

export default Footer;