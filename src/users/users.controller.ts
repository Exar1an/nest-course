import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.model';


@ApiTags('Users Controllers.')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @ApiOperation({summary: 'Create user.'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get all users.'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }


}
