const { propertyCreate,propertyUpdate,propertyGetOne,propertyGetAll, propertyDelete } = require('../controllers/properties');
const express = require('express');
const router = express.Router();
const { authToken } = require('../middlewares/authToken')


router.route('/').post(authToken, propertyCreate);

router.route('/:id').delete(authToken,propertyDelete);

router.route('/:propertyid/sold').patch(authToken,propertyUpdate);

router.route('/').get(propertyGetAll);

router.route('/:propertyId').get(propertyGetOne);
// router.route('/').get(propertyGetByType);



module.exports = router;