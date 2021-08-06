import React, { useState } from 'react';
import search from '../../img/search.png';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChange = (v) => {
        setText(v);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        getQuery(text);
    };

    return (
        <section className="search">
            <form className="search-form" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Pesquisar herói..."
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                />
                <button className="btn last">
                    <img
                        className="search-icon"
                        src={search}
                        alt={'Ícone de pesquisa'}
                    ></img>
                </button>
            </form>
        </section>
    );
};

export default Search;
