import * as constants from "../../store/constants";

export const getChangeActiveTabAction = (activeTabKey) => ({
    type: constants.CHANGE_ACTIVE_TAB,
    payload: activeTabKey
})