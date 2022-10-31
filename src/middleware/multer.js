const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/image')
    },
    filename: (req, file, cb) => {
        // console.log(file)
        cb(null, Date.now() + "-" + file.originalname.substring())
        // cb(null, Date.now())

    }
});
const upload = multer({ storage: storage })

module.exports = upload;