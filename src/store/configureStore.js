import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import entriesReducer from "../reducers/entries";
import filtersReducer from "../reducers/filters";
import commentsReducer from "../reducers/comments";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({   
            auth: authReducer,
            entries: entriesReducer,
            filters: filtersReducer,
            comments: commentsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;   
}

