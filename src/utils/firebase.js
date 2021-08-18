import firebase from "firebase";
import config from "../../firebase.json";
const app = firebase.initializeApp(config);
const Auth=app.auth();
export const signup = async ({ email,password }) => {
  const { user } = await Auth.createUserWithEmailAndPassword(email, password);
  // .then(()=>{
  //   let user=auth.currentUser;
  //   user.sendEmailVerification().then(function(){console.log("메일 전송");}).catch("Email not Sent!");
  // }).catch((error)=>console.log(error));
  return user;
};

// export const signup = async ({ email, password }) => {
//   const { user } = await Auth.createUserWithEmailAndPassword(email, password);
//   return user;
// };

export const getCurrentUser = () => {
  console.log(Auth.currentUser);
  const { uid, displayName, email,phoneNumber } = Auth.currentUser;
  console.log(uid,displayName,email,phoneNumber);
  return { uid, name: displayName, email, phone:phoneNumber};
};

export const createMessage = async ({ channelId, message }) => {
  return await DB.collection('channels')
    .doc(channelId)
    .collection('messages')
    .doc(message._id)
    .set({
      ...message,
      createdAt: Date.now(),
    });
};