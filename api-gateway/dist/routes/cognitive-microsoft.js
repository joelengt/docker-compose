'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controllers = require('../controllers');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Face api
router.route('/face/detect').post(_controllers.microsoftCognitive.faceDetect);

router.route('/face/verify').post(_controllers.microsoftCognitive.faceVerify);

router.route('/face/identify').post(_controllers.microsoftCognitive.faceIdentify);

// FaceList api
router.route('/facelists/:faceListID').get(_controllers.microsoftCognitive.faceListByID).post(_controllers.microsoftCognitive.faceListCreate);

router.route('/facelists/:faceListID/face').post(_controllers.microsoftCognitive.faceListAddFace);

// Person Group
router.route('/persongroups').get(_controllers.microsoftCognitive.personGroupList);

router.route('/persongroups/:personGroupID').get(_controllers.microsoftCognitive.personGroupByID).post(_controllers.microsoftCognitive.personGroupCreate);

router.route('/persongroups/:personGroupID/training').get(_controllers.microsoftCognitive.personGroupTrainingStatus);

router.route('/persongroups/:personGroupID/train').post(_controllers.microsoftCognitive.personGroupTrain);

// Person
router.route('/persongroups/:personGroupID/persons').get(_controllers.microsoftCognitive.personList).post(_controllers.microsoftCognitive.personCreate);

router.route('/persongroups/:personGroupID/persons/:personID').get(_controllers.microsoftCognitive.personByID);

router.route('/persongroups/:personGroupID/persons/:personID/face').post(_controllers.microsoftCognitive.personAddFace);

router.route('/persongroups/:personGroupID/persons/:personID/face/:faceID').get(_controllers.microsoftCognitive.personGetFace);

exports.default = router;
module.exports = exports['default'];