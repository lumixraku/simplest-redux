import Food from './foods';

const initialState = {
  food: Food,
  searchTerm: '',
};

export default function reducer(state = initialState, action) {
  // switch between the action type
  switch (action.type) {
    case 'SEARCH_INPUT_CHANGED':
      const {searchTerm} = action.payload;
      return {
        ...state,
        searchTerm: searchTerm,
        food: searchTerm ? Food.filter(
          (food) => (food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
        ) : Food,
      };
    default:
      return state;
  }
}