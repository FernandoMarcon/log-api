import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const LogSchema = new Schema ({
				id: {
								type: String,
								required: 'Provide id'
				},
				date: {
								type: String,
								required: 'Provide date'
				},
				level: {
								type: String,
								required: 'Provide log level'
				},
				source: {
								type: String
				},
				msg:	{
								type: String,
								required: 'Provide log message'
				},
				date_received: {
								type: Date,
								default: Date.now
				}
});
