import { IsBoolean, IsDate, isDate, IsDecimal, IsInt, IsNotEmpty, IsNotEmptyObject } from "class-validator"

export class CreateCarDto {
  @IsNotEmpty({
   message: 'la fecha de lanzamiento es obligatoria'
  })
  plate: string
  @IsNotEmpty({
   message: 'la fecha de lanzamiento es obligatoria'
  })
  release_date: Date

  @IsNotEmpty({
   message: 'la fecha de lanzamiento es obligatoria'
  })
  @IsBoolean({
    message: 'is_available debe ser booleano'
  })
  is_available: boolean 
  @IsNotEmpty({
   message: 'la fecha de lanzamiento es obligatoria'
  })
  @IsInt(
    {message: 'el precio debe ser un numero entero'}
  )
  price: number

  @IsNotEmpty({
   message: 'la fecha de lanzamiento es obligatoria'
  })
  @IsInt(
    {message: 'el id de la marca debe ser un numero entero'}
  )
  brand_id: number
}
