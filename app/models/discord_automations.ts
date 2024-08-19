import mongoose, { Schema } from 'mongoose';

const item = new Schema({
    user: { type: String, required: true },
    
    automationName: { type: String, required: true },
    automationType: { type: String, required: true },
    
    channels: { type: Array, default: [] },
    
    timesUsed: { type: Number, default: 0 },
    lastUsed: { type: Date, default: null },

    isRunning: { type: Boolean, default: false }
});

let modeledFix = mongoose.models.DiscordAutomation

if (!modeledFix) {
    modeledFix = mongoose.model("DiscordAutomation", item)
    modeledFix.createIndexes()
}

const DiscordAutomation = modeledFix;

export { DiscordAutomation };