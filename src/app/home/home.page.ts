import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie';
import { Product } from '../models/product';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { ResponseUserRegister } from '../models/ResponseUserRegister';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listeDesCategories: Categorie[] = [
    {
      id: 1,
      libelle: 'Casquette',
      image: 'assets/icon/casquette-96.png',
      description: '',
    },
    {
      id: 2,
      libelle: 'Ceinture',
      image: 'assets/icon/ceinture-94.png',
      description: '',
    },
    {
      id: 3,
      libelle: 'Chaussure',
      image: 'assets/icon/chaussure-80.png',
      description: '',
    },
    {
      id: 4,
      libelle: 'Pull-Over',
      image: 'assets/icon/tracksuit-96.png',
      description: '',
    },
   
    {
      id: 6,
      libelle: 'Robe',
      image: 'assets/icon/robe-80.png',
      description: '',
    },
    {
      id: 7,
      libelle: 'Pantalon',
      image: 'assets/icon/pantalons-100.png',
      description: '',
    },
   
  ];

  listeDesProduits: Product[] = [
    {
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
    },
    {
      id: 2,
      libelle: 'TShirt pour hommes',
      image:
        'https://www.freepnglogos.com/uploads/t-shirt-png/t-shirt-png-printed-shirts-south-africa-20.png',
      description: '',
      colors: [
        { id: 1, value: '#0000', libelle: 'Noir' },
        { id: 2, value: '#3880ff;', libelle: 'Bleu' },
        { id: 3, value: '#ffca22', libelle: 'Jaune' },
        { id: 3, value: '#ffff', libelle: 'Blanc' },
      ],
      sizes: [
        { id: 1, value: 'S', libelle: '' },
        { id: 2, value: 'M', libelle: '' },
        { id: 3, value: 'L', libelle: '' },
      ],
      price: 8000,
      priceBefore: 8500,
      categorie: {
        id: 9,
        libelle: 'Tshirt',
        image: '',
        description: '',
      },
    },
    {
      id: 3,
      libelle: 'Ceintures  pour hommes',
      image:
        'https://www.freepnglogos.com/uploads/belts-png/casual-dress-belts-for-men-28.png',
      description: '',

      sizes: [
        { id: 1, value: 'S', libelle: '' },
        { id: 2, value: 'M', libelle: '' },
        { id: 3, value: 'L', libelle: '' },
      ],
      price: 7000,
      priceBefore: 8000,
      categorie: {
        id: 2,
        libelle: 'Ceinture',
        image: 'assets/icon/ceinture-94.png',
        description: '',
      },
    },
    {
      id: 4,
      libelle: 'Chaussures  pour femmes',
      image:
        'https://www.freepnglogos.com/uploads/women-shoes-png/download-women-shoes-png-image-png-image-pngimg-2.png',
      description: '',

      sizes: [
        { id: 1, value: 'S', libelle: '' },
        { id: 2, value: 'M', libelle: '' },
        { id: 3, value: 'L', libelle: '' },
      ],
      price: 15000,
      priceBefore: 20000,
      categorie: {
        id: 3,
        libelle: 'Chaussure',
        image: 'assets/icon/chaussure-80.png',
        description: '',
      },
    },
  ];

  user!: User;
  errorMessage = '';
  constructor(
    private userService: UserService,
    private productService: ProductService,
    private router: Router,
    private storage : StorageService //on injecte le service de  storage
  ) {}
  ngOnInit(): void {
    this.productService.getProduits().subscribe((donnees) => {
      if (donnees.hasOwnProperty('data')) {
        this.listeDesProduits = donnees.data!;
        //ici on stocke en local
        this.storage.stocker("produits",this.listeDesProduits)
      }
    },
    (errors)=>{
      //on recuper du local storage
      this.storage.recuperer('produits').then((data)=>{ 
        console.log(data);
        if(data != undefined && data.length>0) {
          this.listeDesProduits=data;

        }
      })
    });
    this.user = new User();
  }

  onSubmit() {
    this.userService.inscription(this.user).subscribe(
      (response: ResponseUserRegister) => {
        if (response.status) {
          // L'inscription a réussi, faites ce que vous devez faire ici
          console.log('Inscription réussie !');
        } else {
          // L'inscription a échoué en raison d'erreurs de validation
          this.errorMessage = response.message!;
          console.log('Erreurs de validation :', response.errors);
        }
      },
      (error) => {
        // Gérer les erreurs de requête
        console.error('Erreur de requête :', error);
        this.errorMessage = error.error.message;
        alert(JSON.stringify(error.error.message));
      }
    );
  }

  voirDetails(id:number) {
    this.router.navigateByUrl('product-details/'+id);
  }
}
