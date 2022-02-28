import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication()



const useFirebase = () => {
    const [user, setuser] = useState({});
    const [isloading, setisloading] = useState(true);
    const [error, seterror] = useState('');

const Googleprovider = new GoogleAuthProvider();
const auth = getAuth();

// sign in with Google
    const signinwithgoogle = (location, navigate) => {
        setisloading(true);
        signInWithPopup(auth, Googleprovider)
        .then((result) => {
            const user = result.user;
            const redierect_uri = location.state?.from || '/';
            navigate(redierect_uri);
            seterror('');
        })
        .catch((error) => {
            seterror(error.message);
        })
        .finally(() => setisloading(false));
    }

    // register with email password
    const register = (email, password, name, navigate) => {
        setisloading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            navigate('/');
            seterror('');
        })
        .catch((error) => {
            seterror(error.message);
        })
        .finally(() => setisloading(false))
    }

    // login with email password
    const login = (email, password, location, navigate) => {
        setisloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const redierect_uri = location.state?.from || '/';
                navigate(redierect_uri);
                seterror('');
            })
            .catch((error) => {
                seterror(error.message);
            })
            .finally(() => setisloading(false))
        }



    useEffect( () => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
             setuser(user)
            } 
            else {
              setuser({})
            }
            setisloading(false);
          });
          return () => unsubscribed;
    } , []);

    // logout 
    const logout = () => {
        setisloading(true);
        signOut(auth)
        .then(() => {
            
          })
          .catch((error) => {
           
          })
          .finally(() => setisloading(false));
    }

    return {
        user,
        signinwithgoogle,
        register,
        login,
        logout,
        isloading,
        error
    }
}

export default useFirebase;