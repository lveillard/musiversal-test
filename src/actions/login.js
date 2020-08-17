export const setIsLogged = async (store, value) => {
  // if no value is provided, it just switches the current value
  store.setState({ isLogged: value });
};
