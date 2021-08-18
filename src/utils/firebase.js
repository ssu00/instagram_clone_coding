import firebase from "firebase";
import config from '../../../firebase.json';
const app = firebase.initializeApp(config);
const Auth=app.auth();
export const signup = async ({ email,password }) => {
  const { user } = await Auth.createUserWithEmailAndPassword(email, password).then(()=>{
    let user=auth.currentUser;
    user.sendEmailVerification().then(function(){console.log("메일 전송");}).catch("Email not Sent!");
  }).catch((error)=>console.log(error));
  return user;
};