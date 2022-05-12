/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Empty } from './google/protobuf/empty.pb';

export const protobufPackage = 'journals';

/** CreateJournal */
export interface CreateJournalRequest {
  title: string;
  author: number;
  image?: string | undefined;
  body: string;
  datetime: string;
}

export interface CreateJournalResponse {
  status: number;
  error: string[];
  id: number;
  data: CreateJournalRequest | undefined;
}

/** EditJournal */
export interface EditJournalRequest {
  id: string;
  title: string;
  author: string;
  image?: string | undefined;
  body: string;
  datetime: string;
}

export interface EditJournalResponse {
  status: number;
  error: string[];
  data: EditJournalRequest | undefined;
}

/** DeleteJournal */
export interface DeleteJournalRequest {
  id: number;
}

export interface Data {
  id: number;
  title: string;
  author: string;
  image?: string | undefined;
  body: string;
  datetime: string;
}

export interface FindOneRequest {
  id: number;
}

export interface FindOneResponse {
  status: number;
  error: string[];
  data: Data | undefined;
}

export interface FindAllResponse {
  status: number;
  error: string[];
  data: Data | undefined;
}

export const JOURNALS_PACKAGE_NAME = 'journals';

export interface JournalServiceClient {
  createJournal(
    request: CreateJournalRequest,
  ): Observable<CreateJournalResponse>;

  editJournal(request: EditJournalRequest): Observable<EditJournalResponse>;

  deleteJournal(request: DeleteJournalRequest): Observable<Empty>;

  findOne(request: FindOneRequest): Observable<FindOneResponse>;

  findAll(request: Empty): Observable<FindAllResponse>;
}

export interface JournalServiceController {
  createJournal(
    request: CreateJournalRequest,
  ):
    | Promise<CreateJournalResponse>
    | Observable<CreateJournalResponse>
    | CreateJournalResponse;

  editJournal(
    request: EditJournalRequest,
  ):
    | Promise<EditJournalResponse>
    | Observable<EditJournalResponse>
    | EditJournalResponse;

  deleteJournal(request: DeleteJournalRequest): void;

  findOne(
    request: FindOneRequest,
  ): Promise<FindOneResponse> | Observable<FindOneResponse> | FindOneResponse;

  findAll(
    request: Empty,
  ): Promise<FindAllResponse> | Observable<FindAllResponse> | FindAllResponse;
}

export function JournalServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createJournal',
      'editJournal',
      'deleteJournal',
      'findOne',
      'findAll',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('JournalService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('JournalService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const JOURNAL_SERVICE_NAME = 'JournalService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
