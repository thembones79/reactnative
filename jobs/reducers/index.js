//import { combineReducers  } from "redux";
import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import auth from './auth_reducer';
import jobs from './job_reducer';
import likedJobs from './likes_reducer';

// redux persist v5 fix
const config = {

  key: 'jobkey',

  storage: AsyncStorage,

  whitelist: ['likedJobs']

};

export default persistCombineReducers(config, {
  auth, // same as auth: auth es6
  jobs,
  likedJobs
});
