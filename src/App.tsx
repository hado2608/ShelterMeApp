import React, { useEffect, useState } from 'react';
import { Route, useLocation } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSpinner,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Landingpage from './pages/Landingpage';
import Listings from './pages/Listings';
import Reservation from './pages/Reservation';
import Info from './pages/Information';
import Confirm from './pages/Confirmation';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import { Menu } from './components/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Configuration */
import { getCurrentUser, logoutUser } from './firebaseConfig';
import { useDispatch } from 'react-redux';
import { setUserState } from './redux/actions';

const RoutingSystem: React.FC = () => {
  return(
    <IonReactRouter>
    < Menu/>
    <IonTabs>
      <IonRouterOutlet id="main">
        <Route path="/" component={Landingpage} exact={true} />
        <Route path="/listings" component={Listings} exact={true} />
        <Route path="/reserve" component={Reservation} exact = {true}/>
        <Route path="/info" component={Info} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/faq" component={Faq}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
      </IonRouterOutlet>
      <IonTabBar slot="bottom" color="header">
        <IonTabButton tab="about" href="/about">
          <IonIcon icon={triangle} />
          <IonLabel>About Us</IonLabel>
        </IonTabButton>
        <IonTabButton tab="faq" href="/faq">
          <IonIcon icon={ellipse} />
          <IonLabel>FAQ</IonLabel>
        </IonTabButton>
        <IonTabButton tab="contact" href="/contact">
          <IonIcon icon={square} />
          <IonLabel>Contact Us </IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
  )
}

const App: React.FC = () => {
  const [busy, setBusy] = useState(true)
  const dispatch = useDispatch()
  
  useEffect (() => {
      getCurrentUser().then((user: any) => {
        // if(user) {
        //dispatch(setUserState(user.email))
        //   window.history.replaceState( {}, '', '/dashboard')
        // // } else {
        // //   window.history.pushState({}, '', '/')
        // // } 
        // }
        setBusy(false)
      })
  },[])

  return <IonApp>{busy ? <IonSpinner /> : <RoutingSystem/>}</IonApp>
}
export default App;