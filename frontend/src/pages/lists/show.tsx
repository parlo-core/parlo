import { Button, Stack, Typography, useTheme } from "@mui/material"
import { useShow } from "@refinedev/core"
import {
  DateField,
  Show,
  TextFieldComponent as TextField
} from "@refinedev/mui"
import { ContactList } from "../contacts"
import { useNavigate } from "react-router-dom"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import React from "react"

export const ListShow = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const { queryResult } = useShow()
  const { data, isLoading } = queryResult
  const record = data?.data.list
  const listId = record?.id

  return (
    <>
      <Show isLoading={isLoading} goBack={<IconButton onClick={() => navigate("/lists")}>
        <ArrowBackIcon />
      </IconButton>}>
        <Stack gap={1}>
          <Typography variant="body1" fontWeight="bold">
            {"List Name"}
          </Typography>
          <TextField value={record?.name} />
          <Typography variant="body1" fontWeight="bold">
            {"Created At"}
          </Typography>
          <DateField value={record?.created_at} format={"DD.MM.YYYY., hh:mm"} />
          <Typography variant="body1" fontWeight="bold">
            {"Last Updated At"}
          </Typography>
          <DateField value={record?.updated_at} format={"DD.MM.YYYY., hh:mm"} />
        </Stack>
      </Show>

      {/* Header section for Contacts list with right-aligned Create button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={theme.spacing(3)}
           mb={theme.spacing(2)}>
        <Typography variant="h6">Contacts in this List</Typography>
        <Button
          variant="contained"
          onClick={() => navigate(`/lists/show/${listId}/contacts/create`)}
          startIcon={<AddBoxOutlinedIcon />}
        >
          Create Contact
        </Button>
      </Box>
      {listId ? <ContactList listId={listId} /> : <p>No contacts available.</p>}
    </>
  )
}
