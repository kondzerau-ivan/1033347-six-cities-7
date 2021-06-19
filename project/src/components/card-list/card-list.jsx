import React, { useState } from 'react';
import { VALIDATION_RULES } from '../../validation/validation.js';
import Card from '../card/card';

export default function CardList({ housingInfo, block }) {
  const [active, setActive] = useState(1);

  function handleCardHover(id) {
    setActive(id);
  }

  return (
    <>
      {housingInfo.map((infoItem) => (
        <Card
          key={infoItem.id}
          info={infoItem}
          block={block}
          handleCardHover={handleCardHover}
          active={active}
        />
      ))}
    </>
  );
}

CardList.propTypes = VALIDATION_RULES;
