import React, {useState} from 'react';
import './App.css';

const Form = ({generateNum, evens, setEvens}) => {
  return (
    <div className='big-list-item'>
      Even Number Only <input type='checkbox' checked={evens} onChange={() => setEvens(!evens)}></input>
      <div>
        <button onClick={generateNum}>Add Number</button>
      </div>
    </div>
  )
}

const Numbers = ({numbers}) => (
  <div className='big-list-item'>
    Numbers:
  
    <div className='list-container'>
      {numbers.map((number, idx) => (
        <div className='list-item' key={idx}>
          {number}
        </div>
      ))}
    </div>
  </div>
)

const Stats = ({numbers, seen}) => (
  <div className='big-list-item'>
    {numbers.reduce((accumulator, num) => {
      console.log(num)
      console.log(seen)
      if(!seen[num]) {
        seen[num] = true;
        accumulator++;
      }
      return accumulator;
    }, 0)} unique numbers
  </div>
)

const App = () => {
  const [numbers, setNunmbers] = useState([7,4])
  const [evens, setEvens] = useState(false)
  const seen = {};
  const generateNum = () => {
    const newNum = evens 
      ? Math.ceil(Math.random() * 10 / 2) * 2
      : Math.ceil(Math.random() * 10)
    setNunmbers([
      ...numbers,
      newNum
    ])
  }
  return (
    <main className="App ">
      <h1>Even/Odd</h1>
      
      <Stats numbers={numbers} seen={seen}/>
      <Form generateNum={generateNum} evens={evens} setEvens={setEvens}/>
      <Numbers numbers={numbers}/>
    </main>
  );
}

export default App;
