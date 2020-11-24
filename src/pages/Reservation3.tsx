/*
 * 
 * reservation card for Kingdom Pathways Freedom Outreach
 * 
 * 
*/


import React from 'react';
import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Reservation.css';

const Reservation3: React.FC = () => {
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
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonThumbnail class = "listing_img"><IonImg src = {"./assets/img/listingdemo.png"}></IonImg></IonThumbnail>
              </IonCol>
              <IonCol size = "6">
                <IonCardHeader>
                  <IonCardTitle>Kingdom Pathways Freedom Outreach </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Address: 1088 University Ave W St. Paul, MN 55104 <br></br>
                  Phone number: (651) 387-8393 <br></br>
                  Website: http://www.kingdompathways.org/
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonGrid>  

          <IonCardContent>
            <IonGrid>
              <IonRow>Amenities: </IonRow>
              <IonRow>
                <IonCol size = "9">Mental health services</IonCol>
              </IonRow>
              <IonRow>
                <IonCol size = "9">Transitional housing</IonCol>
              </IonRow>
              <IonRow>
                <IonCol size = "9">Religious affiliation</IonCol>
              </IonRow>
              <IonRow>
                <IonCol size = "9">Addiction and rehabilitation support</IonCol>
              </IonRow>
              <IonRow>
                <IonCol size = "9">Medical care available</IonCol>
              </IonRow>
              <IonRow>
                <IonCol size = "9">Long-term care</IonCol>
              </IonRow>
              <IonRow>
                <IonCol size = "9">Felons allowed</IonCol>
              </IonRow>
              <IonRow>
                <IonCol size = "9">Job training available</IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonButton color = "thisappblue" class = "button_reserve" href = "./info"> RESERVE A SPOT </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Reservation3;
