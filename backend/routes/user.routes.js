const router = require('express').Router();
const authController = require('../controllers/auth.controller.js');
const userController = require('../controllers/user.controller.js');
const uploadController = require('../controllers/upload.controller.js');


const multer = require('../middleware/multer')




// auth routes
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);
// user display : block
router.get("/", userController.getAllUsers);

router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

//following and followers
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);


//upload
router.post('/upload', multer, uploadController.uploadProfil)


module.exports = router;