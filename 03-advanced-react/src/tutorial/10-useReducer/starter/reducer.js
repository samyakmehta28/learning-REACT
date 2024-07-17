import { data } from '../../../data';

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  if (action.type === 'CLEAR_ALL') {
    return { ...state, people: [] };
  }
  if (action.type === 'RESET_ALL') {
    return defaultState;
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => person.id !== action.id);
    return { ...state, people: newPeople };
  }
  throw new Error('no matching action type');
};

export { reducer, defaultState };
