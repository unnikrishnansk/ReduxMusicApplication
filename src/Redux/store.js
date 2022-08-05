import { legacy_createStore,applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as Appreducer} from "./Appreducer/reducer";
import { reducer as Authreducer} from "./Authreducer/reducer";

const rootreducer = combineReducers({Appreducer,Authreducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && compose;


const store = legacy_createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)));

export {store};