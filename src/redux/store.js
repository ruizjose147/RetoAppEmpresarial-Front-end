import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
 
import productosReducer from './inventarioDucks'
import facturaReducer from './facturaDucks'
 
const rootReducer = combineReducers({
    productos: productosReducer,
    factura: facturaReducer
})
 
export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}