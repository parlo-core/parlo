import { DataGrid, GridColDef } from "@mui/x-data-grid"
import {
  DeleteButton,
  EditButton,
  ShowButton,
  useDataGrid
} from "@refinedev/mui"
import React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

interface IContact {
  id: string;
  name: string;
  status: "subscribed" | "unsubscribed";
  email: string;
  created_at: Date;
  updated_at: Date;
}

interface ContactListProps {
  listId?: string | undefined;
}

export const ContactList = ({ listId }: ContactListProps) => {
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get("search_term") || ""
  const navigate = useNavigate();

  const { dataGridProps } = useDataGrid<IContact>({
    resource: "contacts",
    filters: {
      permanent: [
        {
          field: "list_id",
          operator: "eq",
          value: listId
        },
        {
          field: "search_term",
          operator: "contains",
          value: searchTerm
        }
      ]
    }
  })

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
              <EditButton hideText onClick={() => navigate(`/lists/show/${listId}/contacts/edit/${row.id}`)} />
              <ShowButton hideText onClick={() => navigate(`/lists/show/${listId}/contacts/show/${row.id}`)} />
              <DeleteButton hideText recordItemId={row.id} resource={"contacts"} />
            </>
          )
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80
      }
    ],
    [navigate, listId]
  )

  return (
    <DataGrid {...dataGridProps} columns={columns} autoHeight />
  )
}
