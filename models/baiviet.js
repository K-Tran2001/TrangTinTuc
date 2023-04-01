var mongoose = require('mongoose');

const baiVietSchema = new mongoose.Schema({
    ChuDe: { type: mongoose.Schema.Types.ObjectId, ref: 'ChuDe' },
    TaiKhoan: { type: mongoose.Schema.Types.ObjectId, ref: 'TaiKhoan' },
    TieuDe: { type: String, require: true },
    TomTat: { type: String, require: true },
    NoiDung: { type: String, require: true },
    NgayDang: { type: Date, default: Date.now },
    LuotXem: { type: Number, default: 0 },
    KiemDuyet: { type: Number, default: 0 },
});

var baiVietModel = mongoose.model('BaiViet', baiVietSchema);

module.exports = baiVietModel;