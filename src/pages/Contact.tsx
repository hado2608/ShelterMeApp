import React from 'react';
import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
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
            <IonContent color="thisapp">
                <IonTitle class = "aboutus"> Contact Us </IonTitle>
            </IonContent>
        </IonPage>
    )
}
export default Contact