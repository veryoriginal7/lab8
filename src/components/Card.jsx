import { useState } from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';

const Card = ({ id, name, class: cls, race, lv }) => {
  const [count, setCount] = useState(0);
  const updateCount = () => setCount(c => c + 1);

  return (
    <div className="Card">
      {/* Link to detail page */}
      <Link to={`/crewmate/${id}`}>
        <h2 className="name">Name: {name}</h2>
        <h3 className="lv">Level: {lv}</h3>
        <h3 className="class">Class: {cls}</h3>
        <h3 className="race">Race: {race}</h3>
      </Link>

      {/* Link to edit page */}
      <Link to={`/edit/${id}`}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>

    </div>
  );
};

export default Card;