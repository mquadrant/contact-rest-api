import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app";
import Contact from "../src/models/contactModel";

function connectMongoDB() {
    return mongoose
        .connect("mongodb://localhost:27017/contacts", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log("localhost connected!");
        })
        .catch(err => {
            console.log(err);
            process.exit(1);
        });
}
function disconnectMongoDB() {
    // mongoose.connection.db.dropDatabase();
    mongoose.connection.close();
}

beforeAll(async () => await connectMongoDB());
afterAll(async () => disconnectMongoDB());

describe("GET /api/v1", () => {
    test("responds with json", async () => {
        return request(app)
            .get("/api/v1")
            .set("Accept", "application/json")
            .expect(200)
            .then(response => {
                expect(response.body).toStrictEqual({
                    message: "Here is Contact API version 1.0.0",
                });
            });
    });
});
describe("GET /api/v1/contacts", () => {
    test("responds with json with all contacts", () => {
        return request(app)
            .get("/api/v1/contacts")
            .set("Accept", "application/json")
            .expect(200)
            .then(response => {
                expect(response.body.data.contact).toContainEqual({
                    _id: expect.any(String),
                    first_name: expect.any(String),
                    last_name: expect.any(String),
                    phone: expect.any(String),
                    email: expect.any(String),
                    str_address: expect.any(String),
                    gender: expect.any(String),
                    company_name: expect.any(String),
                    isBlocked: expect.any(Boolean),
                    createdAt: expect.any(String),
                });
            });
    });
    test("responds with all contacts having isBlock field to be false", async () => {
        return await request(app)
            .get("/api/v1/contacts")
            .set("Accept", "application/json")
            .expect(200)
            .then(response => {
                expect(response.body.data.contact).toContainEqual({
                    _id: expect.any(String),
                    first_name: expect.any(String),
                    last_name: expect.any(String),
                    phone: expect.any(String),
                    email: expect.any(String),
                    str_address: expect.any(String),
                    gender: expect.any(String),
                    company_name: expect.any(String),
                    isBlocked: false,
                    createdAt: expect.any(String),
                });
            });
    });
});

describe("GET /api/contacts/blocked", () => {
    test("responds with all the contacts that are blocked", () => {
        return request(app)
            .get("/api/v1/contacts/blocked")
            .set("Accept", "application/json")
            .expect(200)
            .then(response => {
                expect(response.body.data.blockContact).toContainEqual({
                    _id: expect.any(String),
                    first_name: expect.any(String),
                    last_name: expect.any(String),
                    phone: expect.any(String),
                    email: expect.any(String),
                    str_address: expect.any(String),
                    gender: expect.any(String),
                    company_name: expect.any(String),
                    isBlocked: expect.any(Boolean),
                    createdAt: expect.any(String),
                });
            });
    });
    test("that the isBlocked field is always true", () => {
        return request(app)
            .get("/api/v1/contacts/blocked")
            .set("Accept", "application/json")
            .expect(200)
            .then(response => {
                expect(response.body.data.blockContact).toContainEqual({
                    _id: expect.any(String),
                    first_name: expect.any(String),
                    last_name: expect.any(String),
                    phone: expect.any(String),
                    email: expect.any(String),
                    str_address: expect.any(String),
                    gender: expect.any(String),
                    company_name: expect.any(String),
                    isBlocked: true,
                    createdAt: expect.any(String),
                });
            });
    });
});

describe("GET /api/contacts/:contactId", () => {
    test("responds with the right contact", () => {
        return request(app)
            .get("/api/v1/contacts/5d39e583f10212a8c0c28327")
            .set("Accept", "application/json")
            .expect(200)
            .then(response => {
                expect(response.body.data.contact).toEqual({
                    _id: expect.any(String),
                    first_name: expect.any(String),
                    last_name: expect.any(String),
                    phone: expect.any(String),
                    email: expect.any(String),
                    str_address: expect.any(String),
                    gender: expect.any(String),
                    company_name: expect.any(String),
                    isBlocked: false,
                    createdAt: expect.any(String),
                });
            });
    });
    test("that it return Not Found message when id is not found", () => {
        return request(app)
            .get("/api/v1/contacts/5d39e5c21107aaa99981a671")
            .set("Accept", "application/json")
            .expect(404)
            .then(response => {
                expect(response.body).toEqual({
                    status: "fail",
                    message: "No Contact Found with that ID",
                    error: expect.any(Object),
                    stack: expect.any(String),
                });
            });
    });
});

