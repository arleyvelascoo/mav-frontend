import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Pageable } from '../model/Pageable';
import { City } from '../model/City';
import {
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import { HeadCell } from '../model/HeadCell';
import { createStyles, Theme } from '@material-ui/core/styles';

type Order = 'asc' | 'desc';

const headCells: HeadCell<City>[] = [
  {
    id: 'name',
    label: 'Nombre',
  },
  {
    id: 'code',
    label: 'Código',
  },
  {
    id: 'stateNamew',
    label: 'Departamento',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  })
);

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof City
  ) => void;
  classes: ReturnType<typeof useStyles>;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, classes, onRequestSort } = props;

  const createSortHandler =
    (property: keyof City) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      {headCells.map((headCell: HeadCell<City>) => (
        <TableCell
          key={headCell.id}
          sortDirection={orderBy === headCell.id ? order : false}
        >
          <TableSortLabel
            active={orderBy === headCell.id}
            direction={orderBy === headCell.id ? order : 'asc'}
            onClick={createSortHandler(headCell.id)}
          >
            {headCell.label}
            {orderBy === headCell.id ? (
              <span className={classes.visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </span>
            ) : null}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableHead>
  );
}

export default function CityPTable() {
  const classes = useStyles();
  const [page, setPage] = useState(20);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] = useState<keyof City>('stateNamew');
  const [rows, setRows] = useState<City[]>([]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof City
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    axios
      .get<Pageable<City>>(
        'http://localhost:8886/minstarleyvelasco/api/city/all?page=' +
          page +
          '&size=' +
          rowsPerPage +
          '&sort=' +
          orderBy +
          ',' +
          order
      )
      .then((response: AxiosResponse) => {
        setRows(response.data.content);
      });
  };

  useEffect(() => {
    axios
      .get<Pageable<City>>(
        'http://localhost:8886/minstarleyvelasco/api/city/all?page=' +
          page +
          '&size=' +
          rowsPerPage +
          '&sort=' +
          orderBy +
          ',' +
          order
      )
      .then((response: AxiosResponse) => {
        setPage(page);
        setRowsPerPage(rowsPerPage);
        setOrder(order);
        setOrderBy(orderBy);
        setRows(response.data.content);
      });
  }, []);
  return (
    <Container>
      <TableContainer>
        <Table>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            classes={classes}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {rows.map((row: City) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.stateNamew}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
