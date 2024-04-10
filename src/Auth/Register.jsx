import { Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthLayout } from "../Layouts/AuthLayouth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { registrar } from "../store/auth/thunks";


export const Register = () => {
    const navigate = useNavigate();
    const {loading} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const { handleSubmit, formState :{errors}, register } = useForm();
    const onSubmit = (data) => {
dispatch(registrar(data))
        console.log(data)
    };
    return (
        <AuthLayout title="Registrate">
            <form onSubmit={handleSubmit(onSubmit)} >
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={12} md={12} sx={{ mt: 2 }}>
                        <TextField
                        {...register('name',{
                            required: 'El nombre es obligatorio',
                            minLength: {value:3,message:'Debe contener minimo 3 elementos el nombre'},
                        })}
                            name="name"
                            type="text"
                            label="Nombre"
                            placeholder="Juanito"
                            fullWidth
                            error={errors.name}
                            helperText={errors?.name?.message}
                        />
                    </Grid>
                    <Grid item xs={12} xl={12} md={12} sx={{ mt: 2 }}>
                        <TextField
                            {...register('email', 
                            { required: 'Es obligatorio este el correo electronico',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Ingresa un correo electrónico válido"
                              }
                         })}
                            name="email"
                            type="email"
                            label="Correo"
                            placeholder="alan@gmail.com"
                            fullWidth
                            error={errors.email}
                            helperText={errors?.email?.message}
                        />
                    </Grid>
                    <Grid item xs={12} xl={12} md={12} sx={{ mt: 2 }}>
                        <TextField
                            {...register('password',
                                {
                                    required: 'La contrasena es obligatorio',
                                    minLength: { value: 8, message: 'Debe Contener minimo 8 caracteres' },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                        message: "La contraseña debe contener al menos una mayúscula, una minúscula y un número"
                                    }
                                })}
                            name="password"
                            type="password"
                            label="Contraseña"
                            fullWidth
                            error={errors?.password ?true : false}
                            helperText={errors?.password?.message}

                        />
                    </Grid>
                    <Grid item xs={6} xl={6}>
                        <Button onClick={()=>navigate('/login')} fullWidth variant="contained"  >
                           Iniciar!!
                        </Button>
                    </Grid>
                    <Grid item xs={6} xl={6}>
                        <Button onClick={()=>dispatch} fullWidth variant="contained" color="primary" type="submit">
                            Registrar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
