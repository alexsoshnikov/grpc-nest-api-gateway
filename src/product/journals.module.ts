import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JOURNAL_SERVICE_NAME, JOURNALS_PACKAGE_NAME } from './journals.pb';
import { JournalsController } from './journals.controller';

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
  controllers: [JournalsController],
})
export class JournalsModule {}
