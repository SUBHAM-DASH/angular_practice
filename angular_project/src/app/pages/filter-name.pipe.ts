import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: any, searchTeam: any): any {
    return value.filter((search:any)=>{
      return search.album.indexOf(searchTeam) > -1;
    })
  }

}
