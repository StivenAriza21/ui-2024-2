import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <body>
          <nav id="menu">
            <p> EcoRide</p>
            <ul>
              <IonButton fill="clear">Clear</IonButton>
              <IonButton fill="clear">Clear</IonButton>
              <IonButton>Default</IonButton>
            </ul>
          </nav>
        </body>
        <header id="banner">
          <img src="" alt="" />
        </header>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;