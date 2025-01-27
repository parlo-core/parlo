import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useGetIdentity, useLogout } from "@refinedev/core"
import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from "@refinedev/mui"
import React, { useContext, useState } from "react"
import { ColorModeContext } from "../../contexts/color-mode"
import { SearchField } from "../searchField"

type IUser = {
  id: number;
  firstName: string;
  lastName: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  sticky = true,
}) => {
  const { mode, setMode } = useContext(ColorModeContext);

  const { data: user } = useGetIdentity<IUser>()
  const { mutate: logout } = useLogout()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const fullUserName =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : ""

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    handleMenuClose()
    logout()
  }

  return (
    <AppBar position={sticky ? "sticky" : "relative"}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <HamburgerMenu />
          <SearchField />
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton
              color="inherit"
              onClick={() => {
                setMode()
              }}
            >
              {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
            </IconButton>
            {fullUserName && (
              <Stack
                direction="row"
                gap="16px"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      sm: "inline-block",
                      cursor: "pointer"
                    }
                  }}
                  variant="subtitle2"
                  onClick={handleMenuOpen}
                >
                  {fullUserName}
                </Typography>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
