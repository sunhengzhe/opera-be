import { Controller, Get, Query, ValidationPipe, UsePipes } from "@nestjs/common";
import FindOperaDto from './dto/find-opera.dto';
import { OperaService } from './opera.service';

@Controller('operas')
export class OperaController {

  constructor(private readonly operaService: OperaService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  findAll(@Query() query: FindOperaDto) {
    const operas = this.operaService.findAll(query);
    return operas;
  }
}