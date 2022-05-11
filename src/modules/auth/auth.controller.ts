import { Controller, Post, Body, Res, UseGuards, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { FacebookAuthGuard } from "../../core/guards/facebook-auth.guard";
import { Constants } from "../../utils/constants";
import { ResponseUtils } from "../../utils/response.utils";
import { AuthService } from "./auth.service";
import { LoginAuthDto } from "./dto/login-auth.dto";

@Controller({
    path: Constants.AUTH,
    version: Constants.API_VERSION_1
})
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post("/login-facebook")
    @UseGuards(FacebookAuthGuard)
    async loginFacebook(
        @Body() dto: LoginAuthDto,
        @Res() response: Response
    ) {
        return HttpStatus.OK;
        /* return ResponseUtils.respond(
            ResponseUtils.buildData(
                await this.authService.login(dto)
            ),
            Constants.HTTP_200,
            response
        ); */
    }

    @Post("/callback-facebook")
    async callbackFacebook(
        @Body() dto: any,
        @Res() response: Response
    ) {
        return ResponseUtils.respond(
            ResponseUtils.buildData(
                await this.authService.callbackFacebook(dto)
            ),
            HttpStatus.OK,
            response
        );
    }

    @Post("/login-google")
    @UseGuards(FacebookAuthGuard)
    async loginGoogle(
        @Body() dto: LoginAuthDto,
        @Res() response: Response
    ) {
        return HttpStatus.OK;
        /* return ResponseUtils.respond(
            ResponseUtils.buildData(
                await this.authService.login(dto)
            ),
            Constants.HTTP_200,
            response
        ); */
    }

    @Post("/callback-google")
    async callbackGoogle(
        @Body() dto: any,
        @Res() response: Response
    ) {
        return ResponseUtils.respond(
            ResponseUtils.buildData(
                await this.authService.callbackGoogle(dto)
            ),
            HttpStatus.OK,
            response
        );
    }
}
