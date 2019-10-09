const mongoose = require('mongoose');
// const Loc = mongoose.model('Location');
import { CartModel } from '../models/cart.models';
import { FlowerModel } from '../models/flower/flower.models';

export default {
    async makeCart(req, res, next) {
        try {
            const flowerId = String(req.params.flowerId);
            const userId = String(req.params.userId);
            if (!mongoose.Types.ObjectId.isValid(userId)) {
                return res.status(400).send('please enter a valid  id for user '); // They didn't send an object ID
            }

            if (!mongoose.Types.ObjectId.isValid(req.params.flowerId)) {
                return res.status(400).send('please enter a valid  id for flower '); // They didn't send an object ID
            }

            const flower = await FlowerModel.findById(flowerId);
            if (!flower) return res.status(404).send('flower not found');

            if (String(req.user._id) !== String(userId)) return res.status(403).send('you are not allowed to access .');

            let updateData = {
                $push: {
                    flowers: flowerId
                },
                $inc: {
                    totalPrice: +flower.price
                }
            }
            let Cart = await CartModel.findOneAndUpdate({ user: userId }, updateData, { upsert: true, new: true });
            res.send(Cart);
        } catch (error) {
            next(error);
        }
    },
    async getCart(req, res, next) {
        try {
            let userId = String(req.params.userId);

            if (!mongoose.Types.ObjectId.isValid(userId)) {
                return res.status(400).send('please enter a valid  id for user '); // They didn't send an object ID
            }

            const flower = await CartModel.find({ user: userId }).populate('flowers');
  
            if (String(req.user._id) !== String(userId)) return res.status(403).send('you are not allowed to access .');
           
            res.send(flower);
        } catch (error) {
            next(error);
        }
    },
    async deleteFlower(req, res, next) {
        try {
            let flowerId = String(req.params.flowerId);
            let userId = String(req.params.userId);

            if (!mongoose.Types.ObjectId.isValid(userId)) {
                return res.status(400).send('please enter a valid  id for user '); // They didn't send an object ID
            }

            if (!mongoose.Types.ObjectId.isValid(req.params.flowerId)) {
                return res.status(400).send('please enter a valid  id for flower '); // They didn't send an object ID
            }

            const flower = await FlowerModel.findById(flowerId);
            if (!flower) return res.status(404).send('flower not found');

            if (String(req.user._id) !== String(userId)) return res.status(403).send('you are not allowed to access .');


            let cartUser = await CartModel.findOne({ user: userId });
            //check if cartUser is exist

            const cartUserFlowersLength = cartUser.flowers.length;

            for (let i = 0; i < cartUserFlowersLength; i++) {
                if (String(cartUser.flowers[i]) === flowerId) {
                    cartUser.flowers.splice(i, 1);
                    break;
                }
            }

            if (cartUserFlowersLength === cartUser.flowers.length) {
                return res.send('flower not exist in your cart');
            }


            cartUser.totalPrice -= flower.price

            await cartUser.save();

            res.status(201).send(cartUser);

        } catch (error) {
            next(error)
        }
    }
}