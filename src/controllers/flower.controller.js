import { FlowerModel } from '../models/flower/flower.models';
import {insertFlowerSchema , validateOnUpdateFlowerSchema} from '../models/flower/flower.schema';
import {ShopModel} from '../models/shop/shop.models';
const mongoose = require('mongoose');
import { validate } from '../services/validator.service';
import {urlConf} from './../utils/urlUpload';

export default {
    async findAllFowers(req , res , next){
     
        // const flowers = await FlowerModel.find().populate('shop');
        const flowers = await FlowerModel.find().sort({sponsored : -1 });
        res.send(flowers);
    },
    async findFlowers( req , res , next){
        try {
            let pageNumber = Number(req.query.pageNumber) || 1;
            let pageSize = Number(req.query.pageSize) || 5;

            const flowers = await FlowerModel.find().sort({sponsored: -1})
            .skip((pageNumber - 1 ) * pageSize )
            .limit(Number(pageSize));

            const countFlowers = await FlowerModel.count();
            let pageCount = Math.ceil(countFlowers / pageSize)
            res.send({data: flowers , pageNumber , pageSize , totalCount: countFlowers , pageCount  });

        } catch (error) {
            next(error);
        }
    },
    async insertFlower(req, res , next) {
        let { shopId } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.shopId)) {
                return res.status(400).send('to  insert flower please enter a valid  id '); // They didn't send an object ID
            }
            const shop = await ShopModel.findById(shopId);
            if (!shop) return res.status(400).send('shop not found');


            let userJwt = String(req.user._id);
            let shopUserId = String(shop.user);

            if(userJwt !== shopUserId)
                return res.status(403).send('you have not the permission to do this operation ')

            if (!req.file) {
                res.status(400).send('file is required !');
            }
            validate(req.body, insertFlowerSchema)
            let flower = await FlowerModel.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                flowerImage: `${urlConf}/uploads/` + req.file.originalname,
                shop: shopId
            });
            res.status(201).send(flower);
            if(shop) {
                shop.totalFlowersCount += 1;
            }
            await shop.save();
            
        } catch (error) {
            next(error);
        }
    },
    async findFlowersByShopId(req , res , next){
        let { shopId } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.shopId)) {
                return res.status(400).send('to get flowers by shop id please enter a valid  id '); // They didn't send an object ID
            }
            const shop = await ShopModel.findById(shopId);
            if (!shop) return res.status(400).send('shop not found');
            const flowers = await FlowerModel.find({shop : shopId});
         
            res.status(200).send(flowers);

        } catch (error) {
            next(error)
        }
    },
    async findFlowerById(req , res , next) {
        let { shopId , flowerId } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.shopId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }
            if (!mongoose.Types.ObjectId.isValid(req.params.flowerId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }

           

            const shop = await ShopModel.findById(shopId);
            if (!shop) return res.status(400).send('shop not found');

            const flower = await FlowerModel.findById(flowerId);
            if(!flower) return res.status(400).send('flower not found'); 

            if(String(flower.shop) !== String(shopId)) return res.status(403).send('you are not allowed to access this flower');

            res.send(flower);

        } catch (error) {
            next(error);
        }
    },
    async updateFlower(req , res , next){
        let { shopId , flowerId } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.shopId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }
            if (!mongoose.Types.ObjectId.isValid(req.params.flowerId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }

            validate(req.body, validateOnUpdateFlowerSchema);

            const shop = await ShopModel.findById(shopId);
            if (!shop) return res.status(400).send('shop not found');

            const flower = await FlowerModel.findById(flowerId);
            if(!flower) return res.status(400).send('flower not found'); 


            let userJwt = String(req.user._id);
            let shopUserId = String(shop.user);

            if(userJwt !== shopUserId)
                return res.status(403).send('you have not the permission to do this operation ')

            if(String(flower.shop) !== String(shopId)) return res.status(403).send('you are not allowed to access this flower');

            if (req.body.name) {
                flower.name = req.body.name
            }

            if (req.file) {
                flower.flowerImage = `${urlConf}/uploads/` + req.file.originalname
            }

            await flower.save();

            res.send(flower);
        } catch (error) {
            next(error);
        }
    },
    async deleteFlower(req , res , next){
        let { shopId , flowerId } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(shopId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }
            if (!mongoose.Types.ObjectId.isValid(flowerId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }

            const shop = await ShopModel.findById(shopId);
            if (!shop) return res.status(400).send('shop not found');
            
            const flower = await FlowerModel.findById(flowerId);
            if(!flower) return res.status(400).send('flower not found'); 


            let userJwt = String(req.user._id);
            let shopUserId = String(shop.user);

            if(userJwt !== shopUserId)
                return res.status(403).send('you have not the permission to do this operation ')

            if(String(flower.shop) !== String(shopId)) return res.status(403).send('you are not allowed to access this flower');

            if(String(flower.shop) == String(shopId)) {
                const flower = await FlowerModel.findByIdAndRemove(flowerId);
                if(!flower) return res.status(404).send('The shop with the given ID was not found.');
            }

            res.status(204).send('flower deleted successfuly ! ');

            if(shop) {
                shop.totalFlowersCount -= 1;
            }
            await shop.save();

        } catch (error) {
            next(error);
        }
    }

}