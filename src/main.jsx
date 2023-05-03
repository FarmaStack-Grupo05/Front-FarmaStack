import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import {Provider} from "react-redux";
import store from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import "./style.css"
import {Auth0Provider} from "@auth0/auth0-react";

const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
const domain = import.meta.env.VITE_AUTH0_DOMAIN

const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render (
    <Provider store={store}>
        <PersistGate loading={null}
            persistor={persistor}>
            <Auth0Provider domain={domain}
                clientId={clientId}
				authorizationParams={{
					redirect_uri: window.location.origin,
				  }}
                >
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Auth0Provider>

        </PersistGate>
    </Provider>
);
