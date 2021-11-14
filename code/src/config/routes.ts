import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import OrderPage from '../pages/order';
import Navigation from '../components/Navigation';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import StepFour from '../components/StepFour';
import Form from '../components/MainContainer';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
    exact: true,
  },

];

export default routes;
