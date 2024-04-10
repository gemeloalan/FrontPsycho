import { api } from "../apis/localApi";
import { chekingCredentials, load, login, logout ,cancel} from "./authSlice";
import Swal from 'sweetalert2'


export const checkingAuth = (data,navigate) => {

  console.log(data);
  return async (dispatch) => {
    dispatch(load());
    api
      .post("login", null, {
        params: data,
      })
      .then((res) => {
        console.log(res,'ojitooo');
        navigate('/home')
      })
      .catch((item) =>{

    Swal.fire({
        title:'Error al iniciar sesion',
        text:item?.response.data.error,
        icon:'error'
    })},
    dispatch(cancel())
  );};
};
export const Iniciar = (data) => {
  return async (dispatch, getState) => {
    dispatch(load());
    const { data } = await api.get(`login`);
    dispatch(setPokemons({ data }));
  };
};
