import { createStore } from 'redux';

const INITIAL_STATE = {
    film_url: null,
    teste: 'test2',
    modules:[
        {
            id: 1,
            title: "test"
        }
    ]
}

function reducer(state = INITIAL_STATE, action) {
    console.log(action)
    if(action.type === 'SET_TEST'){
        return { ...state, teste: action.str }
    } else if (action.type === 'SET_FILM_URL'){
        return { ...state, film_url: action.val }
    }
    return state;
}

const store = createStore(reducer);

export default store;