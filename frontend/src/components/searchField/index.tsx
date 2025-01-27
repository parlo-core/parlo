import React, { useState, useEffect } from "react"
import { TextField, InputAdornment } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate, useLocation } from "react-router-dom"

export const SearchField = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isListPage = location.pathname === "/lists"
  const isContactsPage = location.pathname.includes("/lists/show")
  const listId = isContactsPage ? location.pathname.split("/")[3] : null

  const [searchValue, setSearchValue] = useState<string>("")
  const [debouncedValue, setDebouncedValue] = useState<string>("")

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue)
    }, 1000)

    return () => {
      clearTimeout(handler)
    }
  }, [searchValue])

  useEffect(() => {
    if (isListPage) {
      if (debouncedValue === "") {
        // If the input is cleared, remove the search_term from the URL
        navigate(`/lists`)
      } else {
        // Otherwise, update the URL with the debounced search term
        navigate(`/lists?search_term=${debouncedValue}`)
      }
    }
    if (isContactsPage) {
      if (debouncedValue === "") {
        // If the input is cleared, remove the search_term from the URL
        navigate(`/lists/show/${listId}`)
      } else {
        // Otherwise, update the URL with the debounced search term
        navigate(`/lists/show/${listId}?search_term=${debouncedValue}`)
      }
    }
  }, [debouncedValue, isListPage, navigate, isContactsPage, listId])

  const searchPlaceholder = isListPage ? "Search lists..." : "Search contacts..."

  return (
    (isListPage || isContactsPage) ? (
      <TextField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={searchPlaceholder}
        variant="outlined"
        size="small"
        sx={{
          width: "300px",
          backgroundColor: "white",
          borderRadius: "12px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "lightgray",
              borderRadius: "12px"
            },
            "&:hover fieldset": {
              borderColor: "gray",
              borderRadius: "12px"
            },
            "&.Mui-focused fieldset": {
              borderColor: "gray",
              borderWidth: "3px",
              borderRadius: "12px"
            }
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "gray" }} />
            </InputAdornment>
          )
        }}
      />
    ) : null
  )
}
