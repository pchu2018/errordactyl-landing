import { Switch } from '@mui/material';

export default function NavBar() {
  return (
    <div id="navbar">
      <img id='edact' src='edact_r.png'></img>
      <div id='links'>
        <a className="nav link">Download the VSCode Extension</a>
        <a className="nav link" href='https://github.com/oslabs-beta/errordactyl'>GitHub</a>
        <a className="nav link" href='https://www.linkedin.com/company/errordactyl-os-labs'>LinkedIn</a>
      </div>
      
    </div>
  )
}