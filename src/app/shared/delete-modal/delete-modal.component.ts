import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DeleteModalData {
  name: string;
}

@Component({
  selector: 'delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteModalData
  ) {}

  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }

  onDeleteClick() {
    this.dialogRef.close('delete');
  }
}
