import OrderUser from "../../model/OrderUserModel.js"
import Order from "../../model/OrderModel.js"
import { ObjectId } from 'mongodb';
const updateOrder = async (orderData) => {
    try {
        const {Data, Type} = orderData
        if (Type !== "order_alert") {
            console.log("Do not update order")
            return false
        }
        if (!Data?.orderNo) {
            console.log("order id is missing ")
            return false
        }
        const updateCondition = { brokerOrderId:Data.orderNo, securityId:Data.securityId }
        const updateData = { 
            orderStatus:Data.status, 
            quantity:Data.quantity,
            price:Data.price
        }
        const updatedOrder = await OrderUser.findOneAndUpdate(updateCondition,updateData,
            { new: true }
        );

        // if user order is updated then update the main order table
        if(updatedOrder){
            // check if order is not updated already
            await Order.updateOne(
                { _id: updatedOrder.order_id }, 
                { $set: { orderStatus: Data.status } }
              )
        }

    } catch (error) {
        console.error('Error updating order:', error);
    }
};

export {
    updateOrder,
};