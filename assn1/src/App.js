import React from 'react';
import './App.css';
import Container from './Container';
import MyHeader from './MyHeader';
import Counter from './Counter';

function App() {
  return (
    
      <div>
        <MyHeader/>
        <Container>
          <Counter initialValue={0}/>
        </Container>
        
      </div>
    
  );
}

export default App;
