import Home from "../components/views/Home";
import ListPatients from '../components/views/ListPatients';

export const routes = [
    {
        to: '/',
        path: '/',
        Component: Home,
        name: 'Home'
    },
    {
        to: '/consultarPacientes',
        path: 'consultarPacientes',
        Component: ListPatients,
        name: 'Consultar pacientes'
    },
]
