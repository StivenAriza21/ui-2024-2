import { IonContent, IonPage, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonCheckbox, IonList, IonItem, IonInput, IonAlert, } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent class='content'>
      <nav id="menu">
            <a href="/Tab1">
              <p className='titulo'> EcoRide </p>
            </a>
            <input type="checkbox" name="ham-bur" id="ham" />
            <label className="label" htmlFor="ham">
            <img className='menu-img' src="https://img.icons8.com/m_outlined/512/FFFFFF/menu.png" alt="menu hambur"/>
            </label>
            <ul>
              <IonButton className='boton-menu' fill="clear" href='/Tab1'>Vehiculos</IonButton>
              <IonButton className='boton-menu' fill="clear">Scooters</IonButton>
              <IonButton color="light">Iniciar Sesion</IonButton>
            </ul>
          </nav>
        
      <section>
          <IonCard id='cardT3'>
              <IonCardHeader class='card-header'>
                <IonCardTitle>Complete su transacción</IonCardTitle>
                <IonCardSubtitle>Método de pago</IonCardSubtitle>
              </IonCardHeader>

            <div className='flex-container'>
              <div className='card-content_1'>
              <IonCardContent> 
                  <IonList lines="none">
                    <IonItem lines="none">
                      <IonCheckbox labelPlacement="end" >Tajeta de Crédito</IonCheckbox>
                    </IonItem>
                    
                    <IonItem>
                      <IonCheckbox labelPlacement="end" >PayPal</IonCheckbox>
                    </IonItem>
                    
                    <IonItem>
                      <IonCheckbox labelPlacement="end">PSE</IonCheckbox>
                    </IonItem>
                    
                  </IonList>
                </IonCardContent>

                <IonItem>
                  <IonInput placeholder="Ingrese el número de su tarjeta"></IonInput>
                </IonItem>

              </div>

              <div className='card-content_2'>
                <IonCardContent>
                  <IonCardTitle>Detalles de su compra</IonCardTitle>
                  <IonList lines="none">
                    <IonItem>
                      <IonCardContent>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </IonCardContent>
                    </IonItem>
                    
                    <IonItem>
                      <IonCardContent>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </IonCardContent>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </div>
            </div>
          </IonCard>
        </section>
        <IonButton fill="solid" color="dark" id="present-alert">Pagar reserva</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Pago"
        message="Se a hecho el pago exitosamente."
        buttons={['Cerrar']}
      ></IonAlert>
        <footer id='footer'>
          <div className="izq-pie">
              <h4><b>EcoRide</b></h4>
              <p>¿Los vehículos eléctricos sólo son aptos para distancias cortas y no para el uso diario? La autonomía de un vehículo eléctrico juega un papel importante en relación con el éxito de la movilidad eléctrica. Gracias al continuo desarrollo, la forma alternativa de conducción ha llegado a las rutas de larga distancia.</p>
          </div>
          <div className="der-pie">
              <div>
                  <h4><b>Modelos</b></h4>
                  <p>Todos los modelos</p>
                  <p>Vehiculos electricos</p>
                  <p>Scooters electricas</p>
              </div>
              <div>
                  <h4><b>Movilidad Electrica</b></h4>
                  <p>Todos los modelos electricos</p>
                  <p>Beneficios</p>
                  <p>Sostenibilidad</p>
                  <p>Carga</p>
              </div>
              <div>
                  <h4><b>Compañia</b></h4>
                  <p>Acerca de</p>
                  <p>Clientes</p>
                  <p>Blog</p>
              </div>
              <div>
                  <h4><b>Servicio al Cliente</b></h4>
                  <p>Soporte</p>
                  <p>Contacto</p>
                  <p>FAQ</p>
              </div>
          </div>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;