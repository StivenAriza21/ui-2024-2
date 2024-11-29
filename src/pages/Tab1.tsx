import { IonContent, IonPage, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage className='page'>
      <IonContent className='content'>
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
          <header>
          <div className='banner'>
              <img className='banner-img' src="https://cf-cdn-v6-api.audi.at/images/2bd3d200cf2b73ec454e050af595275fb7acb23e/738bd674-ab5c-488c-a1f1-83b430130c2e/crop:SMART/resize:1920:600/1920x1080q4r20224070" alt="banner" />
              <div className='banner-overlay'></div>
          <div className='bannerText'>
              <h1>Viaja de forma ecológica y salva el planeta.</h1>
          </div>
          </div>
        </header>
        <section>
          <div>
            <h1 className='text'>Popular en la ciudad</h1>
            <div id='card'>
              <IonCard className='card'>
                <img alt="Silhouette of mountains" src="https://cf-cdn-v6-api.audi.at/images/d480119b88f73d433f7987453104b6c144e3b723/6f332cbb-24c1-4248-9f2f-f9536386819d/crop:SMART/resize:1920:1920/q8e20224389withoutcast-l" />
                <IonCardHeader className='card-text'>
                <IonCardTitle>Audi Q8 e-tron</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Más libertad personal para una movilidad autónoma: nada que se contradiga con el SUV totalmente eléctrico de Audi. El Audi Q8 e-tron quattro no sólo es deportivo, sino también apto para el uso diario. Sus dos motores eléctricos trabajan junto con la tracción total eléctrica para garantizar un rendimiento impresionante y un manejo ágil.</IonCardContent>
                <IonButton color='dark' expand="block" className="bannerBoton"href='/Tab2'>Detalles</IonButton>
              </IonCard>
              <IonCard className='card'>
                <img alt="Silhouette of mountains" src="https://cf-cdn-v6-api.audi.at/images/52ac59e083c3e41040077c8d803dbf5c577c819c/13e28fa6-8715-4fb2-84b4-b83c61b5b1d9/crop:SMART/resize:1920:1920/q8e20224443-xl-oe" />
                <IonCardHeader className='card-text'>
                <IonCardTitle>Audi Q8 Sportback e-tron</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className='card-content1'>El Audi Q8 Sportback e-tron encarna la simbiosis de electrificación y usabilidad cotidiana: gracias a una aceleración de 0 a 100 km/h en 5,6 segundos, combina una conducción deportiva con un alto nivel de confort y una autonomía de hasta 600 kilómetros. Hecho para la vida cotidiana y más allá.</IonCardContent>
                <IonButton color='dark' expand="block" className="bannerBoton">Detalles</IonButton>
              </IonCard>
              <IonCard className='card'>
                <img alt="Silhouette of mountains" src="https://cf-cdn-v6-api.audi.at/images/dc1d3f98a123e955fcc0f3c807bd5827c5513e33/c9c566eb-d1e8-4e05-96c0-f83bed89460c/crop:SMART/resize:1920:1920/q8e20224444-l" />
                <IonCardHeader className='card-text'>
                <IonCardTitle>Audi Q8 Sportback e-tron</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className='card-content1'>El Audi Q8 Sportback e-tron encarna la simbiosis de electrificación y usabilidad cotidiana: gracias a una aceleración de 0 a 100 km/h en 5,6 segundos, combina una conducción deportiva con un alto nivel de confort y una autonomía de hasta 600 kilómetros. Hecho para la vida cotidiana y más allá.</IonCardContent>
                <IonButton color='dark' expand="block" className="bannerBoton">Detalles</IonButton>
              </IonCard>
              <IonCard className='card'>
                <img alt="Silhouette of mountains" src="https://cf-cdn-v6-api.audi.at/images/144ae42d7edfc47c9cebd915d33729343dc9d1e8/45ebe663-c4b3-4c74-ab73-18edb2b538fd/crop:100:100:NORTHEAST:0:0/resize:1920:1920/01stage-desktop" />
                <IonCardHeader className='card-text'>
                <IonCardTitle>Audi Q8 e-trond</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Más libertad personal para una movilidad autónoma: nada que se contradiga con el SUV totalmente eléctrico de Audi. El Audi Q8 e-tron quattro no sólo es deportivo, sino también apto para el uso diario. Sus dos motores eléctricos trabajan junto con la tracción total eléctrica para garantizar un rendimiento impresionante y un manejo ágil.</IonCardContent>
                <IonButton color='dark' expand="block" className="bannerBoton">Detalles</IonButton>
              </IonCard>
            </div>
            <div id='card-Scooter'>
              <IonCard className='card'>
                <img alt="Silhouette of mountains" src="https://auteco.vteximg.com.br/arquivos/ids/221465-599-599/patineta-starker-flow-negro-foto1.png?v=638090463397330000" />
                <IonCardHeader className='card-text'>
                <IonCardTitle>PATINETA ELÉCTRICA STARKER FLOW</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Nuestra patineta eléctrica FLOW es ideal para las personas que desean tener una experiencia de manejo diferente y divertida, además de tener una potencia de 500 w y una velocidad máxima de 35km/h. ¡Unete a esta alternativa de trasnporte!</IonCardContent>
                <IonButton color='dark' expand="block" className="bannerBoton">Detalles</IonButton>
              </IonCard>
              <IonCard className='card'>
                <img alt="Silhouette of mountains" src="https://auteco.vteximg.com.br/arquivos/ids/333950-599-599/patineta_velocifero_1600_1000x1000_Rojo_3.png?v=638587515697400000" />
                <IonCardHeader className='card-text'>
                <IonCardTitle>PATINETA ELÉCTRICA VELOCIFERO 1600 W</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Nuestra patineta eléctrica FLOW es ideal para las personas que desean tener una experiencia de manejo diferente y divertida, además de tener una potencia de 500 w y una velocidad máxima de 35km/h. ¡Unete a esta alternativa de trasnporte!</IonCardContent>
                <IonButton color='dark' expand="block" className="bannerBoton">Detalles</IonButton>
              </IonCard>
              <IonCard className='card'>
                <img alt="Silhouette of mountains" src="https://auteco.vteximg.com.br/arquivos/ids/305233-599-599/velocifero-mini-mad-plus-500w-amarillo-foto1.png?v=638260869008570000" />
                <IonCardHeader className='card-text'>
                <IonCardTitle>PATINETA ELÉCTRICA VELOCIFERO PLUS 500 W</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Nuestra patineta eléctrica FLOW es ideal para las personas que desean tener una experiencia de manejo diferente y divertida, además de tener una potencia de 500 w y una velocidad máxima de 35km/h. ¡Unete a esta alternativa de trasnporte!</IonCardContent>
                <IonButton color='dark' expand="block" className="bannerBoton">Detalles</IonButton>
              </IonCard>
              <IonCard className='card'>
                <img alt="Silhouette of mountains" src="https://auteco.vteximg.com.br/arquivos/ids/334062-599-599/patineta_velocifero_2000_1000x1000_Verde_1.png?v=638605641661700000" />
                <IonCardHeader className='card-text'>
                <IonCardTitle>PATINETA ELÉCTRICA VELOCIFERO 2000 W</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Nuestra patineta eléctrica FLOW es ideal para las personas que desean tener una experiencia de manejo diferente y divertida, además de tener una potencia de 500 w y una velocidad máxima de 35km/h. ¡Unete a esta alternativa de trasnporte!</IonCardContent>
                <IonButton color='dark' expand="block" className="bannerBoton">Detalles</IonButton>
              </IonCard>
            </div>
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

export default Tab1;