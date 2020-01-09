import { Opera } from './interfaces/opera.interface';
import FindOperaDto from './dto/find-opera.dto';
export declare class OperaService {
    findAll(findOperaDto: FindOperaDto): Opera[];
}
