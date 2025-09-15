import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('User')
export class UserController {
 
  constructor(private readonly userService: UserService) {} 

  @Post()
  create(@Body() body){
    return this.userService.create(body);
  }

  @Get()
  findAll() {
    return this.userService.findAll(); ;
  }
//Consultar un resource por id 
//una brand
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
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
                  userService
                  .remove(+id)
    }
  }
}
