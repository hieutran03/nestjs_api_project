import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";

@Injectable()
export class AuthService{
  constructor(private usersService: UsersService){}

  async signup(email: string, password: string){
    //See if email in use
    const users = await this.usersService.find(email);
    if(users.length){
      throw new BadRequestException('Email in use');
    }

    
    //Hash the user password

    //Create a new user and save it

    //Return the new user
  }

  signin(){

  }

}