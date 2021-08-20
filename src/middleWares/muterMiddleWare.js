import multer from 'multer'

export default multer({dest: 'upload_tmp'}).any()