describe("POST /api/v1/contacts", () => {
    afterEach(async () => {
        await Contact.deleteOne({ phone: "1327322937" });
    });
    const contact = {
        first_name: "Elaine",
        last_name: "Baine",
        phone: "1327322937",
        email: "ebaine0@skype.com",
        str_address: "09711 Badeau Place",
        gender: "Female",
        company_name: "Skibox",
    };
    test("that it create the contact", () => {
        return request(app)
            .post("/api/v1/contacts")
            .send(contact)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201)
            .then(res => {
                expect(res.body.data.contact).toEqual({
                    ...contact,
                    __v: 0,
                    _id: expect.any(String),
                    isBlocked: false,
                    createdAt: expect.any(String),
                });
            });
    });
});

describe("PATCH api/v1/contacts/:contactId/unblock", () => {
    test("that a contact is unblock", () => {
        return request(app)
            .patch("/api/v1/contacts/5d39e583f10212a8c0c28328/unblock")
            .expect(200)
            .then(res => {
                expect(res.body.status).toStrictEqual("success");
            });
    });
    test("that it return an error message when a wrong id is passed", () => {
        return request(app)
            .patch("/api/v1/contacts/5d39e5c21107aaa99981a671/unblock")
            .expect(404)
            .then(res => {
                expect(res.body).toEqual({
                    status: "fail",
                    message: "No Contact Found with that ID",
                    error: expect.any(Object),
                    stack: expect.any(String),
                });
            });
    });
});

describe("PATCH api/v1/contacts/:contactId/block", () => {
    test("that a contact is block", () => {
        return request(app)
            .patch("/api/v1/contacts/5d39e583f10212a8c0c28328/block")
            .expect(200)
            .then(res => {
                expect(res.body.status).toStrictEqual("success");
            });
    });
    test("that it returns error when wrong id is passed", () => {
        return request(app)
            .patch("/api/v1/contacts/5d39e5c21107aaa99981a671/block")
            .expect(404)
            .then(res => {
                expect(res.body).toEqual({
                    status: "fail",
                    message: "No Contact Found with that ID",
                    error: expect.any(Object),
                    stack: expect.any(String),
                });
            });
    });
});

describe("PUT api/v1/contacts/:contactId", () => {
    const contact = {
        last_name: "Jefferson",
        phone: "000-11-222",
        email: "cless0@skype.com",
        str_address: "020 skimatama street",
        gender: "Male",
        company_name: "JJ company",
    };
    test("that the contact is updated", () => {
        return request(app)
            .put("/api/v1/contacts/5d39e583f10212a8c0c2832f")
            .send(contact)
            .expect(200)
            .then(res => {
                expect(res.body.data.contact).toEqual({
                    ...contact,
                    _id: expect.any(String),
                    isBlocked: true,
                    first_name: expect.any(String),
                    createdAt: expect.any(String),
                });
            });
    });
    test("that it returns error when id is wrong", () => {
        return request(app)
            .put("/api/v1/contacts/5d39e5c21107aaa99981a671")
            .send(contact)
            .expect(404)
            .then(res => {
                expect(res.body).toEqual({
                    status: "fail",
                    message: "No Contact Found with that ID",
                    error: expect.any(Object),
                    stack: expect.any(String),
                });
            });
    });
});

describe("DELETE /api/v1/contacts/:contactId", () => {
    afterAll(async () => {
        await Contact.create({
            _id: "5d39e583f10212a8c0c2832b",
            first_name: "Mr",
            last_name: "delete",
            phone: "08039delete",
            email: "delete@gmail.com",
            str_address: "delete address city",
            gender: "Female",
            company_name: "deleton inc",
        });
    });
    test("that it deletes successfully", () => {
        return request(app)
            .delete("/api/v1/contacts/5d39e583f10212a8c0c2832b")
            .expect(204);
    });
    test("that it returns error when id is wrong", () => {
        return request(app)
            .delete("/api/v1/contacts/5d39e583b10212a8c0c2832a")
            .expect(404)
            .then(res => {
                expect(res.body).toEqual({
                    status: "fail",
                    message: "No Contact Found with that ID",
                    error: expect.any(Object),
                    stack: expect.any(String),
                });
            });
    });
});
