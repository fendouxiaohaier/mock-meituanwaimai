import * as constants from "../../../store/constants";

export const getchangeTabAction = (activeKey) => ({
    type: constants.CHANGE_ACTIVE_KEY,
    payload: activeKey
});