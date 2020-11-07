import React, { useState } from 'react';
import { IonButtons, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    function registerUser() {
        console.log(username,password,cpassword)
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
                    <IonButton color = 'thisappblue' onClick={registerUser}>Register</IonButton>
                    <p>Already have an account? <Link to="./login">Login</Link></p>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default Register