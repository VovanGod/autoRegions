import React from 'react';

const Numbers = ({s, r, f = 0}) => {
    return (
        <div className="number">
                {f == 1 ? 
                    <div className="number-light">
                        <h2 className="main main-b">
                        {s[0]+" "}<span>{s[1]+s[2]+s[3]+s[4]}</span>
                        </h2>
                        <div className="secondary secondary-b">
                            {r}
                            <div className="secondary-bottom">
                                RUS
                                <img src="img/flag.jpg" alt="Флаг России" />
                            </div>
                        </div>
                    </div>
                : ( f == 2 ?
                    <div className="number-light">
                        <h2 className="main main-r">
                            <span>{s[0]+s[1]+s[2]}</span>{s[3]+s[4]+" "}<span>{s[5]}</span>
                        </h2>
                        <div className="secondary secondary-r">
                            {r}
                            <div className="secondary-bottom">
                                RUS
                            </div>
                        </div>
                    </div>
                    :
                    <div className="border-dark">
                        <div className="number-light">
                            <h2 className="main">
                                {s[0]}<span>{s[1]+s[2]+s[3]}</span>{s[4]+s[5]}
                            </h2>
                            <div className="secondary">
                                {r}
                                <div className="secondary-bottom">
                                    RUS
                                    <img src="img/flag.jpg" alt="Флаг России" />
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
    );
};

export default Numbers;