/*
 * 
 * reservation card for Naomi Family Residence
 * 
 * 
*/


import React from 'react';
import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Reservation.css';

const Reservation2: React.FC = () => {
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
                <IonCol><IonThumbnail class = "listing_img"><IonImg src = {"./assets/img/listingdemo.png"}></IonImg></IonThumbnail></IonCol>
                <IonCol size = "9">
                  <IonCardHeader>
                  <IonHeader>
                  <IonCardTitle class = "card_title">Naomi Family Residence </IonCardTitle>
                  <IonCardSubtitle class = "card_info">
                  Address: 77 E 9th Street St. Paul, MN 55101 <br></br>
                  Phone number: (651) 228-1800 <br></br>
                  Website: https://www.ugmtc.org   
                  </IonCardSubtitle>
                  </IonHeader>
                  </IonCardHeader>
                </IonCol>
            </IonRow>
          </IonGrid>  

            <IonCardContent>
              <IonGrid>
                <IonRow>Amenities: </IonRow>
                <IonRow>
                  <IonCol>Women and children only</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size = "9">Addiction and rehabilitation support</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size = "9">Education resources</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size = "9">Meals provided</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size = "9">Medical care available</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size = "9">Religious affiliation</IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          
        </IonCard>
        <IonButton color = "thisappblue" class = "button_reserve" href = "./info"> RESERVE A SPOT </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Reservation2;
