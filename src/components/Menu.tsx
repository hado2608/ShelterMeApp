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

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getCurrentUser, logoutUser } from '../firebaseConfig';
import { setUserState } from '../redux/actions';
import './Menu.css';
export const Menu = () => {

    const username = useSelector((state: any) => state.user.username)
    const history = useHistory()
    const [busy, setBusy] = useState(true)
    const dispatch = useDispatch()

    useEffect (() => {
        getCurrentUser().then((user: any) => {
            if(user) {
                dispatch(setUserState(user.email))
            } 
        })
    })

    async function logout() {
        setBusy(true)
        await logoutUser()
        setBusy(false)
        history.replace('/')
    }
    return (
        <IonMenu side="start" contentId ="main">
            <IonHeader>
                <IonToolbar color="header">
                    <IonTitle> MENU </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color = "thisapp">
                <IonList color = "thisapp">
                    <IonMenuToggle auto-hide ="false" color = "thisapp">
                    <IonItem button routerLink={"./"}  routerDirection="none" color = "thisapp">
                            <IonLabel>Home</IonLabel>
                        </IonItem>
                        <IonItem button routerLink={"./all-listings"}  routerDirection="none" color = "thisapp">
                            <IonLabel>View All Listings</IonLabel>
                        </IonItem>
                        {username ?
                        
                        <IonItem button routerLink={"./"} color = "thisapp"> 
                        <IonLabel>Your Listings </IonLabel>
                        </IonItem>
                        :
                        <IonItem button routerLink={"./login"} color = "thisapp"> 
                            <IonLabel>Login </IonLabel>
                        </IonItem>
                        
                        }
                        {username ? 
                        <IonItem button routerLink={"./"} color = "thisapp"> 
                        <IonLabel onClick= {logout}>Logout</IonLabel>
                        </IonItem>

                        : 

                        <IonItem button routerLink={"./register"} color = "thisapp"> 
                            <IonLabel >Register</IonLabel>
                        </IonItem>}
                        
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};
