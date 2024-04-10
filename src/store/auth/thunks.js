import { api } from "../apis/localApi";
import { chekingCredentials, load, login ,cancel} from "./authSlice";
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
        console.log(res,'xddddddd')
          dispatch(login(res.data.token));
        localStorage.setItem("datos",JSON.stringify(res.data.token))
        navigate('/profile')
        Swal.fire({
            title:'Bienvenidoo',
            text:'Acceso Autorizado',
            icon:'success'
        })
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

export const registrar = (data,navigate) => {

  return async (dispatch) => {
    dispatch(load());
    api
      .post("register", null, {
        params: data,
      })
      .then((res) => {
        dispatch(checkingAuth(data))
      })
      .catch((item) =>{

    Swal.fire({
        title:'Error al registrar tus datos sesion',
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
export const logout = (navi) => {
  return async (dispatch, getState) => {
    dispatch(load());
    api.get('/logout').then((res)=>{
        navi('/');
        dispatch(salir())
        Swal.fire({
            title:"Adiooos!!",
            text:'res',
            icon:'success'
        })
        console.log(res,'jijijija')
    })
    

    
  };
};
