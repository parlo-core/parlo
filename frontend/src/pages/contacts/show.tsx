import { Stack, Typography } from "@mui/material"
import { useShow } from "@refinedev/core"
import {
  DateField,
  Show,
  TextFieldComponent as TextField
} from "@refinedev/mui"

export const ContactShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data.contact;

  return (
    <Show isLoading={isLoading}>
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
        <DateField value={record?.updated_at} format={"DD.MM.YYYY., hh:mm"}/>
      </Stack>
    </Show>
  )
}
