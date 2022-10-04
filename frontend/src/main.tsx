import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { store } from "./pages/userStore/store"
import { Provider } from "react-redux"


import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //     <React.StrictMode>
  //       <App />
  //     </React.StrictMode>
  //   </PersistGate>
  // </Provider>
)
