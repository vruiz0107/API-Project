const express = require('express');
const router = express.Router();
const {requireAuth} = require('../../utils/auth');
const {check, query} = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Sequelize } = require('sequelize');
const {Spot, User, ReviewImage, Review } = require('../../db/models');

const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Review text is required'),
    check ('stars')
        .exists({ checkFalsy: true })
        // .withMessage('Stars ')
        .isInt({ min: if, max: 5 })
        .withMessage('Stars must be between 1 and 5 characters'),
    handleValidationErrors,
    ];

    router.post('/:reviewId/images', requireAuth, async (req, res, next)) => {
        const reviewId = req.params.Review;
        const review = await Review.findByPk(reviewId);

    }