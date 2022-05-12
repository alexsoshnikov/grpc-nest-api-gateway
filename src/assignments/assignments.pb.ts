/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Empty } from './google/protobuf/empty.pb';

export const protobufPackage = 'assignment';

/** CreateAssignment */
export interface CreateAssignmentRequest {
  title: string;
  description: string;
  idStudents: number[];
  courseName: string;
  idTeacher: number;
  deadline: string;
}

export interface CreateAssignmentResponse {
  status: number;
  error: string[];
  id: number;
  title: string;
  description: string;
  idStudents: number[];
  courseName: string;
  idTeacher: number;
  deadline: string;
}

/** EditAssignment */
export interface EditAssignmentRequest {
  id: number;
  title: string;
  description: string;
  idStudents: number[];
  courseName: string;
  idTeacher: number;
  deadline: string;
}

export interface EditAssignmentResponse {
  status: number;
  error: string[];
  id: number;
  title: string;
  description: string;
  idStudents: number[];
  courseName: string;
  idTeacher: number;
  deadline: string;
}

/** DeleteAssignment */
export interface DeleteAssignmentRequest {
  id: number;
}

export interface DeleteAssignmentResponse {
  status: number;
  error: string[];
}

/** FindOneAssignment */
export interface FindOneAssignmentRequest {
  id: number;
}

export interface FindOneAssignmentResponse {
  status: number;
  error: string[];
  id: number;
  title: string;
  description: string;
  idStudents: number[];
  courseName: string;
  idTeacher: number;
  deadline: string;
}

/** FindAllAssignments */
export interface Assignments {
  id: number;
  title: string;
  description: string;
  idStudents: number[];
  courseName: string;
  idTeacher: number;
  deadline: string;
}

export interface FindAllAssignmentsResponse {
  status: number;
  error: string[];
  assignments: Assignments[];
}

export const ASSIGNMENT_PACKAGE_NAME = 'assignment';

export interface AssignmentServiceClient {
  createAssignment(
    request: CreateAssignmentRequest,
  ): Observable<CreateAssignmentResponse>;

  editAssignment(
    request: EditAssignmentRequest,
  ): Observable<EditAssignmentResponse>;

  deleteAssignment(
    request: DeleteAssignmentRequest,
  ): Observable<DeleteAssignmentResponse>;

  findOneAssignment(
    request: FindOneAssignmentRequest,
  ): Observable<FindOneAssignmentResponse>;

  findAllAssignments(request: Empty): Observable<FindAllAssignmentsResponse>;
}

export interface AssignmentServiceController {
  createAssignment(
    request: CreateAssignmentRequest,
  ):
    | Promise<CreateAssignmentResponse>
    | Observable<CreateAssignmentResponse>
    | CreateAssignmentResponse;

  editAssignment(
    request: EditAssignmentRequest,
  ):
    | Promise<EditAssignmentResponse>
    | Observable<EditAssignmentResponse>
    | EditAssignmentResponse;

  deleteAssignment(
    request: DeleteAssignmentRequest,
  ):
    | Promise<DeleteAssignmentResponse>
    | Observable<DeleteAssignmentResponse>
    | DeleteAssignmentResponse;

  findOneAssignment(
    request: FindOneAssignmentRequest,
  ):
    | Promise<FindOneAssignmentResponse>
    | Observable<FindOneAssignmentResponse>
    | FindOneAssignmentResponse;

  findAllAssignments(
    request: Empty,
  ):
    | Promise<FindAllAssignmentsResponse>
    | Observable<FindAllAssignmentsResponse>
    | FindAllAssignmentsResponse;
}

export function AssignmentServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createAssignment',
      'editAssignment',
      'deleteAssignment',
      'findOneAssignment',
      'findAllAssignments',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('AssignmentService', method)(
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
      GrpcStreamMethod('AssignmentService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const ASSIGNMENT_SERVICE_NAME = 'AssignmentService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
