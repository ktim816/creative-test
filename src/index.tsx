import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import objectFitImages from 'object-fit-images';
import '@/styles/index.scss';

objectFitImages(null);

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();
