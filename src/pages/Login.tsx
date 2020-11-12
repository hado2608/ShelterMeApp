import React, { useState } from 'react';
import { IonButtons, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar, IonInput, IonLoading } from '@ionic/react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import {loginUser} from '../firebaseConfig';
import { toast } from '../toast';
import { setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Login: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        setBusy(true)
        const res: any = await loginUser(username,password)
        if(res) {
            dispatch(setUserState(res.user.email))
            history.replace('/dashboard')
            toast('You have logged in!', 2000)
        } else {
            toast('Error logging in', 2000)
        }
        setBusy(false)
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color = 'header'>
                <Link to='./' id="home-page">
                <IonThumbnail class="thumnail">
                    <IonImg src = {"./assets/img/logo.png"}></IonImg>
                </IonThumbnail>
                <IonTitle class = 'title-home' >Shelter.Me</IonTitle>
                </Link>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonLoading message="Please wait..." duration={0} isOpen={busy}/>
            
            <IonContent color="thisapp">
            
            
                <IonGrid class = "login_position">
                    <IonRow><IonTitle id = 'login_title' > LOGIN PAGE</IonTitle></IonRow>
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
                    <IonButton class = "register_button" color = 'thisappblue' onClick={login}>Login</IonButton>
                    <p>Create new account: <Link to = "./register">Register</Link></p>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default Login