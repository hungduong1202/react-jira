import { useHistory } from "react-router-dom";
import { userServices } from "../../services/baseService";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
  STATUS_CODE,
} from "../../util/constant/configSystem";
import { getProjectAction } from "./getProjectAction";

export const testTokenAction = (props, login) => {
  return async (dispatch) => {
    try {
      let result = await userServices.checkLogin();
      console.log(result);
    } catch (error) {
      console.log(error);
      if (error.response.data.statusCode === STATUS_CODE.SERVER_ERROR) {
        return login ? props.push("/") : props.push(props.location.pathname);
      } else {
        props.push("/login");
      }
    }
  };
};
