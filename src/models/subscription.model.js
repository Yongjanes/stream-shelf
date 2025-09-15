import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    subscriber: {
        type: mongoose.Schema.Types.ObjectId, // who is subscribing
        ref: "Users",

    },
    channel: {
            type: mongoose.Schema.Types.ObjectId, // one to whom 'subscriber' is subscribing
            ref: "User"
    }
}, {
    timestamps: true
})

export const Subscription = mongoose.model("subscription", subscriptionSchema)