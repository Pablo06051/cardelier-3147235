import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    //endpoint: punto de entrada
    //que otro proyecto va a utulizar 
    // va a recibir request http de aquel proyecto
    //se programa con una funcion
    //con sintaxis de lenguaje de programacion
    @Get()
    consultarCostumers(){
        return "aqui se mostraran todos lso customers"
}

    @Post()
        crearCustomers(){
            return "Aqui se va un customer"

        }}