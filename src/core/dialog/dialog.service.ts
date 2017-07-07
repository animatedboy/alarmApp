import {Observable} from 'rxjs/Rx';

import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {Injectable, ViewContainerRef} from '@angular/core';

export class modalOptions implements NgbModalOptions{
    backdrop?: boolean | 'static';
    container?: string | "";
    keyboard?: boolean | false;
    size?: 'sm' | 'lg';
    windowClass?: string;
}

@Injectable()
export class DialogService {

    constructor(private dialog : NgbModal) {}


    public showDialog(title : string, message : string, componentRef : any, config? : NgbModalOptions) : Promise<any> {
        let dialogRef;
        let modalConfig = config?config: new modalOptions();
        dialogRef = this.dialog.open(componentRef,modalConfig);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef;
    }

}