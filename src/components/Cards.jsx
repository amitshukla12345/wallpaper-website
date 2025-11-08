import React from 'react';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the description for card 1",
      image: card1
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the description for card 2",
      image: card2
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the description for card 3",
      image: card3
    }
  ];

  return (
    <section className="cards-section">
      <h2>Our Services</h2>
      <div className="cards-container">
        {cardsData.map(card => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="see-more-btn">See More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;