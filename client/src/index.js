import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import "./index.css";
import Loading from "./components/Loading/Loading";
import * as serviceWorker from "./serviceWorker";
const App = lazy(() => import("./App"));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
