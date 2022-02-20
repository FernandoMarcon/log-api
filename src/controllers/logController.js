import mongoose from 'mongoose';
import { LogSchema } from '../models/logModel';

const Log = mongoose.model('Log', LogSchema);

export const addNewLog = (req, res) => {
				let newLog = new Log(req.body);

				newLog.save((err, log) => {
								if (err) {
												res.send(err);
								}
								console.log(log.id);
												res.json({ 
																msg: "success",
																log_id: log.id
												});
				})
}


