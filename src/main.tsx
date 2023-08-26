
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes'

//import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
 <RouterProvider router={routes}></RouterProvider>
    </Provider>
  
  </React.StrictMode>,
)
