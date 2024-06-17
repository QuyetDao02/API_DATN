"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanhMucRepository = void 0;
const tsyringe_1 = require("tsyringe");
const database_1 = require("../config/database");
let DanhMucRepository = class DanhMucRepository {
    constructor(db) {
        this.db = db;
    }
    async getDanhMucById(id) {
        try {
            const sql = 'CALL GetDanhMucById(?)';
            const [results] = await this.db.query(sql, [id]);
            if (Array.isArray(results) && results.length > 0) {
                return results[0];
            }
            return null;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getDanhMucAll() {
        try {
            const sql = 'CALL GetDanhMucAll()';
            const [results] = await this.db.query(sql, []);
            return results;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async updateDanhMuc(danhmuc) {
        try {
            const sql = 'CALL UpdateDanhMuc(?, ?)';
            await this.db.query(sql, [danhmuc.danh_muc_id, danhmuc.ten_danh_muc]);
            return true;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
DanhMucRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [database_1.Database])
], DanhMucRepository);
exports.DanhMucRepository = DanhMucRepository;
