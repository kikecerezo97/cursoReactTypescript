import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const root2 = ReactDOM.createRoot(
    document.getElementById('root2') as HTMLElement
);

const tick = () => {
        const  element =
            <div>
                    <h1>Hello World </h1>
                    <h2>Its is {new Date().toLocaleTimeString()}.</h2>
            </div>

        root2.render(element)
}

setInterval(tick, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
