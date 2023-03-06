import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Box, IconButton, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

type ItemProps = {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Dashboard");

  const Item = ({
    title,
    to,
    icon,
    selected,
    setSelected,
  }: ItemProps): JSX.Element => {
    return (
      <MenuItem
        component={<Link to={to} />}
        active={selected === title}
        style={{ color: "#141414" }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography sx={{ fontSize: "12px" }}>{title}</Typography>
      </MenuItem>
    );
  };

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: "#fcfcfc !important",
        },
        "& .ps-menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-label": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
        "& .ps-active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar defaultCollapsed={isCollapsed}>
        <Menu>
          {/* Logo and menu icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "#141414",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  variant="h3"
                  sx={{ fontSize: "24px" }}
                  color="#141414"
                >
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* User */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="/assets/pexels-anna-shvets-4672491.jpg"
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color="#141414"
                  fontWeight="bold"
                  sx={{ fontSize: "24px", m: "10px 0 0 0" }}
                >
                  Jane Meldrum
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "16px" }}
                  color="secondary.main"
                >
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color="#3d3d3d"
              sx={{ m: "15px 0 5px 20px", fontSize: "14px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color="#3d3d3d"
              sx={{ m: "15px 0 5px 20px", fontSize: "14px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color="#3d3d3d"
              sx={{ m: "15px 0 5px 20px", fontSize: "14px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
