const express = require('express');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Sequelize } = require('sequelize');
const { Op } = require('sequelize');
const { Spot, User, ReviewImage, Review, Booking } = require('../../db/models');
