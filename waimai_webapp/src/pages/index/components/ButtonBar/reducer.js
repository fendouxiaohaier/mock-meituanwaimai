export const changeActiveTab = (state, action) => {
    return state.set("activeTabKey", action.payload);
}