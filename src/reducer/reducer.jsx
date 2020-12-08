const houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Poufsouffle',
];
const initialState = {
  houses,
  selectedHouses: houses[Math.floor(Math.random() * 4)]
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "UPDATE_CHOICE_WITH_MY_INDEX" :
      return {
        ...state,
        selectedHouses : houses[action.indexSelected],
      }
    default :
    return {
      ...state,
      selectedHouses: houses[Math.floor(Math.random() * 4)]
    };
  }
}

export default reducer;

