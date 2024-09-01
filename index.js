import React, {} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Foodmain from './Foodmain';
import Home from './Home';
import Story from './Story';
import Gallery from './Gallery';
import Party from './Party';
import Contact from './Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './Menu';
import Mainmenu from './Mainmenu';
import Reserve from './Reserve';
import ReservationForm from './ReservationForm';
import HostParty from './HostParty';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Foodmain />,
    children:[
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path:"/menu",
        element:<Menu/>,
      },
      {
        path:"/gallery",
        element:<Gallery/>,
      },
      {
        path:"/party",
        element:<Party/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
    ]
  },
  {
    path:"/mainmenu",
    element:<Mainmenu/>
  },
  {
    path:"/book",
    element:<Reserve/>
  },
  {
    path:"/reservations",
    element:<ReservationForm/>
  },
  {
    path:"/story",
    element:<Story/>,
  },
  {
    path:'/hostparty',
    element:<HostParty/>,
    },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
