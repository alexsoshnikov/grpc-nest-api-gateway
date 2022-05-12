import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JournalsModule } from './product/journals.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [AuthModule, JournalsModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
