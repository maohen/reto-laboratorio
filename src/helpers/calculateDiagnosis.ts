import { IForm } from "../interfaces/IForm";

export const calculateDiagnosis = (
  fields: IForm,
  setResultDiagnosis: React.Dispatch<React.SetStateAction<string>>
) => {

  const { docId, fat, oxygen, sugar } = fields;

  if(sugar > 70 && fat > 88.5 && oxygen < 60){
    setResultDiagnosis(`El paciente identificado con ${docId} tiene un riesgo ALTO de enfermar gravemente`)
    return "Alto"
  } else if(sugar < 50 && fat < 62.2 && oxygen > 70){
    setResultDiagnosis(`El paciente identificado con ${docId} tiene un riesgo BAJO de enfermar gravemente`)
    return "Bajo"
  } else {
    setResultDiagnosis(`El paciente identificado con ${docId} tiene un riesgo MEDIO de enfermar gravemente`)
    return "Medio"
  }

};