import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/rootReducer';
import {setStore} from 'shared/store';
import thunk from 'redux-thunk';
import { ToastProvider } from 'react-toast-notifications'

const store = createStore(rootReducer, applyMiddleware(thunk));
setStore(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ToastProvider>
                <App/>
            </ToastProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
