import React, { useState, useEffect } from 'react';
import "./Typer.css"

function TyperInner({ words }) {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (currentIndex === words[currentWordIndex].length) {
      setCursorVisible(false);
    }
  }, [currentIndex, currentWordIndex, words]);

  useEffect(() => {
    if (currentIndex === 0) {
      setCursorVisible(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (currentIndex < currentWord.length) {
      const timer = setInterval(() => {
        setTypedText((prevText) => prevText + currentWord[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100); 

      return () => {
        clearInterval(timer);
      };
    } else {
      setTimeout(() => {
        setTypedText('');
        setCurrentIndex(0);
        setCurrentWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
      }, 1200); 
    }
  }, [words, currentIndex, currentWordIndex]);

  return (
    <>
      <h3>{typedText}</h3>
      <h3 className={cursorVisible ? 'cursorVisible' : 'cursorNotVisible'}>|</h3>
    </>
  );
}

function Typer({wordsToType}) {


  return (
    <div>
      <TyperInner words={wordsToType} />
    </div>
  );
}

export default Typer;
