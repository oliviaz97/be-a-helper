import {describe, test} from "@jest/globals";
const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
    test("Response to the GET request", () => {
        return request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Hunger charities request", () => {
        return request(app)
            .get("/Hunger")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Education charities request", () => {
        return request(app)
            .get("/Education")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Multi-Purpose charities request", () => {
        return request(app)
            .get("/Multi-Purpose")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET LGBTQ charities request", () => {
        return request(app)
            .get("/LGBTQ")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Medical charities request", () => {
        return request(app)
            .get("/Medical")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Disability charities request", () => {
        return request(app)
            .get("/LGBTQ")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Reproductive-Health charities request", () => {
        return request(app)
            .get("/Reproductive-Health")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Mental-Health charities request", () => {
        return request(app)
            .get("/Mental-Health")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Civil-Rights charities request", () => {
        return request(app)
            .get("/Civil-Rights")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Human-Rights charities request", () => {
        return request(app)
            .get("/Human-Rights")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Animals charities request", () => {
        return request(app)
            .get("/Animals")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Environment charities request", () => {
        return request(app)
            .get("/Environment")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Disaster-Relief charities request", () => {
        return request(app)
            .get("/Civil-Rights")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET Homelessness charities request", () => {
        return request(app)
            .get("/Homelessness")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET login info request", () => {
        return request(app)
            .get("/login")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET user info request", () => {
        return request(app)
            .get("/users")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    test("Response to the GET activities info request", () => {
        return request(app)
            .get("/activities")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });


});