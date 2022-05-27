import { userServices } from "../../services/baseService";
import {
  NOTIFICATION_ICON,
  SHOW_NOTIFICATION,
} from "../../util/constant/configSystem";
import { REGISTER } from "../types/userType";

export const registerAction = (data) => {
  return async (dispatch) => {
    try {
      let result = await userServices.register(data);
      console.log(result);
      dispatch({
        type: SHOW_NOTIFICATION,
        value: {
          description: "Register successfully",
          type: NOTIFICATION_ICON.SUCCESS,
        },
      });
    } catch (error) {
      const { message } = error.response.data;
      console.log(message);
      console.log(error);
      dispatch({
        type: SHOW_NOTIFICATION,
        value: {
          description: "Email is already used",
          type: NOTIFICATION_ICON.ERROR,
        },
      });
    }
  };
};