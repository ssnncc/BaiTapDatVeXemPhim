//File quản lý tất cả các state của ứng dụng thay vì đặt tại compoment
import {combineReducers,createStore} from 'redux'

import DatVeXemPhimReducer from './DatVeXemPhimReducer'

const rootReducer = combineReducers({
    //Khai báo các state
    
   DatVeXemPhimReducer
})

//Tạo ra 1 store chứa rootReducer (Xem như state tổng của ứng dụng)
export const store = createStore(rootReducer);