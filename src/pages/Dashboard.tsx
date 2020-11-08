import React, { useState } from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar, IonLoading } from '@ionic/react';
import { useSelector } from 'react-redux';
import { getCurrentUser, logoutUser} from '../firebaseConfig';
import { useHistory } from 'react-router';
import './Dashboard.css';



const Dashboard: React.FC = () => {

    const username = useSelector((state: any) => state.user.username)
    const history = useHistory()
    const [busy, setBusy] = useState(true)

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
                
                <p>  Hello {username} </p>
                <IonButton routerLink="./listings"></IonButton>
                <IonButton onClick={logout}> Logout</IonButton>
                {/* <IonLoading message="Logging out..." duration={0} isOpen={busy} /> */}
            </IonContent>
        </IonPage>
    )
}
export default Dashboard