import { Router } from 'express';
import ZingController from '../controllers/zingController';
import apicache from 'apicache';
let cache = apicache.middleware;
class Routes {
    router = Router();
    zingController = new ZingController()
    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/top-100')
            .get(this.zingController.getTop100);
        this.router.route('/chart-home')
            .get(this.zingController.getChartHome);
        this.router.route('/new-release-chart')
            .get(this.zingController.getNewReleaseChart);
        // 1 param (:id)        
        this.router.route('/song')
            .get(this.zingController.getSong);
        this.router.route('/detail-playlist')
            .get(this.zingController.getDetailPlaylist);
        this.router.route('/home')
            .get(this.zingController.getHome);
        this.router.route('/song-info')
            .get(this.zingController.getInfoSong);
        this.router.route('/artist')
            .get(this.zingController.getArtist);
        this.router.route('/lyric')
            .get(this.zingController.getLyric);
        this.router.route('/search')
            .get(this.zingController.search);
        this.router.route('/artist')
            .get(this.zingController.getArtist);
        this.router.route('/category-mv')
            .get(this.zingController.getCategoryMV);
        this.router.route('/video-mv')
            .get(this.zingController.getVideo);
        // 3 params
        this.router.route('/list-mv')
            .get(this.zingController.getListMV);
    }
}

export default new Routes().router;