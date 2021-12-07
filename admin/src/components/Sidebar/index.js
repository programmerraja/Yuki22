import React,{useState} from "react";
import { IconButton } from "@material-ui/core";
import "./style.css"
import { Link } from 'react-router-dom'
import { Menu, Settings, Home ,Business} from "@material-ui/icons";
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleIcon from '@material-ui/icons/People';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={!expanded?"sidebar position-fixed":"expanded sidebar position-fixed"}>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        {expanded?<h3 className='label'>Dashboard</h3>:null}
        <IconButton onClick={()=>expanded?setExpanded(false):setExpanded(true)}>
          <Menu />
        </IconButton>
      </div>
      <div className='Sidemenu'>
        {expanded?<Link to="/yukiAdmin" className='menu-bars'>
          <Home className='icons'/>
          <span className='sidebar-text'>Home</span>
        </Link>:<Link to ="/yukiAdmin" ><Home className="icon-collapsed"/></Link>}
      </div>

      <div className='Sidemenu'>
        {expanded?<Link to="/yukiAdmin" className='menu-bars'><PeopleIcon className='icons'/>
          <span className='sidebar-text'>Users</span>
        </Link>:<Link to ="/yukiAdmin/users"><PeopleIcon className="icon-collapsed"/></Link>}
      </div>

      

      <div className='Sidemenu'>
        {expanded?<Link to="/yukiAdmin" className='menu-bars'><Business className='icons'/>
          <span className='sidebar-text'>Companies</span>
        </Link>:<Link to ="/yukiAdmin/companies"><Business className="icon-collapsed"/></Link>}
      </div>

      <div className='Sidemenu'>
        {expanded?<Link to="/logout" className='menu-bars'><ExitToAppIcon className='icons'/>
          <span className='sidebar-text'>Logout</span>
        </Link>:<Link to ="/yukiAdmin/user/logout"><ExitToAppIcon className="icon-collapsed"/></Link>}
      </div>
    </div>
  );
}
