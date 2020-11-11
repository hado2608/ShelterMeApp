import React, { useState } from 'react';
import { IonButtons, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar, IonInput, IonLoading } from '@ionic/react';
import './Register.css';
import { Link } from 'react-router-dom';
import { toast } from '../toast';
import {registerUser} from '../firebaseConfig';

const Register: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    async function register() {
        setBusy(true)
        if (password !== cpassword) {
            toast("Passwords do not match", 2000)
        }
        if (username.trim() === '' || password.trim() === '') {
            toast("Username and password are required", 2000)
        }
        
        const res = await registerUser(username, password)
        if (res) {
        //     return toast('Password must be more than 6 characters', 2000)
        // } else {
            toast('You have succesfully registered', 4000)
        }
        setBusy(false)
        
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color = 'header'>
                <IonThumbnail class="thumnail">
                    <IonImg src = {"./assets/img/logo.png"}></IonImg>
                </IonThumbnail>
                <IonTitle class = 'title' >Shelter.Me</IonTitle>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent color="thisapp">
            <IonLoading message="Registering..." duration={0} isOpen={busy}></IonLoading>
                <IonGrid class = "login_position">
                    <IonRow>
                        <IonCol>Username:</IonCol>
                        <IonCol size = "9">
                            <IonInput placeholder="Enter your username" onIonChange={(e : any) => setUsername(e.target.value) }></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol > Password:</IonCol>
                        <IonCol size = "9">
                            <IonInput placeholder="Enter your password" type="password" onIonChange={(e : any) => setPassword(e.target.value)}></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol > Confirm password:</IonCol>
                        <IonCol size = "9">
                            <IonInput placeholder="Confirm your password" type="password" onIonChange={(e : any) => setCPassword(e.target.value)}></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonButton color = 'thisappblue' onClick={register}>Register</IonButton>
                    

                    <p>Already have an account? <Link to="./login">Login</Link></p>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default Register