import express, { Application, Request, Response } from 'express';
import router from './routes';
const cors = require('cors');
const app:Application = express();
const PORT = 3000;
import multer from 'multer';

app.use(cors({
  origin:'http://localhost:4200'
}))

app.use(cors());
const corsOptions = {
    origin:'*'
};
const pay = require('./pay')
const fs = require('fs');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Đặt điều kiện để xác định thư mục đích tùy thuộc vào loại ảnh
    let uploadPath = '';
    if (file.fieldname === 'file') {
      uploadPath = 'UploadFile/Images/';
    } else if (file.fieldname === 'userImage') {
      uploadPath = 'UploadFile/users/';
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Tạo một instance của Multer middleware
const upload = multer({ storage: storage });
app.use('/UploadFile/Images', express.static('UploadFile/Images'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Định nghĩa route xử lý việc tải lên tệp
app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
  console.log(req.file);
  
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Xử lý thành công việc tải lên tệp
  const filePath = req.file.path;
  return res.status(200).send({message:'File uploaded successfully.',url:filePath});
});

app.delete('/api/deleteImage', (req, res) => {
  const imageName = req.query.imageName;
  
  const imagePath = path.join(__dirname,'..', imageName); // Thay đổi đường dẫn thư mục nếu cần
  
  // Kiểm tra xem tệp tin tồn tại hay không
  if (fs.existsSync(imagePath)) {
    // Nếu tồn tại, thực hiện xóa tệp tin
    console.log("Tồn tại");
    
    fs.unlinkSync(imagePath);
    res.json({ success: true, message: 'File đã được xóa thành công.' });
  } else {
    res.status(404).json({ success: false, message: 'File không tồn tại.' });
  }
});

app.use(express.json());
app.use('/api', router);
app.use('/order',pay)

app.use(cors(corsOptions));
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
