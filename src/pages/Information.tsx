import React, { useState } from 'react';
import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar, IonLabel, IonInput, IonDatetime, IonItem } from '@ionic/react';
import './Information.css';
import './All.css';

const Info: React.FC = () => {
    const [text, setText] = useState<string>();
    const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
    return(
        <IonPage class = "general">
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
            <IonContent color="thisapp">
            <IonCard color = "dark" class = "reservation">
            <IonGrid>
              <IonRow>
                <IonCol><IonThumbnail class = "listing_img"><IonImg src = {"./assets/img/listingdemo.png"}></IonImg></IonThumbnail></IonCol>
                <IonCol size = "9">
                  <IonCardHeader>
                  <IonHeader>
                  <IonCardTitle class = "card_title">Dorothy Day Center </IonCardTitle>
                  <IonCardSubtitle class = "card_info">
                  Address: 183 Old Sixth Street Saint Paul, MN 55102 <br></br>
                  Phone number: (651) 647-2350 <br></br>
                  Website: https://www.cctwincities.org/locations/   
                  </IonCardSubtitle>
                  </IonHeader>
                  </IonCardHeader>
                </IonCol>
            </IonRow>
          </IonGrid>  

            <IonCardContent id= "card_box">
                <IonGrid>
                    <IonRow>
                        <IonCol><IonLabel class = "labelinfo"> Name: </IonLabel> </IonCol>
                        <IonCol size = "9"><IonItem color = "thisappblue" class = 'inputinfo'>
                            <IonInput value={text} placeholder="Your Name" onIonChange={e => setText(e.detail.value!)}></IonInput> </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol><IonLabel>Estimated Arrival Time</IonLabel></IonCol>
                        <IonCol size = "9">
                            <IonItem class = "inputinfo" color = 'thisappblue'>
                            <IonDatetime displayFormat="D MMM YYYY H:mm" min="1997" max="2010" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
          
                </IonCard>
            <IonButton color = "thisappblue" class = "button_confirm" href = "./confirm"> CONFIRM RESERVATION </IonButton>
        </IonContent>
    </IonPage>
    )
}
export default Info