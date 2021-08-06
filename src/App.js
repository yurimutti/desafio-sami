import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.scss';

const App = () => {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const acessToken = '4388018917951892';

            const response = await axios(
                `https://superheroapi.com/api/${acessToken}/search/${query}`
            );

            setItems(response.data.results);
            setIsLoading(false);
        };

        fetchItems();
    }, [query]);

    return (
        <div>
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <div className="container">
                <CharacterGrid items={items} isLoading={isLoading} />
            </div>
        </div>
    );
};

export default App;
