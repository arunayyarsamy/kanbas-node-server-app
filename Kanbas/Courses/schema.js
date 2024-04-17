import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
        id: { type: String, unique: true },
        name: { type: String, required: true },
        number: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        department: { type: String },
        credits: { type: Number },
        description: { type: String },
    }, 
    { collection: 'courses' }
);

export default courseSchema;