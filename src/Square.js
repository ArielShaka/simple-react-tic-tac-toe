import React from 'react'

const Square = ({ clickedArray, clickHandler}) => {
  return (
    <div className='board'>
        {clickedArray.map((item, index) => {
            if(item === "") {
                return (
                    <div key= {index}className= "square"onClick={() => clickHandler(index)}>
                        {item}
                    </div>
                );
            } else {
                return (
                    <div key= {index} className= "square clicked">
                        {item}
                    </div>
                );
            }
        })}

    </div>
  );
}

export default Square