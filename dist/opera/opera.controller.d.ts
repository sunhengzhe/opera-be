import FindOperaDto from './dto/find-opera.dto';
import { OperaService } from './opera.service';
export declare class OperaController {
    private readonly operaService;
    constructor(operaService: OperaService);
    findAll(query: FindOperaDto): import("./interfaces/opera.interface").Opera[];
}
