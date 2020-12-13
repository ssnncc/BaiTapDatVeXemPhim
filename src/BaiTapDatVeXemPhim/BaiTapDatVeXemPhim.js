import React, { Component } from "react";
import "./BaiTapDatVeXemPhim.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class BaiTapDatVeXemPhim extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}  >
          <HangGhe hangGhe ={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="bg-ticket bookingMovie">
        <div className="bg-color">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning display-4" style={{ fontSize: "40px" }}>ĐẶT VÉ XEM PHIM</h1>
                <div className="mt-2 text-light" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div className="screen_content">
                  <div className="screen"></div>
                 
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <h1
                  className="text-warning  display-4 text-light mt-3"
                  style={{ fontSize: "25px" }}
                >
                  DANH SÁCH GHẾ BẠN CHỌN
                </h1>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
