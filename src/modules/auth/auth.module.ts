import { Module } from '@nestjs/common';
import { JwtStrategy } from "../../core/auth-strategies/jwt-strategy";
import { JwtModule } from "@nestjs/jwt";
import JwtConfigService from "../../core/jwt/jwt-config.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        JwtModule.registerAsync({
            useClass: JwtConfigService
        }),
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        JwtStrategy
    ]
})
export class AuthModule { }
