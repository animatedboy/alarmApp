import{Pipe,PipeTransform} from '@angular/core'

@Pipe({ name: 'hour',  pure: false })
export class HourPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        if(value<=12){
            return value;
        }else{
            return value-12
        }
         
    }
}