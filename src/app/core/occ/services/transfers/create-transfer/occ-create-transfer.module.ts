import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OccCreateTransferService } from './occ-create-transfer.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [OccCreateTransferService]
})
export class OccCreateTransferModule {}
