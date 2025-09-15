import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';


@Controller('brands')
export class BrandsController {
 
  constructor(private readonly brandsService: BrandsService) {} 

  //inyeccion de dependencias:
  //inyectar un componente para uso de otro
  //sin tener que instanciarlo
 

  @Post()
  create(@Body() newbrand: CreateBrandDto){
    return this.brandsService.create(newbrand)
  }

  @Get()
  findAll() {
    return this.brandsService.findAll(); 
  }
//Consultar un resource por id 
//una brand
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return "Aqui se actualizara" +
          "la brand con id" + id
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      "success" : true,
      "mensaje" : this.
                  brandsService
                  .remove(+id)
    }
  }
}
