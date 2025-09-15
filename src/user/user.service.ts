import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
    private user: User[] = [
        {
            id: 1,
            name: "Lorena",
            email: "lore@gmail.com",
            password: "123456",
            typeUser: "Estudiante",
            numberPhone: "123456789",
        },
        {
            id: 2,
            name: "Julian",
            email: "Jul@gmail.com",
            password: "123456",
            typeUser: "Docente",
            numberPhone: "987654321",
        }
    ];
    

     findAll() {
        return this.user;
    }

    //buscar en la brand por id
    findOne(id: number) {


        let marca = this.user.find(function(user){
            //si la encuentro la retorno
            return user.id === id;
        })
        
        return marca;

     }
        //actualizar una brand//añadir al arreglo brands
        create(body) {
            this.user.push(body)
            return body;
        }

        //eliminar un elemento de arreglo de brands por id
        remove(id: number) {
            //filter : es para retornar un nuevo arreglo
            //elementos que cumplan con la condicional
            this.user = this.user.filter(
                function(brand){
                    return brand.id !== id;
                }
            )
            return "Elemento eliminado"
        }

 }