import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperaModule } from './opera/opera.module';

@Module({
  imports: [OperaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
