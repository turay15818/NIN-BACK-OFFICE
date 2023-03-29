const app =require ('./index.js')
const supertest =require('supertest')
const request =supertest(app)

describe('admin test',() =>{
    describe('admin login process', () =>{

        const jsonBody ={
            userEmail:"men270992@gmail.com",
            userPassword:"123456Ab@"
        }

        const jsonBodyy ={
            userEmail:"men270992@gmail.com",
            userPassword:"123456Ab@"
        }

        const bod ={
            userEmail:"men270992@gmail.com",
            userPassword:"123456Ab@"
        }

        const body ={
            userEmail:"men270992@gmail.com",
            userPassword:"123456Ab@"
        }

        it.skip('should return a status after the login is successful', async() =>{
            const {statusCode} = await supertest(app).post('/login').send(bod);
            expect(statusCode).toBe(200)
            
        })
    })

  
})

describe('get all users', () =>{
    it.skip('it should get all users', async() =>{
        const response = await request.get('/users')
        console.log(response)
        expect(response.statusCode).toBe(200)
    })
   
})

describe('create users', () =>{
    it.skip('should create or add users successfully', async() =>{
        const response =await request.post('/users')
        .send({
            "userIDD":"OSL2023",
            "userName":"Musa Nfa",
            "userEmail":"nfa@gmail.com",
            "userPhone":"23278383838",
            "userPassword":"1234567Bc@",
            "confPassword":"1234567Bc@",
            "role":"admin"
        })
        expect(response.statusCode).toBe(201)
        console.log(response)
    })
})

describe('create users', () =>{
    it.skip('should create or add users successfully', async() =>{
        const response =await request.patch('/users/540')
        .send({
            "userIDD":"OSL2023",
            "userName":"Musa Nfa Turay Kenema",
            "userEmail":"nfa@gmail.com",
            "userPhone":"23278383800",
            "userPassword":"123456Bc@",
            "confPassword":"123456Bc@",
            "role":"admin"
        })
        expect(response.statusCode).toBe(200)
        console.log(response)
    })
})

describe('should delete user by ID', () =>{
    it.skip("should delete users", async()=>{
        const response = await request.delete('/users/541')
        expect(response.statusCode).toEqual(200)
        console.log(response)
    })
})

describe('forgot password', () => {
    it.skip('should send an email to the user with a password reset link', async () => {
      const response = await request.post('/forgotPassword')
        .send({ "userEmail": 'men270992@gmail.com' });
  
      expect(response.statusCode).toBe(200);
      console.log(response)

    }, 100000);
  });

describe('update your password', () => {
    it.skip('should update your password after the link is sent to you', async () => {
      const response = await request.post('/reset-password/:token')
        .send({ 
            "userPassword": '1234567Ab@',
            "confPassword":"1234567Ab"
         });
      expect(response.statusCode).toBe(200);
      console.log(response)
    }, 10000);
  });


  describe('should get confirm ncra nin data', () =>{
    it.skip('confirm api', async() =>{
     const response = await request.get('/nin')
     console.log(response)
    expect(response.statusCode).toBe(200)

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
        expect(response).toBe(200)
    })
})



describe('report through search', () => {
    it('should search through sart date and end date', async () => {
      const response = await request.post('/ninSearch')
        .send({ 
            "startDate": '2023-03-10 14:41:43',
            "endDate":"2023-03-20 11:51:33"
         });
      expect(response.statusCode).toBe(200);
      console.log(response)
    }, 10000);
  });




describe('report through search by NIN', () => {
    it.skip('should search through NCRA NIN', async () => {
      const response = await request.post('/ninSearchh')
        .send({ 
            "userId": 'e1234e7880'
            
         });
      expect(response.statusCode).toBe(200);
      console.log(response)
    }, 10000);
  });


