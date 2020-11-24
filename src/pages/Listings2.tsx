/*
 * 
 * listings with tag "Felons allowed"
 * 
 * 
*/

import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonRow, IonTextarea, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { listingData} from '../components/listingData';
import './Listings.css';


const Listings2: React.FC = () => {
  

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

        <IonCard color = "dark" class="ion-card" className="ion-activated" href="./reserve-kingdom-pathways-freedom-outreach">
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
        </IonCard>
      </IonContent>
    </IonPage>
  );
};


export default Listings2;