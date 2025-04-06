import { UPDATE_STATES } from "../actions/uiActions";

// export type ScreenTypes = 
//     'LoginScreen' |
//     'MainScreen' |
//     'HouseDetailsScreen' |
//     'AgentScreen' |
//     'ContactScreen' |
//     'ErrorScreen';

// export interface UiDataTypes {
//     isLoading?: boolean,
//     isFilterOpen?: boolean,
//     screenType?: ScreenTypes,
// }

const uiData = (state = {
    isLoading: false,
    isFilterOpen: false,
    screenType: 'MainScreen',
}, action) => {
    switch (action.type) {
    case UPDATE_STATES:
        return {
            ...state,
            ...action.data
        }
    default:
        return state;
    }
};

export default uiData