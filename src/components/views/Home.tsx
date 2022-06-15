import React, { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import Text from "../Text";
import { Btn, Row } from "./styles";
import { calculateDiagnosis } from "../../helpers/calculateDiagnosis";
import { useForm } from "../../hooks/useForm";
import { IForm } from "../../interfaces/IForm";

const Home = () => {
  const [msgError, setMsgError] = useState("");
  const [resultDiagnosis, setResultDiagnosis] = useState("");
  const { formData: form, handleOnChange, resetForm, validateString, validatePercent } = useForm<IForm>({
    name: "",
    docId: "",
    fat: 0,
    sugar: 0,
    oxygen: 0,
  });

  const users = useRef<IForm[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users") || "[]")
    users.current= data;
  }, [])
  

  const handleSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setResultDiagnosis("")

    if(users.current.some(user=> user.docId === form.docId)){
      return setMsgError("El documento ingresado ya existe");
    }

    if (!validateString(form.name)) return setMsgError("El nombre es requerido");
    if (!validateString(form.docId)) return setMsgError("El documento es requerido");
    if (!validatePercent(form.sugar)) return setMsgError("Porcentajes no son validos deben estar entre 0-100");
    if (!validatePercent(form.fat )) return setMsgError("Porcentajes no son validos deben estar entre 0-100");
    if (!validatePercent(form.oxygen)) return setMsgError("Porcentajes no son validos deben estar entre 0-100");

    const risk = calculateDiagnosis(form, setResultDiagnosis);
    const user = Object(form);
    user["risk"] = risk;

    users.current.push(user)
    localStorage.setItem("users", JSON.stringify(users.current))
    setMsgError("");
  };

  return (
    <>
      <Text
        fontSize={"2rem"}
        fontWeight={"bold"}
        marginTop={"2rem"}
        marginBottom={"1rem"}
        textAlign={'center'}
      >
        Registrar examenes de laboratorio
      </Text>
      <Box
        component={"form"}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        textAlign={'center'}
        noValidate
        autoComplete="off"
      >
        <TextField
          color="primary"
          id="name"
          label="Nombre"
          margin="dense"
          onChange={(e) => handleOnChange(e)}
          variant="outlined"
          value={form.name}
        />
        <TextField
          color="primary"
          id="docId"
          label="Documento"
          margin="dense"
          onChange={(e) => handleOnChange(e)}
          value={form.docId}
          variant="outlined"
        />
        <TextField
          color="primary"
          id="sugar"
          label="Porcentaje de azúcar"
          margin="dense"
          onChange={(e) => handleOnChange(e)}
          type={"number"}
          variant="outlined"
          value={form.sugar}
        />
        <TextField
          color="primary"
          data-testid="input-fat"
          id="fat"
          label="Porcentaje de grasa"
          margin="dense"
          onChange={(e) => handleOnChange(e)}
          type={"number"}
          variant="outlined"
          value={form.fat}
        />
        <TextField
          color="primary"
          id="oxygen"
          label="Porcentaje de oxígeno"
          margin="dense"
          onChange={(e) => handleOnChange(e)}
          type={"number"}
          variant="outlined"
          value={form.oxygen}
        />
      </Box>

      {msgError.length > 0 && 
        <Text color={"red"} marginLeft={"10px"} data-testid="msg-error">{msgError}</Text>
      }
      {resultDiagnosis.length > 0 && (
        <Text color={"#1a76d2"} marginRight={"10px"} marginLeft={"10px"} data-testid="msg-diagnostico">
          {resultDiagnosis}
        </Text>
      )}

      <Row>
        <Btn variant="contained" onClick={handleSubmit} data-testid="btn-guardar">
          Guardar
        </Btn>
        <Btn variant="contained" onClick={resetForm}>Limpiar</Btn>
      </Row>
    </>
  );
};

export default Home;
