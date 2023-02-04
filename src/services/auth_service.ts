import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "../firebase_app";
export default class AuthService {
  
   async emailSignUp(email: string, password: string) {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  }
   async emailLogin(email: string, password: string) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  }

   async logOut() {
    return await signOut(auth)
      .then(() => {
        return true;
      })
      .catch((e) => {
        return false;
      });
  }
  

   async updateProfile(user: User, name: string) {
    const res = await updateProfile(user, {
      displayName: name,
    });
    return res;
  }
}
