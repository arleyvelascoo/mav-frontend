import React, { useEffect, useState } from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@material-ui/core';
import axios, { AxiosResponse } from 'axios';
import {Pageable} from '../model/Pageable';
import {Ministry} from '../model/Ministry';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

class Ministr implements Pageable<Ministry>{
}

const [ministries, setMinistries]: [Pageable<Ministry>, (ministries: Pageable<Ministry>) => void] = useState(new Ministr());

const PersonList = () => {

  const classes = useStyles();
  useEffect(() => {
    axios
    .get<Pageable<Ministry>>(
      'http://localhost:8886/minstarleyvelasco/api/country/all'
    )
    .then((response: AxiosResponse) => {
      setMinistries(response.data);
    });
    console.log('works');
  }, []);
  return (
    <Container>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ministries.content.map((row: Ministry) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.firstLeaderName}
              </TableCell>
              <TableCell align="right">{row.secondLeaderName}</TableCell>
              <TableCell align="right">{row.idHigherMinistry}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
};

export default PersonList;
