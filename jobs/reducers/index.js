import { combineReducers } from "redux";
import auth from "./auth_reducer";
import jobs from "./job_reducer";
import likedLobs from './likes_reducer';

export default combineReducers({
  auth: auth,
  jobs: jobs,
  likedJobs: likedLobs
});
