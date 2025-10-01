import mongoose from 'mongoose';

const OrderUserSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    brokerOrderId: {
        type: String
    },
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
    }
},
    {
        timestamps: true,
    }
);


const OrderUser = mongoose.model('OrderUser', OrderUserSchema);

export default OrderUser;
