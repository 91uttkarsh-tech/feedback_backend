import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    transactionType:{
        type: String
    },
    orderStatus:{
        type: String
    },
    tradingSymbol :{
        type: String
    },
    customSymbol :{
        type: String
    },    
    securityId :{
        type: String
    },
    drvExpiryDate :{
        type: String
    },
    drvOptionType :{
        type: String
    },
    drvStrikePrice :{
        type: String
    },
    quantity :{
        type: Number
    },
    price :{
        type: Number
    },
    triggerPrice :{
        type: Number
    },
    orderType :{
        type: String
    },
    status: {
        type: String,
        default:'active'
    },
    deletedAt : {
        type: Date,
        default: null
    }
},
    {
        timestamps: true,
    }
);


const Order = mongoose.model('Order', OrderSchema);

export default Order;
