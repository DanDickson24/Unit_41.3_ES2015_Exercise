import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import fruits from './foods';
import { choice, remove } from './helpers';

const selectedFruit = choice(fruits);
console.log(`I'd like one ${selectedFruit}, please.`);
console.log(`Here you go: ${selectedFruit}`);
console.log(`Delicious! May I have another?`);

remove(fruits, selectedFruit);
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
