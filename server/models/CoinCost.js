const mongoose = require("mongoose");

// Define the Profile schema
const coinCostSchema = new mongoose.Schema({
	costArray: [{
		type: Number,
        default: 10,
        min: 0,
	}],
    CurrentCost: {
		type: Number,
        default: 10,
        min: 0,
	},
    totalCoins: {
        type: Number,
        default:10000,
        min: 0,
    }
});

// Export the Profile model
module.exports = mongoose.model("CoinCost", coinCostSchema);
