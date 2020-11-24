import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonRow, IonTextarea, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { listingData} from '../components/listingData';
import './Listings.css';


const ZipListings: React.FC = () => {
  

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
              <IonCard color = "dark" class="ion-card" className="ion-activated" href="./reserve-naomi-family-residence">
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonThumbnail class = "listing_img"><IonImg src = {"./assets/img/listingdemo.png"}></IonImg></IonThumbnail>
                    </IonCol>
    
                    <IonCol size = "6">
                      <IonCardHeader>
                        <IonCardTitle>Naomi Family Residence</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        Address: 77 E 9th Street St. Paul, MN 55101 <br></br>
                        Phone number: (651) 228-1800 <br></br>
                        Website: https://www.ugmtc.org
                      </IonCardContent>
                    </IonCol>
    
                  </IonRow>
                </IonGrid>
              </IonCard>
    
              <IonCard color = "dark" class="ion-card" className="ion-activated" href="./reserve-naomi-family-residence">
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonThumbnail class = "listing_img"><IonImg src = {"./assets/img/listingdemo.png"}></IonImg></IonThumbnail>
                    </IonCol>
                    <IonCol size = "6">
                      <IonCardHeader>
                        <IonCardTitle>The Family Place </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        Address: 244 Tenth Street East Saint Paul, MN 55101 <br></br>
                        Phone number: (651) 225-9354 <br></br>
                        Website: http://famplace.org/ 
                      </IonCardContent>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
    
              <IonCard color = "dark" class="ion-card" className="ion-activated" href="./reserve-naomi-family-residence">
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonThumbnail class = "listing_img"><IonImg src = {"./assets/img/listingdemo.png"}></IonImg></IonThumbnail>
                    </IonCol>
                    <IonCol size = "6">
                      <IonCardHeader>
                        <IonCardTitle>Union Gospel Mission Twin Cities </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        Address: 435 East University Avenue St. Paul, MN 55101 <br></br>
                        Phone number: (612) 292-1721 <br></br>
                        Website: https://www.ugmtc.org/ 
                      </IonCardContent>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
          </IonContent>
        </IonPage>
      );
    };
    
    export default ZipListings;
    