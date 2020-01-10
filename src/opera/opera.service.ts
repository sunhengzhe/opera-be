import { Injectable } from '@nestjs/common';
import { Opera } from './interfaces/opera.interface';
import FindOperaDto from './dto/find-opera.dto';

const operas = [{"title":"Big Buck Bunny","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4","id":0},{"title":"Elephant Dream","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4","id":1},{"title":"For Bigger Blazes","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4","id":2},{"title":"For Bigger Escape","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4","id":3},{"title":"For Bigger Fun","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4","id":4},{"title":"For Bigger Joyrides","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4","id":5},{"title":"For Bigger Meltdowns","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4","id":6},{"title":"Sintel","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4","id":7},{"title":"Subaru Outback On Street And Dirt","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4","id":8},{"title":"Tears of Steel","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4","id":9},{"title":"Volkswagen GTI Review","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4","id":10},{"title":"We Are Going On Bullrun","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4","id":11},{"title":"What care can you get for a grand?","link":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4","id":12}]

@Injectable()
export class OperaService {
  findAll(findOperaDto: FindOperaDto): Opera[] {
    const { pageIndex, pageSize } = findOperaDto;

    return operas.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
  }
}