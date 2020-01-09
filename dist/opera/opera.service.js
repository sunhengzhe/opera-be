"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operas = [{ "title": "Big Buck Bunny", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }, { "title": "Elephant Dream", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }, { "title": "For Bigger Blazes", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" }, { "title": "For Bigger Escape", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" }, { "title": "For Bigger Fun", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" }, { "title": "For Bigger Joyrides", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" }, { "title": "For Bigger Meltdowns", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" }, { "title": "Sintel", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" }, { "title": "Subaru Outback On Street And Dirt", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" }, { "title": "Tears of Steel", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }, { "title": "Volkswagen GTI Review", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" }, { "title": "We Are Going On Bullrun", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" }, { "title": "What care can you get for a grand?", "link": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" }];
let OperaService = class OperaService {
    findAll(findOperaDto) {
        const { pageIndex, pageSize } = findOperaDto;
        return operas.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
    }
};
OperaService = __decorate([
    common_1.Injectable()
], OperaService);
exports.OperaService = OperaService;
//# sourceMappingURL=opera.service.js.map