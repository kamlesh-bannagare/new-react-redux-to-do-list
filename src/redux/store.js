import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleware = []; // here we have middleware logger and  if we want to work with api's we can  use thunk or saga

if (process.env.NODE_ENV === "development") {    // here we wanted logger in development mode not in production mode thats why we are useing this condition
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;