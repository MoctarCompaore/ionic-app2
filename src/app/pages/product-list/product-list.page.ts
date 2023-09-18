import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  uneListeDeProduits: Product[] = [
    {
      id: 1,
      libelle: 'jean',
      description: '-',
      price: 20000,
      image:
        'https://img01.ztat.net/article/spp-media-p1/f71a13f8e7e34759acd52beda259bc57/0b143ce99da2405bb0e9b825bcbf5837.jpg?imwidth=762&filter=packshot',
    },
    
    {
      id: 2,
      libelle: 'Robe',
      description: '-',
      price: 20000,
      image:
        'https://img01.ztat.net/article/spp-media-p1/f71a13f8e7e34759acd52beda259bc57/0b143ce99da2405bb0e9b825bcbf5837.jpg?imwidth=762&filter=packshot',
    },
    {
      id: 2,
      libelle: 'Robe',
      description: '-',
      price: 20000,
      image:
        'https://img01.ztat.net/article/spp-media-p1/f71a13f8e7e34759acd52beda259bc57/0b143ce99da2405bb0e9b825bcbf5837.jpg?imwidth=762&filter=packshot',
    },
    {
      id: 2,
      libelle: 'Robe',
      description: '-',
      price: 20000,
      image:'https://img01.ztat.net/article/spp-media-p1/f71a13f8e7e34759acd52beda259bc57/0b143ce99da2405bb0e9b825bcbf5837.jpg?imwidth=762&filter=packshot',
    },
    {
      id: 2,
      libelle: 'Robe',
      description: '-',
      price: 20000,
      image:
        'https://img01.ztat.net/article/spp-media-p1/f71a13f8e7e34759acd52beda259bc57/0b143ce99da2405bb0e9b825bcbf5837.jpg?imwidth=762&filter=packshot',
    },
    {
      id: 2,
      libelle: 'Robe',
      description: '-',
      price: 20000,
      image:
        'https://img01.ztat.net/article/spp-media-p1/f71a13f8e7e34759acd52beda259bc57/0b143ce99da2405bb0e9b825bcbf5837.jpg?imwidth=762&filter=packshot',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
