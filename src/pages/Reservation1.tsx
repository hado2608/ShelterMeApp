/*
 * 
 * reservation card for Dorothy Day Center
 * 
 * 
*/


import React from 'react';
import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './Reservation.css';

const Reservation1: React.FC = () => {
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

                <IonCardContent>
                    <IonGrid>
                        <IonRow>Amenities: </IonRow>
                        <IonRow>
                            <IonCol size = "9">Women only</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size = "9">Meals provided</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size = "9">Shower facilities</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size = "9">Laundry facilities</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size = "9">Medical care available</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size = "9">Mail facilities</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size = "9">Veteran services</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size = "9">Addiction and rehabilitation support</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size = "9">Mental health services</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            
            </IonCard>

            <IonButton color = "thisappblue" class = "button_reserve" href = "./info"> RESERVE A SPOT </IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Reservation1;