import { taskServices } from "../../services/baseService";
import { GET_PRIORITY } from "../../util/constant/configSystem";

export const getPriorityAction = () => {
  return async (dispatch) => {
    try {
      let { data } = await taskServices.getPriority();
      console.log(data.content);
      dispatch({ type: GET_PRIORITY, value: data.content });
    } catch (error) {
      console.log(error);
    }
  };
};