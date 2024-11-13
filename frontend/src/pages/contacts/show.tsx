import { Stack, Typography } from "@mui/material"
import { useShow } from "@refinedev/core"
import {
  DateField,
  Show,
  TextFieldComponent as TextField
} from "@refinedev/mui"
import { useNavigate, useParams } from "react-router-dom"
import React from "react"
import IconButton from "@mui/material/IconButton"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

export const ContactShow = () => {
  const { listId, contactId } = useParams()
  const navigate = useNavigate()
  const { queryResult } = useShow({
    resource: "contacts",
    id: contactId
  })
  const { data, isLoading } = queryResult
  const record = data?.data.contact

  return (
    <Show isLoading={isLoading} goBack={<IconButton onClick={() => navigate(`/lists/show/${listId}`)}>
      <ArrowBackIcon />
    </IconButton>}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"Name"}
        </Typography>
        <TextField value={record?.name} />
        <Typography variant="body1" fontWeight="bold">
          {"Email"}
        </Typography>
        <TextField value={record?.email} />
        <Typography variant="body1" fontWeight="bold">
          {"Status"}
        </Typography>
        <TextField value={record?.status} />
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
  )
}
