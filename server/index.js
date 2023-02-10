require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const bodyParser = require('body-parser');
const passport = require('passport');
const compression = require('compression');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const CronJob = require('cron').CronJob;
const crons = require('./config/crons');
const { SocketIo } = require("./socket.io");
const Userschema = require("./models/userModel");
const Rooms = require("./models/rooms");
const Apartments = require("./models/apartments");
const Subscribers = require("./models/subscribers");
const homepageModels = require("./models/homepageModel");
const ContactMessage = require("./models/contactMessages");
const Blogs = require("./models/blog");
const Blogscomments = require("./models/BlogComments");
const AdRates = require("./models/AdRates");
const GoogleAdsense = require("./models/GoogleAdsense");

// Passport Config
//require('./config/passport')(passport);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
//app.use(cors())
app.use(express.json());
//app.use(compression());

const routes = require('./routes/route');

const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const AdminBroExpress = require("@admin-bro/express");
AdminBro.registerAdapter(AdminBroMongoose);
process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;


/////////////////////////////////////////////////////////
const locale = {
  translations: {
    labels: {
      // change Heading for Login
      loginWelcome: "Admin",
      homepageModels: "Homepage Content",
    },
    messages: {
      loginWelcome: "Welcome to admin section",
    },
  },
};

const adminBro = new AdminBro({
  Databases: [database],
  rootPath: "/admin",
  loginPath: "/admin/login",

  resources: [
    {
      resource: Userschema,
      options: {
        properties: {
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          imgUrl: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          Password: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
        },
      },
    },

    {
      resource: Rooms,
      options: {
        properties: {
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          media: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          location: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    },
    {
      resource: Apartments,
      options: {
        properties: {
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          media: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          location: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          locationType: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          locationCoordinates: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          Building_type: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          isPaidAdd: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          rent: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    },
    Subscribers,
    {
      resource: homepageModels,
      options: {
        properties: {
          aboutUs: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          faq: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          privacy: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          Banners_NG: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_ZA: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_KE: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_IE: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_GH: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_GB: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners_US: {
            isVisible: { list: false, filter: false, show: false, edit: true },
          },
          Banners: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          RecentApartments: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          RecentRooms: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          name: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          videoUrl: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          _id: {
            isVisible: { list: false, filter: false, show: false, edit: false },
          },
          InstagramLink: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          linkedinLink: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          FacebookLink: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          SiteOfficeAddress: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          YoutubeLink: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
        },
      },
    },

    {
      resource: Blogs,
      options: {
        properties: {
          body: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          imagUri: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          updated_a: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
          created_at: {
            isVisible: { list: false, filter: false, show: true, edit: true },
          },
        },
      },
    },

    {
      resource: Blogscomments,
      options: {
        properties: {
          body: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          comments_for_post: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    },
    {
      resource: ContactMessage,
      options: {
        properties: {
          message: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          _id: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    },
    {
      resource: AdRates,
      options: {
        properties: {
          created_at: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
          updated_at: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    },
    GoogleAdsense,
    // {
    //   resource: HowItWorks,
    //   options: {navigation: false,isAccessible:false,isVisible:false,
    //     properties: {
    //       body: {
    //         type: "richtext",
    //       },
    //     },
    //   },
    // },
    // {
    //   resource: whyChooseUs,
    //   options: {
    //     properties: {
    //       body: {
    //         type: "richtext",
    //       },
    //     },
    //   },
    // },
    // {
    //   resource: accessibilityStatement,
    //   options: {
    //     properties: {
    //       body: {
    //         type: "richtext",
    //       },
    //     },
    //   },
    // },
  ],
  locale,
  branding: {
    companyName: "RoomNets",
    softwareBrothers: false,
    logo: "/api/v1/media/logo2.png",
    text: "Welcome to Roomnets admin",
  },
  dashboard: {
    handler: async () => {
      return { some: "output" };
    },
    component: AdminBro.bundle("./adminbro/home"),
  },
  // pages: {
  //   customPage: {
  //     label: "Custom page",

  //     handler: async (request, response, context) => {
  //       return {
  //         text: 'I am fetched from the backend',
  //       }
  //     },
  //     component: AdminBro.bundle('./components/page2'),
  //   },

  // }
});
// const router = AdminBroExpress.buildRouter (adminBro)
// let router = express.Router()
// router.use((req, res, next) => {
//   if (req.session && req.session.admin) {
//     req.session.adminUser = req.session.admin
//     next()
//   } else {
//     res.redirect(adminBro.options.loginPath)
//   }
// })
// router = AdminBroExpress.buildRouter(adminBro, router)
const ADMIN = {
  email: "admin@roomnets.com",
  password: "admin@roomnets.com",
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN;
    }
    return null;
  },
  cookieName: "adminbro",
  cookiePassword: "somePassword",
});

//const Port = process.env.PORT || 8080;
app.use(adminBro.options.rootPath, router);
app.use(adminBro.options.loginPath, router);
app.use(cors({
  origin: '*'
}));
app.use('/api/v1', routes)
// Initialize routes middleware
app.use('/api/admin', require('./routes/admin'));

// Express body parser
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// REACT BUILD for production
if (process.env.NODE_ENV === 'PROD') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('/*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}else{
  app.get('/*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Credentials: true ");
    res.header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
    res.header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
  });
}


// run at 3:10 AM -> delete old tokens
const tokensCleanUp = new CronJob('10 3 * * *', function() {
  crons.tokensCleanUp();
});
tokensCleanUp.start();

const PORT = process.env.PORT;

//app.listen(PORT, () => {
    //console.log(`Server Started at ${3000}`)
//})

http.createServer({
}, app)
    .listen(PORT, function() {
      console.log('App listening on port ' + PORT + '! Go to http://localhost:' + PORT + '/');
    });




// FOR HTTPS ONLY
// https.createServer({
//   key: fs.readFileSync(process.env.SSLKEY),
//   cert: fs.readFileSync(process.env.SSLCERT),
// }, app)
//     .listen(PORT, function() {
//       console.log('App listening on port ' + PORT + '! Go to https://localhost:' + PORT + '/');
//     });
// app.use(requireHTTPS); FOR HTTPS
// app.enable('trust proxy');
// app.use(function(req, res, next) {
//   if (req.secure) {
//     return next();
//   }
//   res.redirect('https://' + req.headers.host + req.url);
// });

/**
 * @param {int} req req.
 * @param {int} res res.
 * @param {int} next next.
 * @return {void} none.
 */
function requireHTTPS(req, res, next) {
  if (!req.secure) {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}