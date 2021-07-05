import React, { useState } from 'react';
import { VALIDATION_RULES } from '../../validation/validation.js';
import Card from '../card/card';

function CardList({ cities, block }) {
  const [active, setActive] = useState(1);

  function handleCardHover(id) {
    setActive(id);
  }

  return (
    <>
      {cities.map((city) => (
        <Card
          key={city.id}
          info={city}
          block={block}
          handleCardHover={handleCardHover}
          active={active}
        />
      ))}
    </>
  );
}

CardList.propTypes = VALIDATION_RULES;

export default CardList;
