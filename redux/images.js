import * as ActionTypes from "./ActionTypes";

export const images = (
  state = { isLoading: true, errMess: null, images: [] },
  action
) => {
  console.log("hi again");
  console.log(action);
  switch (action.type) {
    case ActionTypes.ADD_IMAGES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        images: action.payload,
      };

    case ActionTypes.IMAGES_FAILED:
      return { ...state, isLoading: false, errMess: null };
    default:
      return state;
  }
};
