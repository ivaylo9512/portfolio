import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '@sassUtils/rootVariables.scss';
import App from './AppRoot/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from 'app/store';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
