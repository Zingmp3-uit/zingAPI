import { Request, Response, NextFunction } from 'express';
import config from '../config'
import fs from 'fs';

import { Base64 } from 'js-base64';

import { v4 as uuidv4 } from 'uuid';



const {ZingMp3} = require("zingmp3-api-full")

export default class zingController {
    // not params
    getTop100(req: Request, res: any, next: NextFunction) {
        ZingMp3.getTop100()
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })
    }
    async getChartHome(req: Request, res: any, next: NextFunction) {
        ZingMp3.getChartHome()
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })
    }
    async getNewReleaseChart(req: Request, res: any, next: NextFunction) {
        ZingMp3.getNewReleaseChart()
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })
    }
    // 1 params
    async getSong(req: Request, res: any, next: NextFunction) {
        if (!req.query.id) {
            return res.status(500).send({ mess: 'Lỗi định dạng, xem lại id' });
        }
        let id = req.query.id;

        ZingMp3.getSong(id)
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })
    }
    async getDetailPlaylist(req: Request, res: any, next: NextFunction) {
        if (!req.query.id) {
            return res.status(500).send({ mess: 'Lỗi định dạng, xem lại id' });
        }
        let id = req.query.id;

        ZingMp3.getDetailPlaylist(id)
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })

    }
    async getHome(req: Request, res: any, next: NextFunction) {
        if (!req.query.id) {
            return res.status(500).send({ mess: 'Lỗi định dạng, xem lại id' });
        }
        let id = req.query.id;

        ZingMp3.getHome(id)
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })
    }
    async getInfoSong(req: Request, res: any, next: NextFunction) {
        if (!req.query.id) {
            return res.status(500).send({ mess: 'Lỗi định dạng, xem lại id' });
        }
        let id = req.query.id;

        ZingMp3.getInfoSong(id)
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })

    }
    async getArtist(req: Request, res: any, next: NextFunction) {
        if (!req.query.name) {
            return res.status(500).send({ mess: 'Lỗi định dạng, xem lại name' });
        }
        let name = req.query.name;

        ZingMp3.getArtist(name)
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })

    }
    async getLyric(req: Request, res: any, next: NextFunction) {
        if (!req.query.id) {
            return res.status(500).send({ mess: 'Lỗi định dạng, xem lại id' });
        }
        let id = req.query.id;

        ZingMp3.getLyric(id)
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })
    }
    async search(req: Request, res: any, next: NextFunction) {
        if (!req.query.name) {
            return res.status(500).send({ mess: 'Lỗi định dạng, xem lại name' });
        }
        let name = req.query.name;

        ZingMp3.search(name)
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })
    }
    async getCategoryMV(req: Request, res: any, next: NextFunction) {
        if (!req.query.id) {
            return res.status(500).send({ mess: 'Lỗi định dạng, xem lại id' });
        }
        let id = req.query.id;

        ZingMp3.getCategoryMV(id)
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })

    }
    async getVideo(req: Request, res: any, next: NextFunction) {
        if (!req.query.id) {
            return res.status(500).send({ mess: 'Lỗi định dạng, xem lại id' });
        }
        let id = req.query.id;

        ZingMp3.getVideo(id)
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })
    }
    // 3 params
    async getListMV(req: Request, res: any, next: NextFunction) {
        if (!req.query.id || !req.query.page || !req.query.count) {
            return res.status(500).send({ mess: 'Lỗi định dạng, xem lại name' });
        }
        let id = req.query.id;
        let page = req.query.page;
        let count = req.query.count;

        ZingMp3.getListMV(id, page, count)
            .then((data) => {
                console.log(data)
                return res.status(200).send({ data });
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ err });
            })
    }
}

function handleError(res, data) {
    if (data == 0)
        return res.status(200).send({ code: '00', desc: 'success' });
    return res.status(400).send({ code: '01', desc: 'fail' });
}







