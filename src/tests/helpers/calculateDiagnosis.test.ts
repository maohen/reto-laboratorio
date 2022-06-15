import * as React from 'react';
import { calculateDiagnosis } from '../../helpers/calculateDiagnosis';
import { IForm } from '../../interfaces/IForm';

describe('Pruebas a funcion calculateDiagnosis', () => { 
    test('Debe retornar riesgo BAJO', () => { 
        const fields:IForm = { name:"az", docId: "188098", fat:30, oxygen: 80, sugar:45 }
        const setStateMock = jest.fn();
        const useStateMock: any = (useState: any)=> [useState, setStateMock];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        expect(calculateDiagnosis(fields, setStateMock)).toBe("Bajo");
     })
 })