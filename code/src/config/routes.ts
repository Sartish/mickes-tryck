import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import OrderPage from '../pages/order';
import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import StepFour from '../components/StepFour';
import Form from '../components/Form';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
    exact: true,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
    exact: true,
  },
  {
    path: '/order',
    name: 'OrderPage',
    component: OrderPage,
    exact: true,
  },
  {
    path: '/order',
    name: 'NavBar',
    component: NavBar,
    exact: true,
  },
  {
    path: '/order',
    name: 'Navigation',
    component: Navigation,
    exact: true,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    exact: true,
  },
  {
    path: '/step1',
    name: 'StepOne',
    component: StepOne,
    exact: true,
  },
  {
    path: '/step2',
    name: 'StepTwo',
    component: StepTwo,
    exact: true,
  },
  {
    path: '/step3',
    name: 'StepThree',
    component: StepThree,
    exact: true,
  },
  {
    path: '/step4',
    name: 'StepFour',
    component: StepFour,
    exact: true,
  },
];

export default routes;
