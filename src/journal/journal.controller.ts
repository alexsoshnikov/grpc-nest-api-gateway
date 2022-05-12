import {
  Controller,
  Inject,
  OnModuleInit,
  Param,
  ParseIntPipe,
  UseGuards,
  Post,
  Body,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  FindAllResponse,
  FindOneResponse,
  CreateJournalRequest,
  CreateJournalResponse,
  JOURNAL_SERVICE_NAME,
  JournalServiceClient,
  EditJournalRequest,
  EditJournalResponse,
  DeleteJournalRequest,
} from './journal.pb';
import { AuthGuard } from '../auth/auth.guard';
import { Empty } from './google/protobuf/empty.pb';

@Controller('product')
export class JournalController implements OnModuleInit {
  private svc: JournalServiceClient;

  @Inject(JOURNAL_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc =
      this.client.getService<JournalServiceClient>(JOURNAL_SERVICE_NAME);
  }

  @Post()
  @UseGuards(AuthGuard)
  private async createProduct(
    @Body() body: CreateJournalRequest,
  ): Promise<Observable<CreateJournalResponse>> {
    return this.svc.createJournal(body);
  }

  @Put()
  @UseGuards(AuthGuard)
  private async editProduct(
    @Body() body: EditJournalRequest,
  ): Promise<Observable<EditJournalResponse>> {
    return this.svc.editJournal(body);
  }

  @Delete()
  @UseGuards(AuthGuard)
  private async deleteProduct(
    @Body() body: DeleteJournalRequest,
  ): Promise<Observable<Empty>> {
    return this.svc.deleteJournal(body);
  }

  @Get(':id')
  private async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Observable<FindOneResponse>> {
    return this.svc.findOne({ id });
  }

  // @UseGuards(AuthGuard)
  @Get()
  private async findAll(): Promise<Observable<FindAllResponse>> {
    return this.svc.findAll({});
  }
}
