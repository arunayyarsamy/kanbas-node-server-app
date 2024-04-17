import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
        id: { type: String, required: true, },
        name: { type: String, required: true },
        description: { type: String, required: true },
        course: { type: String, required: true },
        lessons: [
            {
                id: { type: String, required: true },
                name: { type: String, required: true },
                description: { type: String, required: true },
                module: { type: String, required: true }
            }
        ]
    }, 
    { collection: "modules" }
);

export default moduleSchema;