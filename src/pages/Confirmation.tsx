import React from 'react';
import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar, IonLabel, IonIcon } from '@ionic/react';
import './Confirmation.css';

const Confirm: React.FC = () => {
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
            <IonContent color="thisapp" >
            <IonCard class = "reservation">
                <IonLabel id = "confirm_message"> Your reservation has been submitted to: </IonLabel>
                <br></br>
                <IonLabel id = "confirm_place" color="light">Dorothy Day Center</IonLabel>
                <IonIcon name = "checkmark-circle-outline"></IonIcon>
        
                
            </IonCard>
            <IonButton color = "thisappblue" class="button_home" size = "large" href = "./"> BACK TO HOME </IonButton>
            </IonContent>

        </IonPage>
    )
}
export default Confirm