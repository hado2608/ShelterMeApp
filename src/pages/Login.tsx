import React, { useState } from 'react';
import { IonButtons, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function loginUser() {
        console.log(username,password)
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
                    <IonButton color = 'thisappblue' onClick={loginUser}>Login</IonButton>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default Login