import React from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid
} from "@refinedev/mui"
import { useSearchParams } from "react-router-dom"

interface IList {
  id: number;
  name: string;
  updatedAt: Date;
  createdAt: Date;
}

export const ListList = () => {
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get("search_term") || ""

  const { dataGridProps } = useDataGrid<IList>({
    resource: "lists",
    filters: {
      permanent: [
        {
          field: "search_term",
          operator: "contains",
          value: searchTerm
        }
      ]
    },
  })

  const columns = React.useMemo<GridColDef<IList>[]>(
    () => [
      {
        field: "name",
        flex: 1,
        headerName: "List name",
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
