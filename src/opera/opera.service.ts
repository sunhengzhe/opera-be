import { Injectable } from '@nestjs/common';
import { Opera } from './interfaces/opera.interface';
import FindOperaDto from './dto/find-opera.dto';

const operas = [{"title":"Big Buck Bunny","link":"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","id":0},{"title":"Elephant Dream","link":"http://vjs.zencdn.net/v/oceans.mp4","id":1},{"title":"For Bigger Blazes","link":"https://media.w3.org/2010/05/sintel/trailer.mp4","id":2},{"title":"For Bigger Escape","link":"http://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4","id":3},{"title":"For Bigger Fun","link":"http://vfx.mtime.cn/Video/2019/03/18/mp4/190318214226685784.mp4","id":4},{"title":"For Bigger Joyrides","link":"http://vfx.mtime.cn/Video/2019/03/19/mp4/190319104618910544.mp4","id":5},{"title":"For Bigger Meltdowns","link":"http://vfx.mtime.cn/Video/2019/03/19/mp4/190319125415785691.mp4","id":6},{"title":"Sintel","link":"http://vfx.mtime.cn/Video/2019/03/17/mp4/190317150237409904.mp4","id":7},{"title":"Subaru Outback On Street And Dirt","link":"http://vfx.mtime.cn/Video/2019/03/14/mp4/190314223540373995.mp4","id":8},{"title":"Tears of Steel","link":"http://vfx.mtime.cn/Video/2019/03/14/mp4/190314102306987969.mp4","id":9},{"title":"Volkswagen GTI Review","link":"http://vfx.mtime.cn/Video/2019/03/13/mp4/190313094901111138.mp4","id":10},{"title":"We Are Going On Bullrun","link":"http://vfx.mtime.cn/Video/2019/03/12/mp4/190312143927981075.mp4","id":11},{"title":"What care can you get for a grand?","link":"http://vfx.mtime.cn/Video/2019/03/12/mp4/190312083533415853.mp4","id":12}]

@Injectable()
export class OperaService {
  findAll(findOperaDto: FindOperaDto): Opera[] {
    const { pageIndex, pageSize } = findOperaDto;

    return operas.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
  }
}