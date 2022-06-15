import axios, { AxiosError, AxiosResponse, AxiosStatic } from "axios";
import { loadDataIp } from '../../api/axios/loadData';

jest.mock('axios');

describe('Obtener IP', () => { 
    let mockedAxios: jest.Mocked<AxiosStatic>

    beforeEach(()=> {
        mockedAxios =axios as jest.Mocked<typeof axios>
        jest.resetAllMocks()
    })

    test('debe devolver la direccion ip', (done) => { 
        const mockedResponse: AxiosResponse = {
            config: {},
            data: {
                ip: "10.0.0.5"
            },
            headers: {},
            status: 200,
            statusText: 'OK'
        }
        mockedAxios.get.mockResolvedValue(mockedResponse);
    
        loadDataIp("https://api.ipify.org/?format=json").then(data => {
            expect(data.ip).toEqual("10.0.0.5");
            expect(mockedAxios.get).toHaveBeenCalledWith('https://api.ipify.org/?format=json');
            done();
        });
     })

     test('debe devolver un error', (done) => {
        const responseError: AxiosError = {
            config: {},
            isAxiosError: false,
            name: "Error",
            message: "Network Error",
            toJSON: jest.fn()
        }
        mockedAxios.get.mockRejectedValue(responseError)
    
        loadDataIp("https://api.ipify.or").then(error => {
            expect(error).toEqual("Error de conexion");
            expect(mockedAxios.get).toHaveBeenCalledWith('https://api.ipify.or');
            done();
        });
    });
 })