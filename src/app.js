import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './features/store';

ReactDOM.render(
    <Provider store={store}>
       <div>doGood</div>
    </Provider>,
    document.getElementById('root')
);