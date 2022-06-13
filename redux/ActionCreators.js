import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl.js";

export const fetchImages = () => async (dispatch) => {
  // assets
  try {
    const response = await fetch(baseUrl + "images");

    const valResponse = (response) => {
      try {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      } catch (error) {
        const errMess = new Error(error.message);
        throw errMess;
      }
    };
    const responseJson = await valResponse(response).json();
    dispatch(addImages(responseJson));
  } catch {
    (error) => dispatch(imagesFailed(error.message));
  }
};

export const imagesFailed = (errMess) => ({
  type: ActionTypes.IMAGES_FAILED,
  payload: errMess,
});

export const addImages = (images) => ({
  type: ActionTypes.ADD_IMAGES,
  payload: images,
});
