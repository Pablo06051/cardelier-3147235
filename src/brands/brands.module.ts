import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CarService } from './car.service';
import { CarController } from './car.controller';


@Module({
  imports: [PrismaModule],
  controllers: [BrandsController, CarController],
  providers: [BrandsService, CarService],

})
export class BrandsModule {}
