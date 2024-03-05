import './App.css'
import { Button } from '@mui/material'
import { Input } from './components/Input'


function App() {

  return (
    <div className='App'>
      <form className="form_container">
        <h1> Login </h1>
        <Input
          label="Username"
          type="text"
          fullWidth
        />
        <Input
          label="Password"
          type="text"
          fullWidth
        />
        <br />
        <br />
        <Button type='submit' variant="contained" color="secondary">
          Login
        </Button>
      </form>
    </div>
  )
}

export default App
