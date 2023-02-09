import React from 'react';

function Text(props) {
     return (
          <div>
               <textarea
                    className="text-area"
                    onChange={props.onChangeHandler}
               />
          </div>
     );
}

export default Text;
