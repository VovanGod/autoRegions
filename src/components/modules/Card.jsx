import React, {useEffect} from 'react';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Card = ({name, image, def, str, f = 2, primary = '0'}) => {
    let s = `${str}`;
    s = s.split(' ', f)
    let num = s;

    useEffect(() => {
        gsap.to('.click-me', {
            scrollTrigger: {
                trigger: '.navbar',
                start: '-160px top',
                end: 'top top'
            },
            opacity: 0,
            delay: 0.5
        })
    }, [])
    return (
        <div className="wrapCard">
            <h2 className="card-header">
                {name}
                {primary == '1' ? 
                    <img src="img/star.svg" alt="star" />
                : ''}
            </h2>
            <div className='card'>
                <div className="card-light">
                    <div className="main">
                            <img src={`img/${image}.jpg`} alt={name} />
                            <div className="click-me">
                                Нажми
                            </div>
                    </div>
                    <div className="secondary secondary0">
                        {def}
                        <div className="secondary-bottom">
                            RUS
                            <img src="img/flag.jpg" alt="Флаг России" />
                        </div>
                    </div>
                    {num.map((num, index) => (
                    <div className={`secondary secondary${index+2}`} >
                        {num}
                        <div className="secondary-bottom">
                            RUS
                            <img src="img/flag.jpg" alt="Флаг России" />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;