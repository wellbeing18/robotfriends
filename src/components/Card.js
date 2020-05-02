import React from 'react';

// we need react here to understand JSX
function Card(props) {
  const {id, name, email} = props

  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </div>

  )
}

export default Card;
