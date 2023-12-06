import { Chart } from 'chart.js';
import { useEffect, useRef, useState } from 'react';

function ChartComponent() {
     const [input, setInput] = useState({
          height: 200,
          width: 200,
     });
     const canvasRef = useRef();
     const heightRef = useRef(null);
     const widthRef = useRef(null);

     function handleOnSubmit(e) {
          e.preventDefault();
          setInput({
               height: parseInt(heightRef.current.value),
               width: parseInt(widthRef.current.value),
          });
          console.log(input);
     }

     return (
          <>
               <form className="input-container" onSubmit={handleOnSubmit}>
                    <input
                         type="number"
                         ref={heightRef}
                         placeholder="Define Height"
                         min={200}
                         required
                    />
                    <input
                         type="number"
                         ref={widthRef}
                         placeholder="Define Width"
                         min={200}
                         required
                    />
                    <input type="submit" placeholder="Enter" />
               </form>
               <div className="chart-container">
                    <div className="chart">
                         <canvas
                              id="chart-canvas"
                              ref={canvasRef}
                              width={widthRef}
                              height={heightRef}
                         />
                    </div>
               </div>
          </>
     );
}

export default ChartComponent;
