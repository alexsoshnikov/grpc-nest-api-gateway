import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JournalModule } from './journals/journal.module';
import { AssignmentsModule } from './assignments/assignments.module';

@Module({
  imports: [AuthModule, JournalModule, AssignmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
