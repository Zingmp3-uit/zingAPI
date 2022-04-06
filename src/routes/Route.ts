import { Router } from 'express';
import TugoController from '../controllers/tugoController';
import { verifyToken } from '../middlewares/auth.mdw';
import apicache from 'apicache';
let cache = apicache.middleware;
class Routes {
    router = Router();
    tugoController = new TugoController()
    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/')
            .get(this.tugoController.home);
        this.router.route('/insert')
            .post(this.tugoController.insertRow);
        this.router.route('/delete')
            .delete(this.tugoController.deleteRow);
        this.router.route('/get/tour')
            .get(this.tugoController.getTour);
       
    }
}

export default new Routes().router;