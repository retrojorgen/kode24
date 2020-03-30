if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const Mailchimp = require("mailchimp-api-v3");
const mailchimp = new Mailchimp(process.env.MAILCHIMP_KODE24);
const cors = require("cors");

const axios = require("axios");
//const membersUrl = "https://api.patreon.com/oauth2/v2/campaigns/4143288/members?include=currently_entitled_tiers";
const membersUrl = "https://www.patreon.com/api/oauth2/v2/campaigns/4143288/members?include=currently_entitled_tiers,address&fields%5Bmember%5D=full_name,is_follower,last_charge_date,last_charge_status,lifetime_support_cents,currently_entitled_amount_cents,patron_status&fields%5Btier%5D=amount_cents,created_at,description,discord_role_ids,edited_at,patron_count,published,published_at,requires_shipping,title,url";

var allData = [];

const getData = async url => {
  try {
    return await axios.get(url, {
        headers: {'Authorization': 'Bearer ' + process.env.PATREON_PASS}
    });
  } catch (error) {
    console.log(error);
  }
};

const countBreeds = async (url, callback) => {
  const data = await getData(url)
  let members = data.data.data.filter(member => {
      if(member.attributes.currently_entitled_amount_cents === 1900)
          return true;
      else {
          return false;
      }
  });
  
  members = members.map(member => {
          return member.attributes.full_name;
  });

  allData = allData.concat(members);
  if(data.data.links && data.data.links.next) {
      countBreeds(data.data.links.next, callback);
  } else {
      callback();
  }
}

setInterval(() => { countBreeds(membersUrl, () => {}); }, 60000);

countBreeds(membersUrl, () => {});



const app = express();

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Put all API endpoints under '/api'
app.get("/api/test", (req, res) => {
  res.json({ title: "kode24" });
});

app.get("/api/patreons", (req, res) => {
    res.json({
      total: allData.length,
      members: allData
    });
});

app.post("/api/email", (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const nameList = name.split(" ");
  const firstName = nameList[0];
  const lastName =
    nameList.length > 1 ? nameList.splice(1, nameList.length).join(" ") : "";

  mailchimp
    .post("/lists/" + process.env.MAILCHIMP_KODE24_LIST_ID + "/members/", {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    })
    .then(function(results) {
      res.json(results);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/_healthz", (req, res) => {
  res.status(200).send();
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
