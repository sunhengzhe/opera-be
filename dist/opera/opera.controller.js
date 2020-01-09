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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const find_opera_dto_1 = require("./dto/find-opera.dto");
const opera_service_1 = require("./opera.service");
let OperaController = class OperaController {
    constructor(operaService) {
        this.operaService = operaService;
    }
    findAll(query) {
        console.log(query);
        const operas = this.operaService.findAll(query);
        return operas;
    }
};
__decorate([
    common_1.Get(),
    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_opera_dto_1.default]),
    __metadata("design:returntype", void 0)
], OperaController.prototype, "findAll", null);
OperaController = __decorate([
    common_1.Controller('operas'),
    __metadata("design:paramtypes", [opera_service_1.OperaService])
], OperaController);
exports.OperaController = OperaController;
//# sourceMappingURL=opera.controller.js.map