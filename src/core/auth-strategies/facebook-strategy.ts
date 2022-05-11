import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile } from "passport-facebook";
import { Strategy } from "passport-jwt";
import { Constants } from "../../utils/constants";

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            clientID: process.env.FB_CLIENT_ID,
            clientSecret: process.env.FB_CLIENT_SECRET,
            callbackURL: Constants.FB_CALLBACK_URL,
            scope: "email",
            profileFields: [
                "emails",
                "name",
                "photos"
            ],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (err: any, user: any, info?: any) => void
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