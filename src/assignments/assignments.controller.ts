import {
  Controller,
  Inject,
  Post,
  OnModuleInit,
  UseGuards,
  Req,
  Put,
  Delete,
  Get,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AuthGuard } from '../auth/auth.guard';
import {
  ASSIGNMENT_SERVICE_NAME,
  AssignmentServiceClient,
  CreateAssignmentRequest,
  CreateAssignmentResponse,
  DeleteAssignmentRequest,
  DeleteAssignmentResponse,
  EditAssignmentRequest,
  EditAssignmentResponse,
  FindAllAssignmentsResponse,
  FindOneAssignmentRequest,
  FindOneAssignmentResponse,
} from './assignments.pb';

@Controller('order')
export class AssignmentsController implements OnModuleInit {
  private svc: AssignmentServiceClient;

  @Inject(ASSIGNMENT_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<AssignmentServiceClient>(
      ASSIGNMENT_SERVICE_NAME,
    );
  }

  @Post()
  @UseGuards(AuthGuard)
  private async createAssignment(
    @Req() req: CreateAssignmentRequest,
  ): Promise<Observable<CreateAssignmentResponse>> {
    return this.svc.createAssignment(req);
  }

  @Put()
  @UseGuards(AuthGuard)
  private async editAssignment(
    @Req() req: EditAssignmentRequest,
  ): Promise<Observable<EditAssignmentResponse>> {
    return this.svc.editAssignment(req);
  }

  @Delete()
  @UseGuards(AuthGuard)
  private async deleteAssignment(
    @Req() req: DeleteAssignmentRequest,
  ): Promise<Observable<DeleteAssignmentResponse>> {
    return this.svc.deleteAssignment(req);
  }

  @Get()
  @UseGuards(AuthGuard)
  private async findOneAssignment(
    @Req() req: FindOneAssignmentRequest,
  ): Promise<Observable<FindOneAssignmentResponse>> {
    return this.svc.findOneAssignment(req);
  }

  @Get()
  @UseGuards(AuthGuard)
  private async findAllAssignments(): Promise<
    Observable<FindAllAssignmentsResponse>
  > {
    return this.svc.findAllAssignments({});
  }
}
