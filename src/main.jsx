import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";

import { Router } from './Router/Router';
import { DataProvider } from './DataProvider/DataProvider';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <div className=" max-w-7xl mx-auto ">
        <RouterProvider router={Router} />
      </div>
    </DataProvider>

  </React.StrictMode>,
)
