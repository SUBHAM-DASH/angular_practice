const multer = require('multer');
const upload = multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,`uploads/candidate/${file.fieldname}`);
    },
    filename:function(req,file,cb){
      cb(null,`${Date.now()}-${file.originalname}`)
    }
  })
})
module.exports = upload;
