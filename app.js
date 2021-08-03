import express, { response } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
import multer from 'multer';
import nodeHtmlToImage from 'node-html-to-image'
import fs from 'fs';


const app = express();
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './assets/tvshow-serverImages')
  },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  }
);

const upload = multer({storage: fileStorageEngine});
const port = 3000;
const hostname = "127.0.0.1";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const urlencodedParser = bodyParser.urlencoded({extended: false });
app.set("view engine", "pug");

app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
    res.render(__dirname + "/snippet/create-post")
});

app.get('/for-TV-show', (req, res) => {
  res.render(__dirname + "/snippet/tvshow.pug");
});

app.get("/for-TV-show/TVshow-success", [urlencodedParser, upload.single("image")], (req, res) => {
  console.log(req.query);
  res.render(__dirname + "/snippet/TVshow-success", {
    guestName: req.query.guestName, 
    guestImage: req.query.image,
    secondGuest: req.query.secondGuestName,
    secondUserImage: req.query.secondImage
  });

  const pathForImage = '/assets/tvshow-serverImages/template.png'

  async function download(url = defaultURL, path = pathForImage, callback) {
    if(url === "") {
      url = defaultURL;
    }
    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
  }


  nodeHtmlToImage({
    output: './assets/tvshow-serverImages/template.png',
    html: `
    <html>
    <style>
      @import url("//cdn.web-fonts.ge/fonts/bpg-nino-mtavruli/css/bpg-nino-mtavruli.min.css");
      @import url("//cdn.web-fonts.ge/fonts/bpg-web-002/css/bpg-web-002.min.css");
      @import url("./assets/post/css/tvshow-success.css");

      body {
        overflow: hidden;
        width: 2048px;
        height: 2048px;
      }

      .post-container {
        width: 2048px;
        height: 2048px;
        transform-origin: top left;
        margin: 50px 0;
        left: 50%;
        transform: translateX(-50%);
        font-family: "BPG WEB 002", sans-serif;
        text-align: center;
        position: relative;
        color: white;
        overflow: hidden;
      }

      .post-container::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }

      .content {
        margin-top: -45px;
      }

      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .text {
        width: 95%;
        height: 90%;
        position: absolute;
        left: 0;
        top: 40px;
        display: flex;
        font-family: "BPG WEB 002", sans-serif;
        justify-content: center;
        align-items: flex-end;
        z-index: 100;

      }

      .text p {
        width: 1555px;
        font-weight: bold;
        font-size: 70px;
        font-family: "BPG WEB 002", sans-serif;
        line-height: 100px;
      }

      .author {
        position: absolute;
        bottom: 35px;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 76px;
        line-height: 87px;
        z-index: 100;

      }

      .author::after {
        content: "";
        position: absolute;
        bottom: -22px;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 10px;
        width: 100%;
        background-color: #08a53f;
        border-radius: 21px;
      }

      #btn {
        margin: 20px 0 0 20px;
      }

    </style>
      <body>
        <div class="post-container">
          <img src={{picture}} class="img">
          <div class="text">
              <p>{{author}}</p>
          </div>
          <div class="author">{{message}}</div>
        </div>
      </body>
    </html>`,

    content: {
      author: req.body.message,
      message: req.body.name,
      // picture: `http://127.0.0.1:3000/assets/serverImages/${req.file.originalname}`
    }
  }).then(() => console.log('The image was created successfully!'))
});


app.get("/post", [urlencodedParser, upload.single("image")], (req, res) => {
  res.render(__dirname + "/snippet/post-success", {
    data: req.body, 
    image: `./assets/serverImages/${req.file.originalname}`,
    generatedImage: " image.png"
  });

  nodeHtmlToImage({
    output: './assets/post/generatedTemplate/image.png',
    html: `
    <html>
    <style>
      @import url("//cdn.web-fonts.ge/fonts/bpg-nino-mtavruli/css/bpg-nino-mtavruli.min.css");
      @import url("//cdn.web-fonts.ge/fonts/bpg-web-002/css/bpg-web-002.min.css");

      body {
        overflow: hidden;
        width: 2048px;
        height: 2048px;
      }

      .post-container {
        width: 2048px;
        height: 2048px;
        transform-origin: top left;
        margin: 50px 0;
        left: 50%;
        transform: translateX(-50%);
        font-family: "BPG WEB 002", sans-serif;
        text-align: center;
        position: relative;
        color: white;
        overflow: hidden;
      }

      .post-container::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: url("http://127.0.0.1:3000/assets/post/img/post-bg.png") no-repeat center/cover,  linear-gradient(
          1deg
          , #000 0%, transparent 40%);
        z-index: 10;
        filter: blur(2px);
        pointer-events: none;
      }

      .content {
        margin-top: -45px;
      }

      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .text {
        width: 95%;
        height: 90%;
        position: absolute;
        left: 0;
        top: 40px;
        display: flex;
        font-family: "BPG WEB 002", sans-serif;
        justify-content: center;
        align-items: flex-end;
        z-index: 100;

      }

      .text p {
        width: 1555px;
        font-weight: bold;
        font-size: 70px;
        font-family: "BPG WEB 002", sans-serif;
        line-height: 100px;
      }

      .author {
        position: absolute;
        bottom: 35px;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 76px;
        line-height: 87px;
        z-index: 100;

      }

      .author::after {
        content: "";
        position: absolute;
        bottom: -22px;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 10px;
        width: 100%;
        background-color: #08a53f;
        border-radius: 21px;
      }

      #btn {
        margin: 20px 0 0 20px;
      }

    </style>
      <body>
        <div class="post-container">
          <img src={{picture}} class="img">
          <div class="text">
              <p>{{author}}</p>
          </div>
          <div class="author">{{message}}</div>
        </div>
      </body>
    </html>`,

    content: {
      author: req.body.message,
      message: req.body.name,
      picture: `http://127.0.0.1:3000/assets/serverImages/${req.file.originalname}`
    }
  }).then(() => console.log('The image was created successfully!'))
});


app.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
