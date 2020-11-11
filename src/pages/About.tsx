import React from 'react';
import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar, IonItemDivider, IonItem, IonLabel } from '@ionic/react';
import './About.css';

const About: React.FC = () => {
    return(
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
            <IonContent color="thisapp">
                <IonImg ></IonImg>
                <IonTitle id = 'aboutus'>  About Us </IonTitle>
            
                <IonCard color = "thisappblue">
                    <IonLabel class = "mission">Mission Statement:</IonLabel>
                    <p>We are a non-profit organization that is dedicated to providing homeless individuals in the Twin Cities with access to available shelter and holistic resources.</p>
                </IonCard>

                <IonCard color = "thisappblue">
                    <IonLabel class = "mission">Our Story: </IonLabel>
                    <p>ShelterMe was founded by five Macalester students during a Hackathon event hosted by Hack +he Gap in October 2020. United by a desire to address social issues with technological solutions, we developed this website to facilitate the search for homeless shelters through a comprehensive and flexible directory. </p>
                </IonCard>
                
                <IonCard color = "thisappblue">
                    <IonLabel class = "mission">Looking Ahead:</IonLabel>
                    <p>TEXT</p>
                </IonCard>

            </IonContent>
        </IonPage>
    )
}
export default About