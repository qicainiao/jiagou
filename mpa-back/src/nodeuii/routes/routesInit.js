import indexController from "./indexController.js"; 
const routesInit = {
    init(app,router) {
        app.use(router(_ => {
            _.get('/', indexController.indexAction());
            _.get('/index.html', indexController.indexAction());
            _.get('/index/test', indexController.testAction());
        }));
    }
}
export default routesInit;