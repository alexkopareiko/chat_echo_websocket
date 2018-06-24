const initialState = [];

export default function connectReducer(state = initialState, action) {
switch(action.type) {
  case "CONNECT":
  return [
    ...state,
    action.payload
  ]
    break;

  default:
    return state;
}
}
