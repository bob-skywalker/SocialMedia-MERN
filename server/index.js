import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import { verifyToken } from "./middleware/auth.js";
import { createPost } from "./controllers/posts.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";
import postRoutes from "./routes/posts.js";
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { Cloud } from "@mui/icons-material";



/* CLOUDINARY */
dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary, 
    params: {
        folder: 'bobokingdom',
        resource_type: 'auto',
        allowedFormats: ['jpeg', 'png', 'mp3', 'jpg'],
    }
});


// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", 
//   { folder: "bobokingdom", public_id: "olympic_flag" }, 
//   function(error, result) {
//     if (error) console.error('Upload Error:', error);
//     else console.log('Upload Result:', result);
//   });


/* CONFIGURATIONS */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

//Modified with Cloudinary
// const upload = multer({ storage });
const upload = multer({storage: cloudinaryStorage})

/* ROUTES WITH FILES */

app.post("/auth/register", upload.fields([
  {name: 'image', maxCount: 1}
]), register);

//Modified with Cloudinary
app.post("/posts", verifyToken, upload.fields([
    {name: 'image', maxCount: 1}, 
    {name: 'audio', maxCount: 1}
]), createPost);

/* ROUTES */

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on localhost:${PORT}`);

      // User.insertMany(users);
      // Post.insertMany(posts);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect!`);
  });
