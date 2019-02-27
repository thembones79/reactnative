import axios from "axios";
import { geo2zip } from "geo2zip";
import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from "./types";

export const fetchJobs = (region, callback) => {
  return async dispatch => {
    try {
      let zip = await geo2zip(region);
      let { data } = await axios.get(
        `http://api.indeed.com/ads/apisearch?publisher=1303284387458115&l=${zip}&q=javascript&radius=20&latlong=1&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json`
      );
      dispatch({ type: FETCH_JOBS, payload: data });
      callback();
      // console.log(data);
    } catch (error) {}
  };
};


export const likeJob = (job) => {
  return {
    type: LIKE_JOB,
    payload: job
  };
};


export const clearLikedJobs = () => {
  return {type: CLEAR_LIKED_JOBS};
};