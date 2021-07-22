import React, { useEffect } from 'react';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from '@material-ui/core';
import axios, { AxiosResponse } from 'axios';
import { Pageable } from '../model/Pageable';
import { City } from '../model/City';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function CityTable() {
  const [cities, setCities] = React.useState<City[]>([] as City[]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get<Pageable<City>>(
        'http://localhost:8886/minstarleyvelasco/api/city/all'
      )
      .then((response: AxiosResponse) => {
        setCities(response.data.content);
      });
  }, []);
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Código</TableCell>
              <TableCell align="right">Departamento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cities.map((row: City) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.code}</TableCell>
                <TableCell align="right">{row.stateNamew}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default CityTable;
