import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ListPatients from '../../components/views/ListPatients';

describe("Pruebas en componente de listado de clientes", () => {

    const component = () => {
        render(<ListPatients />);
      };
      beforeEach(() => {
        component();
      });

  const dataUsers = [
    {
      name: "alonso",
      docId: "10205",
      fat: 0,
      sugar: "80",
      oxygen: 0,
      risk: "Medio",
    },
    {
      name: "mauro",
      docId: "102086",
      fat: "30",
      sugar: "40",
      oxygen: "71",
      risk: "Bajo",
    },
    {
      name: "andrea",
      docId: "102086a",
      fat: "45",
      sugar: "40",
      oxygen: "71",
      risk: "Bajo",
    },
    {
      name: "sandra",
      docId: "256896",
      fat: "90",
      sugar: "80",
      oxygen: "50",
      risk: "Alto",
    },
    {
      name: "sandra",
      docId: "2568969",
      fat: "90",
      sugar: "80",
      oxygen: "50",
      risk: "Alto",
    },
  ];
  localStorage.setItem("users", JSON.stringify(dataUsers))

  test("Debe mostrar la tabla de pacientes", () => {
    const tablePacientes = screen.getByTestId("table-pacientes")
    expect(tablePacientes).toBeInTheDocument();
  });

  test('Debe mostrar 5 registros', () => {
    // eslint-disable-next-line testing-library/no-node-access
    const rowsContainerLength = screen.getByTestId('table-pacientes').children.length;
    expect(rowsContainerLength).toBe(5);
    });

  test('Debe filtrar por documento y mostrar un solo registro', () => {

    fireEvent.change(screen.getByLabelText(/filtrar por documento/i), {
        target: { value: "2568969" },
    });
    fireEvent.click(screen.getByTestId("btn-search"));
    
    // eslint-disable-next-line testing-library/no-node-access
    const rowsContainerLength = screen.getByTestId('table-pacientes').children.length;
    expect(rowsContainerLength).toBe(1);
    });

  test('Debe traer todos los registros al no mandar un valor en el input', () => {

    fireEvent.change(screen.getByLabelText(/filtrar por documento/i), {
        target: { value: "" },
    });
    fireEvent.click(screen.getByTestId("btn-search"));
    
    // eslint-disable-next-line testing-library/no-node-access
    const rowsContainerLength = screen.getByTestId('table-pacientes').children.length;
    expect(rowsContainerLength).toBe(5);
    });

});
