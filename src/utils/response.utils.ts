import { Response } from "express"

export class ResponseUtils {
    
    static buildData(
        data: any
    ): any {
        return {
            data: data
        };
    }

    static respond(
        payload: any,
        status: number,
        response: Response
    ): Response {
        return response.status(status).send(payload);
    }
}