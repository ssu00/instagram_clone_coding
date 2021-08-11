import * as firebase from "firebase";
import config from "../../firebase.json";
const app = firebase.initializeApp(config);
export const signup = async ({ email, password }) => {
  const { user } = await Auth.createUserWithEmailAndPassword(email, password);
  return user;
};
