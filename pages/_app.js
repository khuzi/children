import "../styles/globals.css";
import "../styles/askstyle.css";
import "../styles/helpdeskstyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/cststyle.css";

import { Provider } from "react-redux";
import { store, perssistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={perssistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
