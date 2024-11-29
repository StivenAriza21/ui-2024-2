import { IonContent, IonPage, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader} from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {
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
          <nav id="menu2">
             <ul className='ul'>
                <IonButton className='menu-boton' fill='clear'>Versiones</IonButton>
                <IonButton className='menu-boton' fill='clear'>Destacados</IonButton>
                <IonButton className='menu-boton' fill='clear'>Diseño</IonButton>
              </ul>
          </nav>

        <header id='banner'>
          <img className='banner-img' src="https://cf-cdn-v6-api.audi.at/images/e5ffe64d7a176f668f7b60f198ab4ae2a3b18403/17ab9436-61e7-4e47-ad98-cf3a2963970b/crop:SMART/resize:1920:1080/Q8-E-TRON-ADVANCE" />
        </header>
      
        <section id='cardT2'>
          <div className='card-img'>
            <img src="https://cf-cdn-v6-api.audi.at/images/dc1d3f98a123e955fcc0f3c807bd5827c5513e33/c9c566eb-d1e8-4e05-96c0-f83bed89460c/crop:SMART/resize:1920:1920/q8e20224444-l" alt="" />
          </div>
          
          <div className='card-info'>
            <IonCard className='card-info-cont'>
                <IonCardHeader class='card-header'>
                  <IonCardTitle>Audi Q8 Sportback e-tron</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>Consumo de electricidad (combinado4) en kWh/100 km: 19,7–25,6; Emisiones de CO₂ (combinado4) en g/km: 0. Datos sobre los consumos de combustible/electricidad y emisiones de CO₂ con rangos variables según la configuración del vehículo. Solo se proporcionan valores de consumo y emisiones según el ciclo WLTP, no según el ciclo NEFZ.</IonCardContent>

                <IonButton fill="solid" color="dark" className='reservar-button'href='/Tab3'>Reservar</IonButton>
            </IonCard>
          </div>
        </section>

        <section>
          <div className='card2'>
              <img src="https://cf-cdn-v6-api.audi.at/files/074dca00c9fa9bf175f70e287a78f14365c3c85d/0cb4da2b-cf29-4218-8313-3a9b3fcad6ea/q8e20224399withoutcast-l?imwidth=1920" />
                <IonCard className='card2-info'>
                  <IonCardHeader>
                    <IonCardTitle className='info'>Eléctrico. Lleno de detalles maravillosos</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent className='contenido'>El Audi e-tron ha cumplido su papel de pionero como vehículo completamente eléctrico. Por lo tanto, ahora es el momento adecuado para incluirlo también nominalmente en la línea de modelos de Audi, como Audi Q8 e-tron.</IonCardContent>
                </IonCard>
          </div> 
        </section>
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

export default Tab2;