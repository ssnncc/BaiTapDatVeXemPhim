import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/DatVeXemPhimActions";
import { HUY_GHE } from "../redux/types/DatVeXemPhimType";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <>
        <div className="mt-4">
          <button className="gheDuocChon"></button>
          <span className="text-light"> Ghế đã đặt</span>
          <br></br>
          <button className="gheDangChon"></button>
          <span className="text-light"> Ghế đang đặt</span>
          <br></br>
          <button className="ghe" style={{ marginLeft: "0px" }}></button>
          <span className="text-light"> Ghế chưa đặt</span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "20px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-success">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                      <button onClick={()=>{
                        this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                      }}>Hủy</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-light">
              <tr>
                <td></td>
                <td>Tổng tiền</td>
            <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
               return tongTien += gheDangDat.gia;
            },0)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.DatVeXemPhimReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(ThongTinDatGhe);
