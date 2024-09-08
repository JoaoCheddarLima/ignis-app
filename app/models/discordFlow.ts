import mongoose, { Schema } from 'mongoose';

const item = new Schema({
    user: { type: String, required: true },
    
    automationName: { type: String, required: true, unique: true },
    automationType: { type: String, required: true },
    
    channels: { type: Array, default: [] },
    
    timesUsed: { type: Number, default: 0 },
    lastUsed: { type: Date, default: null },

    isRunning: { type: Boolean, default: false }
});

let modeledFix = mongoose.models.DiscordFlow

if (!modeledFix) {
    modeledFix = mongoose.model("DiscordFlow", item)
    modeledFix.createIndexes()
}

const DiscordFlow = modeledFix;

export { DiscordFlow };