import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  product: Product = {
    id: 1,
    libelle: 'Jeans barrés pour hommes',
    image:
      'https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png',
    description: '',
    colors: [
      { id: 1, value: '#0000', libelle: 'Noir' },
      { id: 2, value: '#3880ff;', libelle: 'Bleu' },
    ],
    sizes: [
      { id: 1, value: 'S', libelle: 'Petit' },
      { id: 2, value: 'M', libelle: 'Moyen' },
      { id: 3, value: 'L', libelle: 'Large' },
    ],
    price: 11000,
    priceBefore: 13500,
    categorie: {
      id: 7,
      libelle: 'Pantalon',
      image: 'assets/icon/pantalons-100.png',
      description: '',
    },
  }; 

  constructor(private activedRoute : ActivatedRoute) { }

  ngOnInit() {
   
    const id = this.activedRoute.snapshot.paramMap.get('tene'); 
    //alert(id);
    // il reste à aller les données correspondante  au  produit avec le id  recupéré
   // this.product.id = Number.parseInt(this.activedRoute.snapshot.paramMap.get('id')!);
  }

}
