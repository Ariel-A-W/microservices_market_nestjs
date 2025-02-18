import { Injectable } from '@nestjs/common';
import { Product } from './product';

@Injectable()
export class AppService { 
  // Importante: Datos hardcoedeados pero bien podrían tener  
  // orígen desde una base de datos.
  private products: Array<Product> = new Array<Product>(
    { id: 1, nombre: 'Martillo', marca: 'Harrison Tools', precio: 150.25 },
    { id: 2, nombre: 'Pala', marca: 'Kats SA', precio: 347.95 }, 
    { id: 3, nombre: 'Balde Plástico', marca: 'Harrison Tools', precio: 85.44 },
    { id: 4, nombre: 'Pico', marca: 'Harrison Tools', precio: 780.35 },
    { id: 5, nombre: 'Masa', marca: 'Harrison Tools', precio: 196.12 },
    { id: 6, nombre: 'Metro Madera', marca: 'Metrics Company SRL', precio: 89.78 },
    { id: 7, nombre: 'Metro Cinta', marca: 'Metrics Company SRL', precio: 123.85 },
    { id: 8, nombre: 'Plomada', marca: 'Masons Products Company', precio: 88.78 },
    { id: 9, nombre: 'Trompo', marca: 'Harrison Tools', precio: 1850.00 },
    { id: 10, nombre: 'Serrucho', marca: 'Andersons Company', precio: 163.18 },    
  ); 

  getProducts() {
    return this.products;
  }

  getProductById(id: number) { 
    try 
    {
      var pro = this.products.find((p) => p.id === Number(id));

      if (!pro) return {}

      return pro;
    } catch {
      return {}
    }    
  }
}
