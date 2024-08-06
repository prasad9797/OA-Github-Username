import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData',
})
export class filterDataPipe implements PipeTransform {
  transform(value: any, filterTerm?: any): any {
    if (!value || !filterTerm) return value;

    filterTerm = filterTerm.toLowerCase();
    return value.filter((val) =>
      Object.keys(val).some((key) =>
        String(val[key]).toLowerCase().includes(filterTerm)
      )
    );
  }
}
