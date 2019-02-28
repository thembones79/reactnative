import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers'; // do not have to specify index.js
import { persistStore } from 'redux-persist';
//import { AsyncStorage } from 'react-native';
import { Location } from "expo";

const store = createStore(
    reducers, // number of reducers
    {}, // default state empty in the beginning
    compose( // applies all the middle ware used in the app
        applyMiddleware(thunk)
        //,autoRehydrate()
    )
);

persistStore(store, null, null);// used to have this as well , whitelist: ['likedJobs']  but change in v5

export default store;