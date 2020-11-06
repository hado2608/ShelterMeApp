import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Listings.css';

const Listings: React.FC = () => {
  return (
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
      <IonContent fullscreen color= "thisapp">
          <IonCard color = "dark" class="ion-card" className="ion-activated" href="./reserve">
            <IonCardHeader>
              <IonCardSubtitle>#1</IonCardSubtitle>
              <IonCardTitle>Dorothy Day Center</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            Address: 183 Old Sixth Street Saint Paul, MN 55102 <br></br>
            Phone number: (651) 647-2350 <br></br>
            Website: https://www.cctwincities.org/locations/    
            </IonCardContent>
          </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Listings;
