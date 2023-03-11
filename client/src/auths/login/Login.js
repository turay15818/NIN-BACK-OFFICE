import React from 'react'
import { Button, Label, Checkbox, Card, TextInput } from 'flowbite-react'

//Router
import { Link } from 'react-router-dom'

const Login = () => {
  return (
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
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          type="password"
          placeholder='***********'
          required={true}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Button type="submit">
        Login
      </Button>
    </form>
  </Card>
</div>

<Link to="/signup">SIGNUP</Link>
    </div>
  )
}

export default Login