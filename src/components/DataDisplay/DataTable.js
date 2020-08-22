import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './DataTable.css'
function DataTable(props){
    const data = props.data
    if(data === undefined) return null;
        return(
            <div className="datatable">
            <TableContainer className="table-container" component={Paper} elevation={3}>
            <Table size='small' stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell size="small">State</TableCell>
                        <TableCell align="right">Confirmed</TableCell>
                        <TableCell align="right">Active</TableCell>
                        <TableCell align="right">Recovered</TableCell>
                        <TableCell align="right">Deaths</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.uid}>
                            <TableCell component="th" scope="row">
                                {row.provinceState}
                            </TableCell>
                            <TableCell align="right">{row.confirmed}</TableCell>
                            <TableCell align="right">{row.active}</TableCell>
                            <TableCell align="right">{row.recovered}</TableCell>
                            <TableCell align="right">{row.deaths}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
        )
}
export default DataTable;