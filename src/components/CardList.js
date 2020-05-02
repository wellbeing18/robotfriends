import React from 'react';
import Card from './Card'
// import {robots} from './robots'

function CardList( {robots} ){
  // if (true) {
  //   throw new Error('NOOOOOOO!')
  // }
  
  const cardComponents = robots.map((user, i) => {
    return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  })
  return (
    <div>
      {cardComponents}
    </div>
  )
}

export default CardList;
