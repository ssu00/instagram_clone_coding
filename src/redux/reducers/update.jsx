import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const INITIALIZE = "signup/INITIALIZE";
const CHANGE_FIELD = "signup/CHANGE_FIELD";
export const Initialize = createAction(INITIALIZE);
export const ChangeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);

const initialState = {
  update: {
    name:"",
    password:"",
    email:"",
    phone:"",
    authorization:false,
  },
};

const Update = handleActions(
  {
    [INITIALIZE]: (state) => ({ ...state, ...initialState }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
  },
  initialState
);

export default Update;
