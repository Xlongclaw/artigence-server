const express = require("express");
const server = express();
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const PORT = 8000;
const connectDatabase = require("./db/connectDatabase");
const ID = "conf-web-Xlongclaw";
const Announcements = require("./models/AnnouncementModel");
const Committee = require("./models/CommitteesModel");
const Conference = require('./models/conferencesModel') 
const Contact = require('./models/ContactUs')
const EventDate = require('./models/EventDateModel')
const Home = require('./models/HomeModel')
const Image = require('./models/ImageModel')
const Location = require('./models/LocationModel')
const Navbar = require('./models/NavbarModel')
const Speaker = require("./models/SpeakersModel")
const Sponsor = require('./models/SponsorsModel')

server.use(bodyParser.json());
server.use(cors());
server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
  res.status(200).send("Server is up and Running!");
});

// Announcement APIS

server.get(`/announcement`, async (req, res) => {
  await Announcements.find()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

server.post(`/announcement`, async (req, res) => {
  let announcement = new Announcements({
    confId: req.body.confId,
    title: req.body.title,
    date: req.body.date,
    metaDescription: req.body.metaDescription,
    description: req.body.description,
    feature: req.body.feature,
    hidden: req.body.hidden,
    link: req.body.link,
    new: req.body.new,
    sequence: req.body.sequence,
  });
  await announcement
    .save()
    .then((response) => {
      res.status(201).send("success");
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

server.get(`/announcement/:id`, async (req, res) => {
  await Announcements.findOne({ _id: req.params.id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

server.put(`/announcement/:id`, async (req, res) => {
  await Announcements.findOneAndUpdate(
    { _id: req.params.id },
    {
      confId: req.body.confId,
      title: req.body.title,
      date: req.body.date,
      metaDescription: req.body.metaDescription,
      description: req.body.description,
      feature: req.body.feature,
      hidden: req.body.hidden,
      link: req.body.link,
      new: req.body.new,
      sequence: req.body.sequence,
    }
  )
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

server.delete(`/announcement/:id`, async (req, res) => {
  await Announcements.deleteOne({ _id: req.params.id })
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

server.get(`/announcement/conf/:confId`, async (req, res) => {
  await Announcements.find({ confId: req.params.confId })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

// Committee  APIS

server.get(`/committees/conference/:ConfId`, async (req, res) => {
  await Committee.find({ ConfId: req.params.ConfId }).then((response) => {
    res.status(200).send(response);
  });
});

server.get(`/committees`, async (req, res) => {
  await Committee.find()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.post(`/committees`, async (req, res) => {
  let committee = new Committee({
    ConfId: req.body.confId,
    Type: req.body.Type,
    Subtype: req.body.Subtype,
    Name: req.body.Name,
    Designation: req.body.Designation,
    Institute: req.body.Institute,
    ProfileLink: req.body.ProfileLink,
    ImgLink: req.body.ImgLink,
    sequence: req.body.sequence,
    feature: req.body.feature,
  });
  await committee
    .save()
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.get(`/committees/:id`, async (req, res) => {
  await Committee.find({ _id: req.params.id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.put(`/committees/:id`, async (req, res) => {
  await Committee.findOneAndUpdate(
    { _id: req.params.id },
    {
      ConfId: req.body.confId,
      Type: req.body.Type,
      Subtype: req.body.Subtype,
      Name: req.body.Name,
      Designation: req.body.Designation,
      Institute: req.body.Institute,
      ProfileLink: req.body.ProfileLink,
      ImgLink: req.body.ImgLink,
      sequence: req.body.sequence,
      feature: req.body.feature,
    }
  )
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.delete(`/committees/:id`,async (req,res)=>{
  await Committee.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(200).send("success")
  }).catch((err)=>{
    res.status(500).send({"error":err})
  })
})

// Conferences APIs

server.get(`/conf`, async (req, res) => {
  await Conference.find()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.post(`/conf`, async (req, res) => {
  let conference = new Conference({
    name:req.body.name,
    email:req.body.email
  });
  await conference
    .save()
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.get(`/conf/:id`, async (req, res) => {
  await Conference.find({ _id: req.params.id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.put(`/conf/:id`, async (req, res) => {
  await Conference.findOneAndUpdate(
    { _id: req.params.id },
    {
      name:req.body.name,
      email:req.body.email
    }
  )
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.delete(`/conf/:id`,async (req,res)=>{
  await Conference.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(200).send("success")
  }).catch((err)=>{
    res.status(500).send({"error":err})
  })
})

// Contacts APIs

server.get(`/contacts/:ConfId`, async (req, res) => {
  await Contact.find({ ConfId: req.params.ConfId }).then((response) => {
    res.status(200).send(response);
  });
});

server.post(`/contacts`, async (req, res) => {
  let contact = new Contact({
    confId:req.body.confId,
    title:req.body.title,
    name:req.body.name,
    designation:req.body.designation,
    imgLink:req.body.imgLink,
    institute:req.body.institute,
    profileLink:req.body.profileLink,
    phone:req.body.phone,
    email:req.body.email,
    fax:req.body.fax,
    feature:req.body.feature,
    sequence:req.body.sequence,
  });
  await contact
    .save()
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.put(`/contacts/:id`, async (req, res) => {
  await Contact.findOneAndUpdate(
    { _id: req.params.id },
    {
      confId:req.body.confId,
      title:req.body.title,
      name:req.body.name,
      designation:req.body.designation,
      imgLink:req.body.imgLink,
      institute:req.body.institute,
      profileLink:req.body.profileLink,
      phone:req.body.phone,
      email:req.body.email,
      fax:req.body.fax,
      feature:req.body.feature,
      sequence:req.body.sequence,
    }
  )
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.delete(`/contacts/:id`,async (req,res)=>{
  await Contact.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(200).send("success")
  }).catch((err)=>{
    res.status(500).send({"error":err})
  })
})

// Event Date APIs

server.get(`/eventDates/conference/:id`, async (req, res) => {
  await EventDate.find({ _id: req.params.id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.get(`/eventDates`, async (req, res) => {
  await EventDate.find()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.post(`/eventDates`, async (req, res) => {
  let eventdate = new EventDate({
    confId:req.body.confId,
    title:req.body.title,
    details:req.body.details,
    date:req.body.date,
    sequence:req.body.sequence,
    extended:req.body.extended,
    newDate:req.body.newDate,
    completed:req.body.completed,
    featured:req.body.featured
  });
  await eventdate
    .save()
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ "error": err });
    });
});

server.get(`/eventDates/:id`, async (req, res) => {
  await EventDate.find({ _id: req.params.id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.put(`/eventDates/:id`, async (req, res) => {
  await EventDate.findOneAndUpdate(
    { _id: req.params.id },
    {
      confId:req.body.confId,
      title:req.body.title,
      details:req.body.details,
      date:req.body.date,
      sequence:req.body.sequence,
      extended:req.body.extended,
      newDate:req.body.newDate,
      completed:req.body.completed,
      featured:req.body.featured
    }
  )
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.delete(`/eventDates/:id`,async (req,res)=>{
  await EventDate.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(200).send("success")
  }).catch((err)=>{
    res.status(500).send({"error":err})
  })
})

// Home APIs

server.get(`/home`, async (req, res) => {
  await Home.find()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.post(`/home`, async (req, res) => {
  let home = new Home({
    confId:req.body.confId,
    confName:req.body.confName,
    confStartDate:req.body.confStartDate,
    confEndDate:req.body.confEndDate,
    aboutConf:req.body.aboutConf,
    aboutIns:req.body.aboutIns,
    youtubeLink:req.body.youtubeLink,
    instaLink:req.body.instaLink,
    facebookLink:req.body.facebookLink,
    twitterLink:req.body.twitterLink,
    logo:req.body.logo,
    shortName:req.body.shortName
  });
  await home
    .save()
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.get(`/home/:id`, async (req, res) => {
  await Home.find({ _id: req.params.id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.put(`/home/:id`, async (req, res) => {
  await Home.findOneAndUpdate(
    { _id: req.params.id },
    {
      confId:req.body.confId,
    confName:req.body.confName,
    confStartDate:req.body.confStartDate,
    confEndDate:req.body.confEndDate,
    aboutConf:req.body.aboutConf,
    aboutIns:req.body.aboutIns,
    youtubeLink:req.body.youtubeLink,
    instaLink:req.body.instaLink,
    facebookLink:req.body.facebookLink,
    twitterLink:req.body.twitterLink,
    logo:req.body.logo,
    shortName:req.body.shortName
    }
  )
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.delete(`/home/:id`,async (req,res)=>{
  await Home.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(200).send("success")
  }).catch((err)=>{
    res.status(500).send({"error":err})
  })
})

server.get(`/home/conf/:ConfId`, async (req, res) => {
  await Home.find({ ConfId: req.params.ConfId }).then((response) => {
    res.status(200).send(response);
  });
});

// Images APIs

server.get(`/images/:confId`, async (req, res) => {
  await Image.find({ _id: req.params.confId })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.post(`/images`, async (req, res) => {
  let image = new Image({
    confId:req.body.confId,
    name:req.body.name,
    imgLink:req.body.imgLink,
    feature:req.body.feature,
    sequence:req.body.sequence,
  });
  await image
    .save()
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.put(`/images/:id`, async (req, res) => {
  await Image.findOneAndUpdate(
    { _id: req.params.id },
    {
      confId:req.body.confId,
    name:req.body.name,
    imgLink:req.body.imgLink,
    feature:req.body.feature,
    sequence:req.body.sequence,
    }
  )
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.delete(`/images/:id`,async (req,res)=>{
  await Image.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(200).send("success")
  }).catch((err)=>{
    res.status(500).send({"error":err})
  })
})

// Locations APIs

server.get(`/locations/:confId`, async (req, res) => {
  await Location.find({ _id: req.params.confId })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.post(`/locations`, async (req, res) => {
  let location = new Location({
    confId:req.body.confId,
    description:req.body.description,
    address:req.body.address,
    latitude:req.body.latitude,
    longitude:req.body.longitude,
    feature:req.body.feature,
    sequence:req.body.sequence
  });
  await location
    .save()
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.put(`/locations/:id`, async (req, res) => {
  await Location.findOneAndUpdate(
    { _id: req.params.id },
    {
      confId:req.body.confId,
      description:req.body.description,
      address:req.body.address,
      latitude:req.body.latitude,
      longitude:req.body.longitude,
      feature:req.body.feature,
      sequence:req.body.sequence
    }
  )
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.delete(`/locations/:id`,async (req,res)=>{
  await Location.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(200).send("success")
  }).catch((err)=>{
    res.status(500).send({"error":err})
  })
})

// NavBar APIs

server.get(`/navbar`, async (req, res) => {
  await Navbar.find()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.post(`/navbar`, async (req, res) => {
  let navbar = new Navbar({
    confId:req.body.confId,
    heading:req.body.heading,
    subHeading:req.body.subHeading,
    name:req.body.name,
    url:req.body.url
  });
  await navbar
    .save()
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.get(`/navbar/:id`, async (req, res) => {
  await Navbar.find({ _id: req.params.id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.put(`/navbar/:id`, async (req, res) => {
  await Navbar.findOneAndUpdate(
    { _id: req.params.id },
    {
      confId:req.body.confId,
    heading:req.body.heading,
    subHeading:req.body.subHeading,
    name:req.body.name,
    url:req.body.url
    }
  )
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.delete(`/navbar/:id`,async (req,res)=>{
  await Navbar.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(200).send("success")
  }).catch((err)=>{
    res.status(500).send({"error":err})
  })
})

server.get(`/navbar/conf/:ConfId`, async (req, res) => {
  await Navbar.find({ confId: req.params.ConfId }).then((response) => {
    res.status(200).send(response);
  });
});

// Participant APIs

// Speakers APIs

server.get(`/speakers/conference/:id`, async (req, res) => {
  await Speaker.find({ ConfId: req.params.id}).then((response) => {
    res.status(200).send(response);
  });
});

server.get(`/speakers`, async (req, res) => {
  await Speaker.find()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.post(`/speakers`, async (req, res) => {
  let speaker = new Speaker({
    ConfId:req.body.ConfId,
    Name:req.body.Name,
    Designation:req.body.Designation,
    Institute:req.body.Institute,
    ProfileLink:req.body.ProfileLink,
    ImgLink:req.body.ImgLink,
    TalkType:req.body.TalkType,
    TalkTitle:req.body.TalkTitle,
    Abstract:req.body.Abstract,
    Bio:req.body.Bio,
    sequence:req.body.sequence,
    feature:req.body.feature

  });
  await speaker
    .save()
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.get(`/speakers/:id`, async (req, res) => {
  await Speaker.find({ _id: req.params.id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.put(`/speakers/:id`, async (req, res) => {
  await Speaker.findOneAndUpdate(
    { _id: req.params.id },
    {
      ConfId:req.body.ConfId,
      Name:req.body.Name,
      Designation:req.body.Designation,
      Institute:req.body.Institute,
      ProfileLink:req.body.ProfileLink,
      ImgLink:req.body.ImgLink,
      TalkType:req.body.TalkType,
      TalkTitle:req.body.TalkTitle,
      Abstract:req.body.Abstract,
      Bio:req.body.Bio,
      sequence:req.body.sequence,
      feature:req.body.feat
    }
  )
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.delete(`/speakers/:id`,async (req,res)=>{
  await Speaker.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(200).send("success")
  }).catch((err)=>{
    res.status(500).send({"error":err})
  })
})

// Sponsors APIs

server.get(`/sponsors/conference/:id`, async (req, res) => {
  await Sponsor.find({ confId: req.params.id}).then((response) => {
    res.status(200).send(response);
  });
});

server.get(`/sponsors`, async (req, res) => {
  await Sponsor.find()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.post(`/sponsors`, async (req, res) => {
  let sponsor = new Sponsor({
    confId:req.body.confId,
    name:req.body.name,
    type:req.body.type,
    logo:req.body.logo,
    sequence:req.body.sequence,
    featured:req.body.featured,
    description:req.body.description,
    link:req.body.link
  });
  await sponsor
    .save()
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.get(`/sponsors/:id`, async (req, res) => {
  await Sponsor.find({ _id: req.params.id })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.put(`/sponsors/:id`, async (req, res) => {
  await Sponsor.findOneAndUpdate(
    { _id: req.params.id },
    {
      confId:req.body.confId,
    name:req.body.name,
    type:req.body.type,
    logo:req.body.logo,
    sequence:req.body.sequence,
    featured:req.body.featured
    }
  )
    .then((response) => {
      res.status(200).send("success");
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

server.delete(`/sponsors/:id`,async (req,res)=>{
  await Spo.deleteOne({_id:req.params.id}).then((response)=>{
    res.status(200).send("success")
  }).catch((err)=>{
    res.status(500).send({"error":err})
  })
})

// Users APIs



async function start() {
  try {
    await connectDatabase();
    server.listen(PORT, function () {
      console.log(`SERVER STARTED AT PORT : ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
