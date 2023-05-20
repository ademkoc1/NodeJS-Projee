import express from 'express';
import * as userController from '../controllers/userController.js';
import *as authMiddleware from "../middlewaress/authMiddleware.js"

const router = express.Router();

router.post("/register", userController.createUser)
router.post("/login", userController.loginUser)
router
  .route('/dashboard')
  .get(authMiddleware.authenticateToken, userController.getDashboardPage); 

  router.get("/",authMiddleware.authenticateToken, userController.getAllUsers)
  router.get("/:id", authMiddleware.authenticateToken,userController.getAUser)

//   router
//   .route('/:id/follow')
//   .put(authMiddleware.authenticateToken, userController.follow);
// router
//   .route('/:id/unfollow')
//   .put(authMiddleware.authenticateToken, userController.unfollow);



export default router