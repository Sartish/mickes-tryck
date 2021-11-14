import { hydrate, render } from 'react-dom';
import App from './App';

// To use Hot Module Replacement uncomment below. https://v2.parceljs.org/features/hmr/
// if (module.hot) {
//   module.hot.accept()
// }

const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
