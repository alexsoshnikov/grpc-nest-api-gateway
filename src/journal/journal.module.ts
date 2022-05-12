import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JOURNAL_SERVICE_NAME, JOURNALS_PACKAGE_NAME } from './journal.pb';
import { JournalController } from './journal.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: JOURNAL_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50053',
          package: JOURNALS_PACKAGE_NAME,
          protoPath: 'node_modules/grpc-nest-proto/proto/journals.proto',
        },
      },
    ]),
  ],
  controllers: [JournalController],
})
export class JournalModule {}
