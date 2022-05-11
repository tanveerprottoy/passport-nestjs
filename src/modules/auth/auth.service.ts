import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from "./dto/login-auth.dto";

@Injectable()
export class AuthService {

    async callbackFacebook(
        dto: any
    ) {
        return dto;
    }

    async callbackGoogle(
        dto: any
    ) {
        return dto;
    }
}
