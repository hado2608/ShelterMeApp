import React from 'react';
import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar, IonItemDivider, IonItem, IonLabel, IonInfiniteScroll } from '@ionic/react';
import './About.css';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color = 'header'>
                <Link to='./' id="home-page">
                <IonThumbnail class="thumnail">
                    <IonImg src = {"./assets/img/logo.png"}></IonImg>
                </IonThumbnail>
                <IonTitle class = 'title-home' >Shelter.Me</IonTitle>
                </Link>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                </IonToolbar>
            </IonHeader>
          
            <IonTitle class = 'aboutus' size="small">  About Us </IonTitle>
            <IonContent color="thisapp">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard color = "header" >
                                <IonLabel class = "mission">Mission Statement:</IonLabel>
                            </IonCard></IonCol>
                        <IonCol>
                        <IonLabel class = "aboutus-content"> We are a non-profit organization that is dedicated to providing homeless individuals in the Twin Cities with access to available shelter and holistic resources.</IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                        <IonLabel class = "aboutus-content"> ShelterMe was founded by five Macalester students during a Hackathon event hosted by Hack +he Gap in October 2020. United by a desire to address social issues with technological solutions, we developed this website to facilitate the search for homeless shelters through a comprehensive and flexible directory. 
                        </IonLabel>
                        </IonCol>
                        <IonCol>
                        <IonCard color = "header">
                            <IonLabel class = "mission">Our Story: </IonLabel>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol><IonCard color = "header">
                        <IonLabel class = "mission">Looking Ahead:</IonLabel>
                        </IonCard></IonCol>
                        <IonCol>
                        <IonLabel class = "aboutus-content"> Our primary goal for ShelterMe is to provide access to shelter for homeless individuals. To that end, in addition to our website, we are working towards developing an phone-based application that will further facilitate the process of obtaining temporary housing. Moreover, anonymous data collected from the usage of this website will become part of reports on homelessness in the Twin Cities in order to develop a comprehensive understanding of this community, and advocate for more resources based on demonstrated need. Lastly, as we progress through this project, we have plans to expand past the Twin Cities to surrounding regions in Minnesota.  </IonLabel>

                        </IonCol>
                    </IonRow>
                </IonGrid>

                

                
                
                

            </IonContent>
         
        </IonPage>
    )
}
export default About