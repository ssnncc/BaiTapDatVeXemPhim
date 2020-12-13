import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../redux/actions/DatVeXemPhimActions'
import { datGheAction } from '../redux/actions/DatVeXemPhimActions'
 class HangGhe extends Component {
    
    renderGhe =()=>{
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
           
            let cssGheDaDat = '';
            let disabled = false;
            //Trang thái ghế đã được đặt
            if(ghe.daDat){
                cssGheDaDat='gheDuocChon'
                disabled=true
            }
            //Xét trạng thái đang đặt
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe ===ghe.soGhe);
                if(indexGheDangDat !== -1){
                    cssGheDaDat ='gheDangChon'
                }
            
            return <button disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index} onClick={()=>{
                this.props.datGhe(ghe)
            }}>
                {ghe.soGhe}
            </button>

        })
    }
    renderSoHang = ()=>{
        return this.props.hangGhe.danhSachGhe.map((tenHang,index)=>{
           return <button className="rowNumber">
               {tenHang.soGhe}
           </button>
        })
        
        
    }
    renderHangGhe =()=>{
        if(this.props.soHangGhe===0){
            return <div className="ml-3">
            {this.props.hangGhe.hang}{this.renderSoHang()}
            </div>
        }else{
            return <>
            {this.props.hangGhe.hang} {this.renderGhe()}
           </>
        }
        
    }
    render() {
        return (
            <div className="text-light text-left  mt-2" style={{marginLeft:'100px'}}>
                
                {this.renderHangGhe()}
                
              
            </div>
        )
    }
}
const mapStateToProp =(state)=>{
return {
    danhSachGheDangDat : state.DatVeXemPhimReducer.danhSachGheDangDat,
}
}
const mapDispatchToProps = (dispatch)=>{
    return{
        datGhe :(ghe)=>{
            dispatch(datGheAction(ghe))
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(HangGhe);