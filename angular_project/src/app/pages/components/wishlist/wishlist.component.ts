import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  @Input() field:any;
  constructor() { }

  ngOnInit(): void {

  }
  onClick(value:any){
    this.field.iswishlist = true;
  }
}
