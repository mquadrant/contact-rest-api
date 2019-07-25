require("dotenv").config({ path: `${__dirname}/./../config.env` });
const fs = require("fs");
const mongoose = require("mongoose");
// const Contact = require("./contacts.json");

//Database Connection
const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("DB connection successful!");
    })
    .catch(err => console.log(err));

// Read JSON File
const contacts = JSON.parse(
    fs.readFileSync(`${__dirname}/contacts.json`, "utf-8")
);

// CONTACT SCHEMA
const contactSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "A contact must have first name"],
        trim: true,
        maxlength: [
            40,
            "A contact name must have less or equal to 40 characters",
        ],
    },
    last_name: {
        type: String,
        trim: true,
        maxlength: [
            40,
            "A contact name must have less or equal to 40 characters",
        ],
    },
    phone: {
        type: String,
        required: [true, "A contact must have a phone number"],
        trim: true,
        maxlength: [14, "A contact number should not be more than 11 digit"],
    },
    email: {
        type: String,
        trim: true,
    },
    str_address: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        enum: {
            values: ["Female", "Male"],
            message: "Gender is either: female, male",
        },
    },
    company_name: {
        type: String,
        trim: true,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Contact = mongoose.model("Contact", contactSchema);

// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Contact.create(contacts);
        console.log("Data successfully loaded!");
        process.exit();
    } catch (err) {
        console.log(err);
    }
};

if (process.argv[2] === "--import") {
    importData();
}
