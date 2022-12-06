import React, { FC } from 'react'
import { Button, FormGroup, Box, Table, TableHead, TableBody, TableCell } from '@mui/material'

const Sales: FC = () => {
    return (
        <div style={{ marginTop: "110px" }}>
            <FormGroup>

                <Button>Add Sales</Button>
            </FormGroup>
            <Box>
                <Table>
                    <TableHead>
                        <TableCell>
                            S.No
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <TableCell>1.</TableCell>
                    </TableBody>
                </Table>

            </Box>
        </div>
    )
}

export default Sales
