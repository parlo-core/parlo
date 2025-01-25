import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import SearchIcon from "@mui/icons-material/Search"
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useGetIdentity, useLogout } from "@refinedev/core"
import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from "@refinedev/mui"
import React, { useContext, useState } from "react"
import { ColorModeContext } from "../../contexts/color-mode"
import { DebounceInput } from "react-debounce-input"
import { useLocation, useNavigate } from "react-router-dom"

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

  const navigate = useNavigate()
  const location = useLocation()

  const isListPage = location.pathname === "/lists"

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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (isListPage) {
      navigate(`/lists?search_term=${value}`)
    }
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
          {isListPage && (
            <DebounceInput
              minLength={2}
              debounceTimeout={500}
              onChange={handleSearchChange}
              element={TextField}
              inputProps={{
                placeholder: "Search lists...",
                variant: "outlined",
                size: "small",
                sx: {
                  width: "300px",
                  height: "16px",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "lightgray" // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "gray" // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "darkblue", // Focus border color
                      borderWidth: "4px" // Slightly thicker border when focused
                    }
                  }
                },
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "gray" }} />
                    </InputAdornment>
                  )
                }
              }}
            />
          )}
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
