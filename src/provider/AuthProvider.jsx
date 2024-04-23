import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../services/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(false);
    const [cart, setCart] = useState(0);
    const [cartValue, setCartValue] = useState([]);

    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                fetch(`https://coffees-store-server.vercel.app/user/${currentUser.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setRole(data.role);
                    })
            } else {
                setUser(null);
                setLoading(false);
                setRole(false);
            }
        })
        return () => unSubscribe();
    }, [])

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut
    const logOut = () => {
        return signOut(auth);
    }

    // cart
    useEffect(() => {
        const getLocal = JSON.parse(localStorage.getItem('cart')) || [];
        setCartValue(getLocal);
    }, [cart])
    var total = cartValue.reduce(function (acc, obj) { return acc + parseInt(obj.price); }, 0);

    const handleCartDelete = (id) => {
        const newCart = cartValue.filter(item => item._id!== id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCartValue(newCart);
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, createUser, signIn, logOut, role, cart, setCart, cartValue, total, handleCartDelete }}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AuthProvider;