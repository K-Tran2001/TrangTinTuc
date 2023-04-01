var mongoose = require('mongoose');

var taiKhoanSchema = new mongoose.Schema({
    HoVaTen: { type: String, require: true },
    Email: { type: String },
    HinhAnh: { type: String },
    TenDangNhap: { type: String, unique: true, require: true },
    MatKhau: { type: String, require: true },
    QuyenHan: { type: String, default: 'user' },
    KichHoat: { type: String, default: 1 }
});

var taiKhoanModel = mongoose.model('TaiKhoan', taiKhoanSchema);

module.exports = taiKhoanModel;