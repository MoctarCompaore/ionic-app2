import { Categorie } from "./categorie";

export class Product{
    id?:number;
    libelle?:String;
    image?:String
    description?:String;
    colors?:Color[];
    sizes?:Size[];
    price?:number;
    priceBefore?:number; // prix avant la promotion
    categorie?:Categorie;
}

export class Color{
    id?:number;
    libelle?:String;
    value?:String; ///#en hexadecimal #fff #eeee
}
export class Size{
    id?:number;
    libelle?:String;
   value?:String;
}