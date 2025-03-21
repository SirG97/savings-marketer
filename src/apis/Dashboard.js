import {
  actionStart,
  actionSuccess,
  actionFailed,
} from "../redux-store/ActionSlice";
import axios from "axios";

export const getDashboardData = async (dispatch, value, id = undefined) => {
  dispatch(actionStart());
  try {
    let url;
    if (id) {
      url =
        process.env.REACT_APP_BASE_URL +
        `/user/dashboard/user_read/${id}?startDate=${value.startDate}&endDate=${value.endDate}`;
    } else {
      url =
        process.env.REACT_APP_BASE_URL +
        `/user/dashboard/read?startDate=${value.startDate}&endDate=${value.endDate}`;
    }

    const resp = await axios.get(url, {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    dispatch(actionSuccess());
    return resp;
  } catch (err) {
    dispatch(actionFailed());
    return err;
  }
};
