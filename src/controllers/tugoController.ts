import { Request, Response, NextFunction } from 'express';
import config from '../config'
import fs from 'fs';
import UserModel from '../models/user.model';
import { Base64 } from 'js-base64';

import { v4 as uuidv4 } from 'uuid';
import { OAuth2Client } from 'google-auth-library';
import { generateToken } from '../middlewares/auth.mdw';

const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);
const db = new UserModel()

export default class tugoController {

    home(req: Request, res: any, next: NextFunction) {
        res.send('nguyentrunghieu hello')
    }
    async insertRow(req: Request, res: any, next: NextFunction) {
        await db.insertRow(req.body.data, req.body.nameTable)
            .then(data => {
                res.status(200).send({ code: '00', desc: 'success' });
            })
            .catch(err => {
                res.status(400).send({ code: '01', desc: 'fail', mess: err });
            })
        // handleError(res, a)
    }
    async deleteRow(req: Request, res: any, next: NextFunction) {
        let { nameTable, nameRow, contentRow } = req.body;
        await db.deleteRow(nameTable, nameRow, contentRow);
        return res.status(200).send({ code: '00', desc: 'success' });
    }
    async getTour(req: Request, res: any, next: NextFunction) {
        await db.getData('tour').then(data => {
            return res.status(200).send({ code: '00', desc: 'success', data });
        });
    }
}

function handleError(res, data) {
    if (data == 0)
        return res.status(200).send({ code: '00', desc: 'success' });
    return res.status(400).send({ code: '01', desc: 'fail' });
}







