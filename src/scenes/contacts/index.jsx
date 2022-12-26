import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataContacts} from "../../data/mockData"

import Header from "../../components/Header";


const Contacts = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns = [
        {field: "id", headerName: "ID", flex: 0.5},
        {field: "registrarId", headerName: "Register ID"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "age", headerName: "Age", type:"number", headerAlign: "left", align: "left"},
        {field: "phone", headerName: "Phone", flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        {field: "address", headerName: "Address"},
        {field: "city", headerName: "City"},
        {field: "zipCode", headerName: "Zip Code"},
       
    ]

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts for future referrence" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{ 
                    "& .MuiDataGrid-root":{
                        border: 'none'
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column--cell":{
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders":{
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                        color: colors.gray[100]
                    }
                 }}
            >
                <DataGrid 
                rows={mockDataContacts}
                columns={columns}
                components={{ Toolbar: GridToolbar }} 
                >

                </DataGrid> 
            </Box>
        </Box>
    )
}

export default Contacts