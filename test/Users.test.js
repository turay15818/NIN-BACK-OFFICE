const app = require('./index')
const supertest =require('supertest')
const request = supertest(app)

describe('users login process', () =>{
    const jon ={
        userEmail:"werdev12@gmail.com",
        userPassword:"12345Abc@"
    }


    it.skip('should return a status after the login is successful', async() =>{
        const {statusCode} = await supertest(app).post('/login').send(jon);
        expect(statusCode).toBe(200)
    })
})


describe('should get ncra data that is confirm by customers of orange sl', () =>{
    it.skip('should get all data from ncra nin', async() =>{
        const response = await request.get('/nin')
        console.log(response)
        expect(response.statusCode).toBe(200)
    })
})


describe('should get confirm ncra nin data', () =>{
    it.skip('confirm api', async() =>{
        const response = await request.get('/dataByConfirmed')
        console.log(response)
        expect(response.statusCode).toBe(200)
    })
})


describe('should get reject ncra nin data', () =>{
    it.skip('reject api', async() =>{
        const response = await request.get('/dataByRejected')
        expect(response.statusCode).toBe(200)
    })
})

// describe('create ncra data sample', () =>{
//     it.skip('should create or add users successfully', async() =>{
//         const response =await request.post('/nin')
//         .send({
//             "confirmnininfo_by_customer":"confirm",
//             "date_created":"2023-03-20 10:56",                                         
//             "dateofbirth":"2000-03-21",
//             "fullname":"Abass Turay",
//             "gender":"male",
//             "id_number":"e1234e7890",
//             "id_type":"Passport",
//             "nationality":"sierra leonean",
//             "permanent_residential_address":"wellington"
            
//         })
//         expect(response.statusCode).toBe(201)
//     })
// })

describe('should confirm data if it matches with the orange data', () =>{
    it.skip('should update data',async() =>{
        const response = await request.patch('/nin/8')
        .send({
            "confirmName" :"Musa Men",
            "confirm" :"confirmed",
            "confirmDate" :"2023-03-20 11:55",
        })
        expect(response.statusCode).toBe(200)
    })
})

