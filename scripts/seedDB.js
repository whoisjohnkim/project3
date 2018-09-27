const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Games collection and inserts the games below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ontap"
  );

const gamesSeed = [
    {
        title: "Cheers To the Governor",
        description:
        "SD:LFJSDLFJLDFJL:FSLFJLFJSLJFLSDLFJSDJ FSDLFSDFJSDLFJLS:DFJS:LDFJ SDL FSLDFJ SDLKJFS:LDFJLSD:JF:LS SD JFLSDJFL:JSD:FLJSDLF SDFSDLJF:LFJ",
        rating: 3
    },
    {
        title: "King's Cup",
        description:
        "SD:LFJSDLFJLDFJL:FSLFJLFJSLJFLSDLFJSDJ FSDLFSDFJSDLFJLS:DFJS:LDFJ SDL FSLDFLSD:JF:LS SD JFLSDJFL:JSD:FLJSDLF SDFSDLJF:LFJ",
        rating: 8
    },
    {
        title: "Waterfall",
        description:
        "SD:LFJSDLFJLDFJL:FSLFJLFJSLJFLSDLFJSDJ FSDLFSDFJSDLFJLS:DFJS:LDFJ SDL FSLDFJ SDLKJFS:JF:LS SD JFLSDJFL:JSD:FLJSDLF SDFSDLJF:LFJ",
        rating: 9
    },
    {
        title: "Beer Pong",
        description:
        "SD:LFJSDLFJLDFJL:FSLFJLFJSLJFLSDLFJSDJ FSDLFSDFJSDLFJLS:DFJS:LDFJ SDL FSLDFJ SDLKJFS:LDFJLSD:JF:LS SD JFLSDJFL:SD:FLJSDLF SDFSDLJF:LFJ",
        rating: 20
    },
    {
        title: "21 Cup",
        description:
        "SD:LFJSDLFJLDFJL:FSLFJLFJSLJFLSDLFJSDJ FSDLFSDFJSDLFJLS:DFJS:LDFJ SDL FSLDFJ SDLKJFS:LDFS SD JFLSDJFL:JSD:FLJSDLF SDFSDLJF:LFJ",
        rating: 40
    },
    {
        title: "Odds",
        description:
        "SD:LFJSDLFJLFJSLJFLSDLFJSDJ FSDLFSDFJSDLFJLS:DFJS:LDFJ SDL FSLDFJ SDLKJFS:LDFJLSD:JF:LS SD JFLSDJFL:JSD:FLJSDLF SDFSDLJF:LFJ",
        rating: -2
    },
    {
        title: "Just Take Shots",
        description:
        "SD:LFJSDLFJFLSDLFJSDJ FSDLFSDFJSDLFJLS:DFJS:LDFJ SDL FSLDFJ SDLKJFS:LDFJLSD:JF:LS SD JFLSDJFL:JSD:FLJSDLF SDFSDLJF:LFJ",
        rating: 100
    }
]

db.Games
    .remove({})
    .then(() => db.Games.collection.insertMany(gamesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
    process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })