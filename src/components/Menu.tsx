import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
} from '@ionic/react';

import React from "react";
import './Menu.css';
export const Menu = () => {
    return (
        <IonMenu side="start" contentId ="main" >
            <IonHeader>
                <IonToolbar color="header">
                    <IonTitle> MENU </IonTitle>
                </IonToolbar>
            </IonHeader >
            <IonContent color = "thisapp">
                <IonList>
                    <IonMenuToggle auto-hide ="false" color = "thisapp">
                        <IonItem button routerLink={"./listings"}  routerDirection="none" color = "thisapp">
                            <IonLabel>All Listings</IonLabel>
                        </IonItem>
                        <IonItem color = "thisapp"> 
                            <IonLabel>About Us</IonLabel>
                        </IonItem>
                        <IonItem color = "thisapp"> 
                            <IonLabel>Contact</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};
