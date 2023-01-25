import './App.css';
import { useState } from 'react';

function MyButton() { 
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}> 
        Increment
      </button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product => 
    <li
      key={product.id}
      style = {{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );

}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
     <MyButton />
     <MyButton />
     <ShoppingList />
    </div>
  );
}

export default App;
