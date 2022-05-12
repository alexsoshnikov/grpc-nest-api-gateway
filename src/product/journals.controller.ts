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
} from './journals.pb';
import { AuthGuard } from '../auth/auth.guard';

@Controller('product')
export class JournalsController implements OnModuleInit {
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
