import React from 'react';

function WordCount(props) {
     const { text } = props;
     return (
          <div className={`word-character-container ${props.className}`}>
               <div className="char-count">{text.length} character(s)</div>
               <div className="word-count">
                    {text ? text.match(/\w+/gim).length : 0} word(s)
               </div>
          </div>
     );
}

export default WordCount;
