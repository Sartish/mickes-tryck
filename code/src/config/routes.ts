import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import OrderPage from '../pages/order';
import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';

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
];

export default routes;
