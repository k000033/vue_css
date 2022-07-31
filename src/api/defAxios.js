import axios from 'axios'

const defAxios = axios.create({
    baseURL: "http://localhost:3004/data"
})

export const useDefAxios = () => {
    return defAxios.get('');
}