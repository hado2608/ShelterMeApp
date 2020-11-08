import app from 'firebase/app';
import { toast } from './toast';
require('firebase/auth')

const config = {
    apiKey: "AIzaSyBl6KTyLItogSu3pBxbmehwcCXw1ug8Jwc",
    authDomain: "shelterme-56e82.firebaseapp.com",
    databaseURL: "https://shelterme-56e82.firebaseio.com",
    projectId: "shelterme-56e82",
    storageBucket: "shelterme-56e82.appspot.com",
    messagingSenderId: "737226031997",
    appId: "1:737226031997:web:a1c0eec80585ddf3ebc214",
    measurementId: "G-8DGDDEEF3C"
}
app.initializeApp(config)


export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = app.auth().onAuthStateChanged(function(user) {
            if (user) {
                resolve(user)
            } else {
                resolve(null)
            }
            unsubscribe()
        })
    })
   
}

export function logoutUser() {
    return app.auth().signOut()
}

export async function loginUser(username: string, password: string) {
    const email = `${username}@gmail.com`
    try {
        const res = await app.auth().signInWithEmailAndPassword(email, password)
        return res
    } catch(error) {
        console.log(error)
        toast(error.message, 2000)
        return false
    }
}


export async function registerUser(username: string, password: string) {
    const email = `${username}@gmail.com`
    try {
        const res = await app.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch(error) {
        console.log(error)
        toast(error.message, 10000)
        return false
    }
}