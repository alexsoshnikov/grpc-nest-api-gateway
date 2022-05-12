import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JournalModule } from './journal/journal.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [AuthModule, JournalModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
