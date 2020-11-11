import React from 'react';
import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Faq.css';

const Faq: React.FC = () => {
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
                <IonTitle> Frequently Asked Questions </IonTitle>
                <p> </p>
            </IonContent>
        </IonPage>
    )
}
export default Faq