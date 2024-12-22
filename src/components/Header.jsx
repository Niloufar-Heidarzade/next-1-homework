"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pink } from '@mui/material/colors'

const drawerWidth = 240;
const links = [
  { href: "/", title: "Home" },
  { href: "/store", title: "Store" },
  { href: "/support", title: "Support" },
  { href: "/about", title: "About" },
];

function Header() {
  const path = usePathname();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Image src={"/logo.png"} width={70} height={40} alt="logo" />
      </Box>
      <Divider />
      <List>
        {links.map((item) => (
          <Link key={item.title} href={item.href} style={{ color: "black", textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="header" position="relative" sx={{ backgroundColor: pink[200] }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Image src={"/hm-logo.png"} width={70} height={40} alt="logo" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {links.map((item) => {
              const activeStyle = { textDecoration: path === item.href ? "underline overline" : "none" };
              return (
                <Button key={item.title} sx={{ color: "#fff" }}>
                  <Link href={item.href} style={{ ...activeStyle, color: "white" }}>
                    {item.title}
                  </Link>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;