import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Listings.css';
import { wifi } from 'ionicons/icons';

const Listings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class = "title">
        <IonToolbar color = "header">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Shelter.Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color= "thisapp">
          <IonCard color = "dark" class="ion-card" className="ion-activated" href="#">
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
