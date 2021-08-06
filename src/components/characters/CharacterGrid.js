import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {!!items?.length
                ? items.map((item) => (
                      <CharacterItem key={item.id} item={item}></CharacterItem>
                  ))
                : null}
        </section>
    );
};

export default CharacterGrid;
