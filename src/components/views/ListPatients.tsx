import React, { useEffect, useRef, useState } from "react";
import Text from "../Text";
import { IForm } from "../../interfaces/IForm";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { Btn } from "./styles";

const ListPatients = () => {
  const [users, setUsers] = useState<IForm[]>([])
  const { formData: form, handleOnChange} = useForm({
    field: "",
  });
  const usersRef = useRef<IForm[]>([]);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(data);
    usersRef.current = data;
  }, []);

  const handleFilter = () =>{
    const usersFiltered = usersRef.current.filter(user => user.docId.includes(form.field));
    setUsers(usersFiltered);
  }
  return (
    <>
      <Text
        fontSize={"2rem"}
        fontWeight={"bold"}
        marginTop={"2rem"}
        marginBottom={"1rem"}
      >
        Consulta de pacientes
      </Text>
      <Box display={'flex'} flexDirection={'row'} padding={"1rem"}>
        <TextField
            color="secondary"
            id="field"
            label="Filtrar por documento"
            margin="dense"
            onChange={(e) => handleOnChange(e)}
            sx={{padding: "5px"}}
            variant="outlined"
            value={form.field}
          />
          <Btn variant="contained" onClick={handleFilter} data-testid="btn-search">Buscar</Btn>

      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id Documento</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Grasa&nbsp;(%)</TableCell>
              <TableCell align="right">Azúcar&nbsp;(%)</TableCell>
              <TableCell align="right">oxígeno&nbsp;(%)</TableCell>
              <TableCell align="right">Riego</TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="table-pacientes">
            {users.map((row) => (
              <TableRow
                key={row.docId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.docId}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.sugar}</TableCell>
                <TableCell align="right">{row.oxygen}</TableCell>
                <TableCell align="right">{row.risk}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListPatients;
