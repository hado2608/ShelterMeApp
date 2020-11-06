import React from 'react';
import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Reservation.css';

const Reservation: React.FC = () => {
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
      <IonContent fullscreen color = "thisapp">
        <IonCard color = "dark" class = "reservation">
          <IonCardHeader>
            <IonCardTitle>Dorothy Day Center</IonCardTitle>
            <IonCardSubtitle>
            Address: 183 Old Sixth Street Saint Paul, MN 55102 <br></br>
            Phone number: (651) 647-2350 <br></br>
            Website: https://www.cctwincities.org/locations/   
            </IonCardSubtitle>
            <IonCardContent>
              <IonGrid>
                <IonRow>Amenities</IonRow>
                <IonRow>
                  <IonCol>Women only</IonCol>
                  <IonCol>Mail facilities</IonCol>
                </IonRow>
              </IonGrid>
              <IonButton color = "thisappblue" class = "button"> RESERVE A SPOT </IonButton>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Reservation;
