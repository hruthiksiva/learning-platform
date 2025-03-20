const express = require('express');
const { createProfile, getProfile, updateProfile, getPublicTeacherProfile, getPublicStudentProfile } = require('../controllers/profileController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createProfile);
router.get('/', authMiddleware, getProfile);
router.put('/', authMiddleware, updateProfile);
router.get('/teacher/:teacherId', getPublicTeacherProfile);
router.get('/student/:studentId', getPublicStudentProfile);

module.exports = router;