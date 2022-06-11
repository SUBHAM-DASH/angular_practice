import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fil'
})
export class FilterPipe implements PipeTransform {
  data:any;
  transform(value: any, searchTerm: any): any {
    if(value.length == 0){
      return value;
    }
    console.log(value);

    return value.filter((search:any)=>{
      if(search.barcode){
        this.data= search.barcode.indexOf(searchTerm) > -1
      }
      // if(search.album != 0){
      //   console.log("sdd");

      //   this.data= search.album.indexOf(searchTerm) > -1
      // }
      // if(search.artist){
      //   console.log("gbhh");
      //   this.data= search.artist.indexOf(searchTerm) > -1
      // }
      // if(search.price){
      //   this.data= search.price.indexOf(searchTerm) > -1
      // }
      return this.data;
    })
  }

}
