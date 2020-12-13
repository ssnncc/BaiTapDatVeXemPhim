import { DAT_GHE, HUY_GHE } from "../types/DatVeXemPhimType";

const stateDefault ={
    danhSachGheDangDat:[
        // {soGhe:"A1",gia:10000}
    ]
}
const DatVeXemPhimReducer =(state= stateDefault,action)=>{
    switch(action.type){
        case DAT_GHE:{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if(index !== -1){
                //Nếu đã đặt thì remove khi người dùng chọn
                danhSachGheDangDatUpdate.splice(index,1);
            }else{
                // chưa đặt thì thêm vô
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            //Cập nhật lại state
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}

        }
        case HUY_GHE:{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if(index !== -1){
                //Nếu đã đặt thì remove khi người dùng chọn
                danhSachGheDangDatUpdate.splice(index,1);
            }
             //Cập nhật lại state
             state.danhSachGheDangDat = danhSachGheDangDatUpdate;
             return {...state}
        }


        default: return {...state};

    }
}
export default DatVeXemPhimReducer;