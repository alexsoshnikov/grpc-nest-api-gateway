import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  ASSIGNMENT_SERVICE_NAME,
  ASSIGNMENT_PACKAGE_NAME,
} from './assignments.pb';
import { AssignmentsController } from './assignments.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ASSIGNMENT_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: ASSIGNMENT_PACKAGE_NAME,
          protoPath: 'node_modules/grpc-nest-proto/proto/assignments.proto',
        },
      },
    ]),
  ],
  controllers: [AssignmentsController],
})
export class AssignmentsModule {}
