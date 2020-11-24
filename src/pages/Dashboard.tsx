import React, { useEffect, useState } from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar, IonLoading, IonItem } from '@ionic/react';
import { useSelector } from 'react-redux';
import { getCurrentUser, logoutUser} from '../firebaseConfig';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import './Dashboard.css';
import { setUserState } from '../redux/actions';
import { Link } from 'react-router-dom';



const Dashboard: React.FC = () => {

    const username = useSelector((state: any) => state.user.username)
    const history = useHistory()
    const [busy, setBusy] = useState(true)
    const dispatch = useDispatch()

    useEffect (() => {
        getCurrentUser().then((user: any) => {
            if(user) {
                dispatch(setUserState(user.email))
            } 
        })
    })

    async function logout() {
        setBusy(true)
        await logoutUser()
        setBusy(false)
        history.replace('/')
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
            
                {username? 
                <IonContent color = "thisapp">
                    <IonItem class = "title" color = "thisappblue"> Hello {username}!</IonItem>
                    <IonButton>Your Listings</IonButton>
                    <IonButton> New Listings</IonButton>
                    <IonButton onClick={logout} > Logout</IonButton>
                    </IonContent>
            
                 : 

                 <IonContent color = "thisapp">
                     <p id = "not-register"> Not registered yet? <Link to = './login'> Login here!</Link></p> 
                     <IonButton routerLink= "./" id = "back-button" color="thisappblue"> Back to home</IonButton>
                     </IonContent>
                }
        </IonPage>
    )
}
export default Dashboard