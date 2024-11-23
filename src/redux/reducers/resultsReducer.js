const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RESULTS_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_RESULTS_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_RESULTS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default resultsReducer;
  