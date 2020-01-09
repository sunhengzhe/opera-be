import { Module } from '@nestjs/common';
import { OperaController } from './opera.controller';
import { OperaService } from './opera.service';

@Module({
  controllers: [OperaController],
  providers: [OperaService]
})
export class OperaModule {}