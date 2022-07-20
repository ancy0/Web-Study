import React from 'react';
//import './App.css';
import MyHeader from './MyHeader';
import Counter from './Counter';
import Container from './Container';

function App() {
  let name = "안채영";


  const number = 5;
  const counterProps = {
    a: 1,
    b: 2,
    //initialValue: 5,
  };

  return (
    <Container>
    <div>
      <MyHeader/>
      <Counter {...counterProps}/>
    </div>
    </Container>
  );
}

export default App;
