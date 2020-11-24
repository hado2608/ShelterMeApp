import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonRow, IonTextarea, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { listingData} from '../components/listingData';
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

        <IonCard color = "dark" class="ion-card" className="ion-activated" href="./reserve-dorothy-day-center">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonThumbnail class = "listing_img"><IonImg src = {"./assets/img/listingdemo.png"}></IonImg></IonThumbnail>
              </IonCol>
              <IonCol size = "6">
                <IonCardHeader>
                  <IonCardTitle>Dorothy Day Center </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Address: 183 Old Sixth Street Saint Paul, MN 55102 <br></br>
                  Phone number: (651) 647-2350 <br></br>
                  Website: https://www.cctwincities.org/locations/
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

        <IonCard color = "dark" class="ion-card" className="ion-activated" href="./reserve-naomi-family-residence">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonThumbnail class = "listing_img"><IonImg src = {"./assets/img/listingdemo.png"}></IonImg></IonThumbnail>
              </IonCol>
              <IonCol size = "6">
                <IonCardHeader>
                  <IonCardTitle>Higher Ground Saint Paul Shelter </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Address: 435 Dorothy Day Place St. Paul, MN 55102 <br></br>
                  Phone number: (651) 647-2330 <br></br>
                  Website: https://www.cctwincities.org/locations/higher-ground-saint-paul/
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

        <IonCard color = "dark" class="ion-card" className="ion-activated" href="./reserve-naomi-family-residence">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonThumbnail class = "listing_img"><IonImg src = {"./assets/img/listingdemo.png"}></IonImg></IonThumbnail>
              </IonCol>
              <IonCol size = "6">
                <IonCardHeader>
                  <IonCardTitle>Catholic Charities Family Service Center </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Address: 2001 Van Dyke Street Maplewood, MN 55109 <br></br>
                  Phone number: (651) 291-0211 <br></br>
                  Website: https://www.cctwincities.org/locations/family-service-center/
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
                  <IonCardTitle>People Serving People Minneapolis </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Address: People Serving People Minneapolis <br></br>
                  Phone number: (612) 332-4500 <br></br>
                  Website: http://www.peopleservingpeople.org
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
                  <IonCardTitle>Hope Street Shelter for Young Adults </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Address: 1121 East 46th Street Minneapolis, MN 55407 <br></br>
                  Phone number: (612) 827-9372 <br></br>
                  Website: https://www.cctwincities.org/locations/hope-street-shelter/
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
                  <IonCardTitle>Mary's Place </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Address: 401 North 7th St Minneapolis, MN 55405 <br></br>
                  Phone number: (612) 338-4855 <br></br>
                  Website: https://sharingandcaringhands.org/
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};


export default Listings;