import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonRow, IonTextarea, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
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
            <IonGrid>
              <IonRow>
                <IonCol><IonThumbnail class = "listing_img"><IonImg src = {"./assets/img/listingdemo.png"}></IonImg></IonThumbnail></IonCol>
                <IonCol size = "6">
                <IonCardHeader>
                  <IonCardTitle>Dorothy Day Center</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                  Address: 183 Old Sixth Street Saint Paul, MN 55102 <br></br>
                  Phone number: (651) 647-2350 <br></br>
                  Website: https://www.cctwincities.org/locations/ 
                    
                  </IonCardContent>
                </IonCol>
                <IonCol></IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Listings;
