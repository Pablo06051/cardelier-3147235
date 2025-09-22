import { HttpException, Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarService {
    constructor(private prisma:PrismaService){}
    async create(newCar:CreateCarDto){
        //validacion existencia de la marca
let marca=await this.prisma.brand.findFirst({
    where:{id:newCar.brand_id}
})
if(!marca) throw new HttpException("la marca no existe",404)

        //validacion logica de negocio
        //la placa no se repita
        let existe=await this.prisma.car.findFirst({
            where:{plate:newCar.plate}
        })
        if(existe) throw new HttpException("la placa ya existe",400)
        else{return await this.prisma.car.create({
            data:{
                plate:newCar.plate,
                release_date: new Date(newCar.release_date),
                is_avaliable: newCar.is_available ,
                price: newCar.price,
                brand:{connect:{id:newCar.brand_id}
                }
            }
        })}
    }
async findByid(id:number){
    // 1. Buscar el carro por id
    let existe = await this.prisma.car.findFirst({
        where: { id: id }
    })
    
    // 2. Si no existe lanzar una http exception
    if(!existe) throw new HttpException("el carro no existe", 404)
    
    // 3. Si existe devolver el carro (corregido)
    return {
        success: true,
        data: existe
    }
}
    async findAll(){
        let carros =await this.prisma.car.findMany({
            orderBy:{'plate':'asc'}
        })
    if(carros.length===0) throw new HttpException("no hay carros",404)
    return carros}
    async delete(id:number){
        let existe =await this.prisma.car.findFirst({
            where:{id:id}
        })
        if(!existe) throw new HttpException("el carro no existe",404)
            else{
                await this.prisma.car.delete({
                    where:{id:id}
                })
            return {success:true, message:"el carro fue eliminado"}
    }
}
}