import mongoose from "mongoose";

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
        unique: true,
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

export default Contact;
