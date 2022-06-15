import axios from "axios";

export const loadDataIp = async (uri:string) => {
    try {
        const result = await axios.get(`${uri}`);
        const data = await result.data;
        return data;
    } catch (error) {
        return 'Error de conexion'
    }
  };
