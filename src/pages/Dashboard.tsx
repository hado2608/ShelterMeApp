import React, { useEffect, useState } from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar, IonLoading, IonCard, IonGrid, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/react';
import { useSelector } from 'react-redux';
import { getCurrentUser, logoutUser} from '../firebaseConfig';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import './Dashboard.css';
import { setUserState } from '../redux/actions';



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
                <IonCard class="ion-card" className="ion-activated">
                    <IonCardHeader>
                        <IonHeader>
                            <IonCardTitle class = "card_title" ><br></br> Hello {username} <br></br> <br></br></IonCardTitle>
                        </IonHeader>
                    </IonCardHeader>
                <IonButton routerLink="./" color = 'header'> Home</IonButton>
                <IonButton routerLink="./all-listings" color = 'header'> View all listings</IonButton>
                {username? 
                <IonButton onClick={logout} color = 'header'> Logout</IonButton> : 
                <IonButton routerLink= "./"> Back to home</IonButton>}
                
                </IonCard>
            </IonContent>
        </IonPage>
    )
}
export default Dashboard