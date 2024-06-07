import React, { useState, useEffect } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState(null);

  useEffect(() => {
    const words = text.trim().toLowerCase().split(/\s+/);
    for (let word of words) {
      if (customDictionary.hasOwnProperty(word)) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }
    setCorrection(null);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea value={text} onChange={handleChange} placeholder="Enter text..."></textarea>
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
