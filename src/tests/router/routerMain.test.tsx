import { render, screen } from "@testing-library/react";
import RouterMain from "../../router/RouterMain";

describe("Test en componente RouterMain", () => {
 
    const component = () => {
        render(<RouterMain />);
    };
    
    beforeEach(() => {
        component();
    });

  test("Se deben mostrar los botones de menu", () => {
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/consultar pacientes/i)).toBeInTheDocument();
  });
});
