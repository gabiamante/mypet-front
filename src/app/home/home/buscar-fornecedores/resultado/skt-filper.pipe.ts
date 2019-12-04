import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sktFilter'
})
export class SktFilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        console.log(JSON.stringify('pipe do xbla: ' + value));
        value = value.filter(function (search) {
            return search.Name.toLowerCase().indexOf(args.toLowerCase()) > -1;
        });
        return value;
    }

}