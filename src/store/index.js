import { createStore } from 'redux';

function reducer() {
    return [
        {
            id: 1,
            title: "teste"
        }
    ];
}

const store = createStore(reducer);

export default store;