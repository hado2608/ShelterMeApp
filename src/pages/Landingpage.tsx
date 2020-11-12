import React, { useState } from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonSearchbar, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Landingpage.css';
import { Link } from 'react-router-dom';

const Landingpage: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color = 'header' >
        <Link to = "./" id = 'home-link'>
            <IonThumbnail class="thumbnail" >
              <IonImg src = {"./assets/img/logo.png"}></IonImg>
            </IonThumbnail>
            <IonTitle class = 'title-home'>Shelter.Me</IonTitle>
            </Link>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color= "thisapp" >
        <ExploreContainer name="Enter your zip code:" />
        <IonSearchbar color="white" class = 'center' value={searchText} onIonChange={e => setSearchText(e.detail.value!)} 
        inputmode="numeric" type="number"></IonSearchbar>
        <IonButton id = "search_button" color = "#79acb9" href = "/listings">Search</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Landingpage;
