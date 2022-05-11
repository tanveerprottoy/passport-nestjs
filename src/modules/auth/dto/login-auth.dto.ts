import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
    @IsNotEmpty()
    @ApiProperty()
    readonly phone: string;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;
}
