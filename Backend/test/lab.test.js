const div = require('./division');

describe("Test example", () => {
    test('div 6/3 to equal 2', () => {
        expect(div(6, 3)).toBe(2);
    });

    test('div 6/3 to equal 2', () => {
        expect(div(1, 0)).toBe(Infinity);
    });

});

const request = require("supertest");

const app = require("../App");
 jest.setTimeout(30000);
// describe("Test example", () => {
//     test("GET /", (done) => {
//       request(app)
//         .get("/home")
//         .expect("Content-Type", /json/)
//         .expect(200)
//         // More logic goes here
//     });
//     // More things come here
//   });
// describe("Test example", () => {
//     // Hidden for simplicity
//     test("POST /send", (done) => {
//       request(app)
//         .post("/create")
//         .expect("Content-Type", /json/)
//         .send({
//         Name:"Marky",
//           Email: "francisco@example.com",
//             Age:22,
//             BornIn: "embare7",
//             LivesIn:"om el donya",
//             MaritalStatus:"it's complicated",
//             PhoneNumber:"07775000",
//             // Job:"slave"
//         })
//         // .expect("user created")
//         .expect(200)
//         // Even more logic goes here
//     });
//     // More things come here
//   });

describe("Test example", () => {
    test("GET /", (done) => {
      request(app)
        .get("/allflights")
        .expect("Content-Type", /json/)
        // .expect('Successful response.')
        // More logic goes here
    });
    // More things come here
  });