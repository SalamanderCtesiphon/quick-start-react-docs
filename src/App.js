import './App.css';

function MyButton() { 
  return (
    <button>
      I'm a button
    </button>
  )
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
     <ShoppingList />
    </div>
  );
}

export default App;
