import React from 'react';
import Card from './modules/Card'
import { useState } from 'react';
import { cities } from '../jsons/cities';

const List = () => {
    const inInput = () => {
        document.getElementById('btnInput').focus();
        document.getElementById('searchBtn').classList.add('search-active');
    }
    const [value, setValue] = useState('');
    const filtered = cities.filter(cities => {
        if (value.length < 2) {
            return cities.primary == 1;
        }
        else {
            return (cities.name.toLowerCase().includes(value.toLowerCase()) ||  cities.def.includes(value) || cities.str.includes(value))
        }
    })
    return (
        <section id='list' className='list'>
            <div className="container">
                <button id='searchBtn' onClick={() => inInput()} className="search">
                    <img src="img/search.svg" alt="search" />
                    <input id="btnInput" type="text" placeholder="Поиск..." onChange={(event) => setValue(event.target.value)}/>
                </button>
                <div className="explanation">
                    <img src="img/star.svg" alt="start" />
                    — топ популярных запросов
                </div>
                <div className="list-wrap">
                    {filtered.map((cities) => <Card {...cities} key={cities.name}/>)}
                </div>
            </div>
        </section>
    );
};

export default List;