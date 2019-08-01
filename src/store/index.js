import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const INITIAL_STATE = {
    base_url: 'https://ghibliapi.herokuapp.com',
    film_url: null,    
}

const persistConfig = {
    key: 'root',
    storage,
    // whiteList: [''],
    // blackList: ['']
}

function reducer(state = INITIAL_STATE, action) {
    console.log(action)
     if (action.type === 'SET_FILM_URL'){
        return { ...state, film_url: action.val }
    }
    return state;
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };