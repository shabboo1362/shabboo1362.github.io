import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Products from './pages/products';
import PageNotFound from './pages/PageNotFound';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/products">
        <Products par={"You are inside the main page"} /> 
        </Route>
        <Route exact path="/products/1">
        <Products  par={"You are inside the first level with identity 1"}/> 
        </Route>
        <Route exact path="/products/5/3">
        <Products  par={"You are inside the first level with identity 5 and second level with identity 3"}/> 
        </Route>
        <Route exact path="/products/7/2/3">
        <Products  par={"You are inside the first level with identity 7 and second level with identity 2 and third level with identity 3"}/> 
        </Route>
        <Route exact path="/products/5/0">
        <Products  par={"You are inside the first level with identity 5"}/> 
        </Route><Route exact path="/products/2/0/0">
        <Products  par={"You are inside the first level with identity 2"}/> 
        </Route>
        <Route exact path="/products/test">
        <PageNotFound /> 
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
