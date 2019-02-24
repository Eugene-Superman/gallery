export const getList = items => ({
  type: 'ITEMS_FETCH_DATA_SUCCESS',
  result: items
});
export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export const getPhotosAsync = (url) => dispatch => {
  dispatch(itemsIsLoading(true));
  fetch(url)
    .then((response) => {
      dispatch(itemsIsLoading(false));
      return response.json();
    })
    .then((responseJson) => {
      dispatch(getList(responseJson));
    })
    .catch((error) => {
      console.error(error);
    });
};
