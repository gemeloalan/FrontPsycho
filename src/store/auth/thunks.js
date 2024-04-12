import { api } from "../apis/localApi";
import { chekingCredentials, load, login, cancel } from "./authSlice";
import Swal from "sweetalert2";
import { addPat, cancelP, deletePat, getPatients, loadP } from "./patientSlice";
import { Toast } from "../../helpers/toast";

export const checkingAuth = (data, navigate,type) => {
  console.log(data,'ytfuygu')
  return async (dispatch) => {
    dispatch(load());
    api
      .post("login", null, {
        params: data,
      })
      .then((res) => {
        dispatch(login(res.data.token));
        localStorage.setItem("datos", JSON.stringify(res.data.token));
        Swal.fire({
          title: "Bienvenidoo",
          text: "Acceso Autorizado",
          icon: "success",
        });
         navigate("/profile");
      })
      .catch(({response,request}) => {
        const error = response?.data?.error
        console.log([error,request]);
        // if (request) {
        //   // La solicitud fue hecha, pero no se recibió una respuesta (p. ej., error de red)
        //   Swal.fire({
        //     title: "Error de conexión",
        //     text:`${error ?? ' No se pudo conectar al servidor. Por favor, inténtalo de nuevo más tarde.'}`,
        //     icon: "error",
        //   });
        // }
    
      }, dispatch(cancel()));
  };
};

export const registrar = (data, navigate) => {
  return async (dispatch) => {
    dispatch(load());
    api
      .post("register", null, {
        params: data,
      })
      .then((res) => {
        dispatch(checkingAuth(data,navigate,1));
        navigate('/welcome')
        Swal.fire({
          title: `Felicidades ${data.name}`,
          text: 'Registrado Correctamente',
          icon: "success",
        });
      })
      .catch((item) => {
        Swal.fire({
          title: "Error al registrar tus datos sesion",
          text: item?.response.data.errors?.email ??  'Error' ,
          icon: "error",
        });
      }, dispatch(cancel()));
  };
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
    api.get("/logout").then((res) => {
      navi("/");
      dispatch(salir());
      Swal.fire({
        title: "Adiooos!!",
        text: "res",
        icon: "success",
      });
    }).catch((item)=>{
      navi('/login')
    });
  };
};

//Pacienteeeees
export const getPacientes = () => {
  return async (dispatch) => {
    dispatch(loadP());
    api
      .get("patients")
      .then((res) => {
        dispatch(getPatients(res.data));
      })
      .catch((item) => {
        Swal.fire({
          title: "Error al obtener los pacientes",
          text: item?.response.data.errors?.email ??  'Error' ,
          icon: "error",
        });
      });
  };
};
export const addPatient = (data,handleClose) => {
  return async (dispatch) => {
    dispatch(loadP());
    api
      .post("patients", null, {
        params: data,
      })
      .then((res) => {
        dispatch(addPat(res.data));
        Swal.fire({
          title: `Paciente ${data.name}`,
          text: 'Registrado Correctamente',
          icon: "success",
        });
        handleClose()
      })
      .catch((item) => {
        
  

      });
  };
};

export const deletePatient = (id) => {
  return async (dispatch) => {
    dispatch(loadP());
    api
      .delete(`patients/${id}`)
      .then((res) => {
        dispatch(deletePat({ id }));
        Swal.fire({
          title: `Paciente eliminado`,
          text: 'Eliminado Correctamente',
          icon: "success",
        });
      })
      .catch((item) => {
        Swal.fire({
          title: "Error al eliminar el paciente",
          text: item?.response.data.errors?.email ??  'Error' ,
          icon: "error",
        });
      }, dispatch(cancelP()));
  };
}
