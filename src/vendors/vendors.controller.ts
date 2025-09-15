import { Controller, Get } from '@nestjs/common';

@Controller('vendors')
export class VendorsController {
    @Get()
    consultarVendors(){
        return"Aqui estaran todos lso vendors"
    }}
