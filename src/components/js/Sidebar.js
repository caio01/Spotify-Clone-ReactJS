import "./../css/Sidebar.css";
import { Link } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";


const Header = () => {
  
  return (
    <>
      <div className="side">
        <ProSidebar>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />}><Link to="/" />Home</MenuItem>
              <MenuItem icon={<FaList />}>Playlists</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Likes Musics</MenuItem>
              <MenuItem icon={<RiPencilLine />}><Link to="/support" />FAQ</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;