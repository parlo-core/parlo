import { DataGrid, GridColDef } from "@mui/x-data-grid"
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid
} from "@refinedev/mui"
import React from "react"

interface IContact {
  id: string;
  name: string;
  status: "subscribed" | "unsubscribed";
  email: string;
  created_at: Date;
  updated_at: Date;
}

interface ContactListProps {
  listId: number;
}

export const ContactList = ({listId}: ContactListProps) => {
  const { dataGridProps } = useDataGrid<IContact>({ resource: "contacts", filters: [{ field: "listId", operator: "eq", value: listId }] })

  const columns = React.useMemo<GridColDef<IContact>[]>(
    () => [
      {
        field: "name",
        flex: 1,
        headerName: "Contact name",
        minWidth: 200
      },
      {
        field: "email",
        flex: 1,
        headerName: "Email",
        minWidth: 200
      },
      {
        field: "status",
        flex: 1,
        headerName: "Status",
        minWidth: 200
      },
      {
        field: "created_at",
        flex: 1,
        headerName: "Created at",
        valueFormatter: ({ value }) => new Date(value as string).toLocaleString(),
        minWidth: 200
      },
      {
        field: "updated_at",
        flex: 1,
        headerName: "Updated at",
        valueFormatter: ({ value }) => new Date(value as string).toLocaleString(),
        minWidth: 200
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          )
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80
      }
    ],
    []
  )

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  )
}
