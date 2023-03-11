import React from 'react'
import { Button, Label, Card, TextInput } from 'flowbite-react'

const Singup = () => {
  return (
    <>
     <div className='min-h-[100vh] flex flex-col items-center justify-center'>
    <div className="max-w-sm ">
  <Card className='sm:w-[400px]'>
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="example@gmail.com"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="username"
            value="Username"
          />
        </div>
        <TextInput
          id="username"
          type="text"
          required={true}
          placeholder="username"
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password"
            value="Your password"
          />
        </div>
        <TextInput
          id="password"
          type="password"
          placeholder='***********'
          required={true}
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password2"
            value="Confirm password"
          />
        </div>
        <TextInput
          id="password2"
          type="password"
          placeholder='***********'
          required={true}
        />
      </div>
     
      <Button type="submit">
        Register
      </Button>
    </form>
  </Card>
</div>
    </div>
    </>
  )
}

export default Singup