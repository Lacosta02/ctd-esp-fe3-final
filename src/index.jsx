import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import GlobalContextDentista from "./Components/utils/GlobalContextDentista"
import GlobalContextTheme from './Components/utils/GlobalContextTheme';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    
    <BrowserRouter>
      <GlobalContextTheme>
          <GlobalContextDentista>
            <App/>
          </GlobalContextDentista>
      </GlobalContextTheme>
    </BrowserRouter>
  //</React.StrictMode>
);


