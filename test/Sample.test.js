// Require the express and supertest modules
const express = require('express')
const request = require('supertest')

// Create an instance of the express app
const app = express()

// Define a middleware function to log incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.path}`)
  next()
})

// Define the route handler for GET requests to '/nin'
app.get('/nin', (req, res) => {
  res.status(200).send('Confirm NCRA NIN data')
})

// Define the Jest test case
describe('should get confirm ncra nin data', () => {
  it('confirm api', async () => {
    const response = await request(app).get('/nin')
    console.log(response)
    expect(response.statusCode).toBe(200)
  })
})
