import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Discount from '../components/Discount';
import NewArrivle from '../components/NewArrivle';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent  >
     <div className='slider' ><Slider  /></div>
      <h3>New Arrivles</h3>
      <NewArrivle />
      <h3>Discount</h3>
      <Discount />
      <h3>All Product</h3>
        <ProductList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
