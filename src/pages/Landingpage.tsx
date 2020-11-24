import React, { useState } from 'react';
import { IonButton, IonButtons, IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonSearchbar, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Landingpage.css';

const Landingpage: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color = 'header' >
            <IonThumbnail class="thumbnail" >
              <IonImg src = {"./assets/img/logo.png"}></IonImg>
            </IonThumbnail>
            <IonTitle class = 'title'>Shelter.Me</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color= "thisapp" >
        <ExploreContainer name="Enter your zip code:" />
        <IonSearchbar color="white" class = 'center' value={searchText} onIonChange={e => setSearchText(e.detail.value!)} 
        inputmode="numeric" type="number"></IonSearchbar>
        <IonButton id = "search_button" color = "#79acb9" href = "/search-results">Search</IonButton>
      
        <IonCard color = 'header'>
          <IonHeader class = 'amenities' color = 'header'><br></br>Or, select an amenity:<br></br><br></br></IonHeader>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton class = 'buttons' color="light">Women only</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Meals provided</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Shower facilities</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Laundry facilities</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Medical care available</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Mail facilities</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Veteran services</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Religious affiliation</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Addiction and rehabilitation support</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton class = 'buttons' color="light">Mental health services</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light" href = "/education-resources">Education resources</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Day shelter only</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Overnight shelter only</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Women and children only</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Transitional housing</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Social services</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Childcare available</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Men only</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton class = 'buttons' color="light">Pay-to-stay shelter</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Long-term care</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light" href = "/felons-allowed">Felons allowed</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Job training available</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Family shelter</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Computer lab</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Youth shelter</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Clothing provided</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class = 'buttons' color="light">Bus cards available</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Landingpage;
