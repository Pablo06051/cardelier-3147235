import { Injectable } from '@nestjs/common';
import { CreateCarDto} from './dto/create.car.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarService {

    constructor(private Prisma: PrismaService) {}
    
    
    async create(newCar: CreateCarDto){

        return await this.Prisma.car.create({
            data:{
                plate: newCar.plate,
                release_date: new Date (newCar.release_date),
                is_avaliable: newCar.is_avaliable,
                price: newCar.price,
                brand_id: newCar.brand_id
            }

            
        })

    }
}
