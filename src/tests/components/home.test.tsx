import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../../components/views/Home";

describe("Test en componente Home", () => {
  const component = () => {
    render(<Home />);
  };
  beforeEach(() => {
    component();
  });

  test("Valida que todos los campos esten completos y muestra el mensaje del diagnostico", () => {
    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: "Mhenao" },
    });
    fireEvent.change(screen.getByLabelText(/documento/i), {
      target: { value: "102045" },
    });
    fireEvent.change(screen.getByLabelText(/porcentaje de grasa/i), {
      target: { value: 88 },
    });
    fireEvent.click(screen.getByTestId("btn-guardar"));
    expect(screen.getByTestId("msg-diagnostico")).toBeInTheDocument();
  });

  test("Valida que el documento ya se encuentra en la db", () => {
    fireEvent.change(screen.getByLabelText(/documento/i), {
      target: { value: "102045" },
    });
    fireEvent.click(screen.getByTestId("btn-guardar"));
    expect(screen.getByTestId("msg-error").innerHTML).toEqual(
      "El documento ingresado ya existe"
    );
  });

  test("Valida que el campo nombre esta vacio", () => {
    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: "" },
    });
    fireEvent.click(screen.getByTestId("btn-guardar"));
    expect(screen.getByTestId("msg-error").innerHTML).toEqual(
      "El nombre es requerido"
    );
  });

  test("Valida que el campo cedula esta vacio", () => {
    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: "Mhenao" },
    });
    fireEvent.change(screen.getByLabelText(/documento/i), {
      target: { value: "" },
    });
    fireEvent.click(screen.getByTestId("btn-guardar"));
    expect(screen.getByTestId("msg-error").innerHTML).toEqual(
      "El documento es requerido"
    );
  });

  test("Valida que el valor campo nivel de grasa es mayor a 100", () => {
    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: "Mhenao" },
    });
    fireEvent.change(screen.getByLabelText(/documento/i), {
      target: { value: "108090" },
    });
    fireEvent.change(screen.getByLabelText(/porcentaje de grasa/i), {
      target: { value: 102 },
    });
    fireEvent.click(screen.getByTestId("btn-guardar"));
    expect(screen.getByTestId("msg-error").innerHTML).toEqual(
      "Porcentajes no son validos deben estar entre 0-100"
    );
  });
});
