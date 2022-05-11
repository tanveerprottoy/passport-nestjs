import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile } from "passport-facebook";
import { VerifyCallback } from "passport-google-oauth20";
import { Strategy } from "passport-jwt";
import { Constants } from "../../utils/constants";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: Constants.GOOGLE_CALLBACK_URL,
            scope: [
                "email",
                "profile"
            ],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback
    ): Promise<any> {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            name: name.givenName,
            photo: photos[0],
        };
        const payload = {
            user,
            accessToken,
        };
        done(null, payload);
    }
}