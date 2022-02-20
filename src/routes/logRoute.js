import { addNewLog } from '../controllers/logController';

const routes = (app) => {
	app.route('/log')
				.post( addNewLog );
}

export default routes;
