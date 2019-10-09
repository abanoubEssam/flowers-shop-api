const mongoose = require('mongoose');
// const Loc = mongoose.model('Location');
import { FavModel } from '../models/favflowers.models';
import { FlowerModel } from '../models/flower/flower.models';
mongoose.debug = true;

export default {

    async makeFav(req, res, next) {
        try {
            let flowerId = String(req.params.flowerId);
            let userId = String(req.params.userId);

            if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }

            if (!mongoose.Types.ObjectId.isValid(req.params.flowerId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }

            const flower = await FlowerModel.findById(flowerId);
            if (!flower) return res.status(404).send('flower not found');

            if (String(req.user._id) !== String(userId)) return res.status(403).send('you are not allowed to access .');

            let favFlower = await FavModel.findOneAndUpdate({ user: userId, flower: flowerId }, {}, { upsert: true, new: true });
            res.send(favFlower);
        } catch (error) {
            next(error);
        }

    },
    async getFav(req, res, next) {
        let userId = String(req.params.userId);

        let pageNumber = Number(req.query.pageNumber) || 1;
        let pageSize = Number(req.query.pageSize) || 5;


        try {


            if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }

            if (String(req.user._id) !== String(userId)) return res.status(403).send('you are not allowed to access .');

            const pipeline = [
                {
                    $match: {
                        "user": mongoose.Types.ObjectId(userId)
                    }
                },
                {
                    $lookup: {
                        from: 'flowers',
                        localField: 'flower',
                        foreignField: '_id',
                        as: 'flowers'
                    }
                },
                {
                    $unwind: '$flowers'
                },
                { $replaceRoot: { newRoot: '$flowers' } }
            ]

            const resultPipeline = pipeline.concat([
                { $sort: { sponsored: -1 } },
                { $skip: (pageNumber - 1) * pageSize },
                { $limit: pageSize }
            ])


            const countPipeline = pipeline.concat([{ $group: { _id: null, count: { $sum: 1 } } }])

            const FavFlowers = await FavModel.aggregate(resultPipeline)
            const count = (await FavModel.aggregate(countPipeline))[0] || { count: 0 };
            res.send({FavFlowers , count});
        } catch (error) {
            next(error);
        }

    },
    async deleteFav(req, res, next) {
        try {
            let flowerId = String(req.params.flowerId);
            let userId = String(req.params.userId);

            if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }

            if (!mongoose.Types.ObjectId.isValid(req.params.flowerId)) {
                return res.status(400).send('please enter a valid  id '); // They didn't send an object ID
            }

            if (String(req.user._id) !== userId) return res.status(403).send('you are not allowed to access .');

            const flower = await FlowerModel.findById(flowerId).populate('shop');
            if (!flower) return res.status(404).send('flower not found');

            const deleteFlower = await FavModel.findOneAndRemove({ user: userId, flower: flowerId });
            if (!deleteFlower) return res.status(404).send('The flower with the given ID was not found.');
            res.status(204).send();

        } catch (error) {
            next(error)
        }
    }

}