export const UPDATE_STATES = 'UPDATE_STATES';

export const updateUiStates = (data) => {
  return {
    type: UPDATE_STATES,
    data: data,
  };
};

export const setIsLoading = (isLoading) => {
  return {
    type: UPDATE_STATES,
    data: { isLoading },
  };
};

export const setFilterOpen = (isFilterOpen) => {
    return {
      type: UPDATE_STATES,
      data: { isFilterOpen },
    };
  };

export const setScreenType = (screenType) => {
  return {
    type: UPDATE_STATES,
    data: { screenType },
  };
};

