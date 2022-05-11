import { ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Constants } from "../../utils/constants";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {

    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }

    handleRequest(err: any, entity: any, info: any) {
        if(err || !entity) {
            throw err || new HttpException(
                Constants.UNAUTH_REQ,
                HttpStatus.UNAUTHORIZED
            );
        }
        return entity;
    }
}