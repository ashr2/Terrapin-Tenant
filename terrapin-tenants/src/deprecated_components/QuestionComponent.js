import React, { useState } from 'react';
import './QuestionComponent.css'
const QuestionComponent = ({ question, option1, option2, description1, description2, onOptionSelect}) => {
  const [selectedOption, setSelectedOption] = useState(''); 
  const [description, setSelectedDescription] = useState('');
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if(option === "None") {
      setSelectedDescription("")
    }
    if(option === option1) {
        setSelectedDescription(description1)
    }
    if(option === option2) {
        setSelectedDescription(description2)
    }
  };

  return (
    <div className="question-container">
      <h2 className="question">{question}</h2>
      <div className="options-container">
        <div
          className={`option ${selectedOption === option1 ? 'selected' : ''}`}
          onMouseEnter={() => handleOptionClick(option1)}
          onMouseLeave={() => handleOptionClick('None')}
          onClick={onOptionSelect}
        >
          {option1}
        </div>
        <div
          className={`option ${selectedOption === option2 ? 'selected' : ''}`}
          onMouseEnter={() => handleOptionClick(option2)}
          onMouseLeave={() => handleOptionClick('None')}
          onClick={onOptionSelect}
        >
          {option2}
        </div>
      </div>
      <div className="answer-container">
          <p className="answer-description">{" " + description}</p>
      </div>
    </div>
  );
};

export default QuestionComponent;

// Usage
// <QuestionComponent question="Your Question Here?" option1="Option 1" option2="Option 2" />
