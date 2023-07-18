const express = require('express');
const router = express.Router();
const {check, query } = require('express-validator');
const {handleValidationErrors} = require('../../utils/validation');

const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Street address is required'),

    check('city')
        .exists({ checkFalsy: true }) 
        .withMessage('Street address is required'),

    check('state')
        .exists({ checkFalsy: true })
        .withMessage('State is required'),

    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Country is required'),

    check('lat')
        .exists({ checkFalsy: true })
        .withMessage('Latitude is not valud').bail()
        .isNumeric({ checkFalsy: true })
        .withMessage('Latitude is not valid'),

    check('lng')
        .exists({ checkFalsy: true })
        .withMessage('Longitude is not valid').bail()
        .isNumeric({ checkFalsy: true })
        .withMessage('Longitude is not valid'),
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Name must be lesss thn 50 characters').bail()
        .isLength({ max: 51 })
        .withMessage('Name must be less than 50 characters'),

    // not done:
    // check('name')
    //     .exists({ checkFalsy: true })
    //     .withMessage('Name must be less than 50 characters'),
    
]