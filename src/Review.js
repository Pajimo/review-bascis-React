import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = people[index];

  const nextPerson = () => {
    if (index < people.length - 1) {
      const next = index + 1;
      setIndex(next);
    } else {
      setIndex(0);
    }
  };

  const prevPerson = () => {
    if (index <= 0) {
      //const prev = index - 1;
      setIndex(people.length - 1);
    } else {
      const back = index - 1;
      setIndex(back);
    }
  };

  const randomNumber = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      setIndex(random + 1);
    }
    setIndex(random);
  };
  return (
    <>
      <div>
        <div className="review">
          <div className="img-container">
            <img className="person-img" src={image} alt={name} />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h3 className="author">{name}</h3>
          <h4 className="job">{job}</h4>
          <p className="info">{text}</p>
          <div>
            <FaChevronLeft className="prev-btn" onClick={() => prevPerson()} />
            <FaChevronRight className="next-btn" onClick={() => nextPerson()} />
          </div>
          <button className="random-btn" onClick={randomNumber}>
            Surpise Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
