import { AsyncStorage } from "react-native";
import {Facebook} from 'expo';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";

// How to use AcyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');


// this is an ACTION CREATOR
export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem("fb_token");

  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
  } else {
    // Start up FB Login process
    doFacebookLogin(dispatch);

  }
};


// this is not an action creator this is a HELPER FUNCTION
const doFacebookLogin = async (dispatch) => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('2073574586092932', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({type: FACEBOOK_LOGIN_FAIL});
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token});

};
