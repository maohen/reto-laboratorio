import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe("Tests en customHook useForm", () => {
  const initialForm = {
    name: "Mauricio",
    docId: "102045",
    fat: 20,
    sugar: 30,
    oxygen: 80,
  };

  test("debe de regresar el objeto por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      formData: initialForm,
      handleOnChange: expect.any(Function),
      resetForm: expect.any(Function),
      validateString: expect.any(Function),
      validatePercent: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const newValue = "Ricardo";
    const { result } = renderHook(() => useForm(initialForm));
    const { handleOnChange } = result.current;

    act(() => {
      handleOnChange({ id: "name", value: newValue });
    });

    expect(result.current.formData.name).toBe(newValue);
  });

  test("debe de resetear el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { resetForm, handleOnChange } = result.current;

    act(() => {
      handleOnChange({ id: "name", value: "Ricardo" });
      resetForm();
    });

    expect(result.current.formData.name).toBe(initialForm.name);
  });

  test("Debe de devolver false al ejecutar la funcion ValidatePercent", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { validatePercent, formData } = result.current;
    expect(validatePercent(formData.fat + 100)).toBe(false);
  });

  test("Debe de devolver true al ejecutar la funcion ValidateString", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { validateString, formData } = result.current;
    expect(validateString(formData.docId)).toBe(true);
  });

});
