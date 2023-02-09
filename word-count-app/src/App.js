import { useState } from 'react';
import Header from './components/Header';
import Text from './components/TextArea';
import WordCount from './components/WordCharCount';

function App() {
     const [text, setText] = useState('');
     const charCount = e => {
          setText(e.target.value);
     };

     return (
          <div className="App">
               <Header />
               <Text onChangeHandler={charCount} />
               <WordCount
                    className="words and characters container container"
                    text={text}
               />
          </div>
     );
}

export default App;
