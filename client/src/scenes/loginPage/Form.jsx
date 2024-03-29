import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import React from "react";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  image: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  image: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType == "login";
  const isRegister = pageType == "register";

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value])
    }

    // formData.append("picturePath", values.picture.name);

    // if (values.image) {
    //   formData.append('image', values.image);
    // }

    const savedUserResponse = await fetch(
        "http://localhost:3001/auth/register",
        {
            method: "POST",
            body: formData,
        }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
        setPageType("login");
    }
  };

  const login = async (values, { setErrors }) => {
    const loggedInResponse = await fetch(
        "http://localhost:3001/auth/login",
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(values)
        }
    );
    const loggedIn = await loggedInResponse.json();

    if (loggedIn && !loggedIn.message){
        dispatch(

            setLogin({
                user: loggedIn.user, 
                token: loggedIn.token
            })
        )
        navigate("/home");
    } else if (loggedIn.message) {
        console.log("I have reached here!")
        setErrors({ password: loggedIn.message })
    }
  }



  const handleFormSubmit = async (values, onSubmitProps) => {
    const {setErrors} = onSubmitProps;
    if (isLogin) await login(values, {setErrors});
    if (isRegister) await register(values, onSubmitProps);
  }

  const handleDemoLogin = async (setValues, e) => {
    e.preventDefault();

    const demoCredentials = {
      email: 'longchen@gmail.com',
      password: 'zb2225612'
    }

    setValues(demoCredentials)

    await login(demoCredentials, {setErrors: () => {}});
  }

  return (
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
          setValues
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
                }}
              >
                {isRegister && (
                  <>
                    <TextField
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      sx={{ gridColumn: "span 2"}}
                    />
                    
                    <TextField
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      name="lastName"
                      error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      sx={{ gridColumn: "span 2"}}
                    />

                    <TextField
                      label="Location"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.location}
                      name="location"
                      error={Boolean(touched.location) && Boolean(errors.location)}
                      helperText={touched.location && errors.location}
                      sx={{ gridColumn: "span 4"}}
                    />

                    <TextField
                      label="Occupation"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.occupation}
                      name="occupation"
                      error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                      helperText={touched.occupation && errors.occupation}
                      sx={{ gridColumn: "span 4"}}
                    />
                    <Box
                        gridColumn="span 4"
                        border={`1px solid ${palette.neutral.medium}`}
                        borderRadius="5px"
                        padding="1rem"
                    >
                        <Dropzone
                            acceptFiles=".jpeg,.jpg,.png"
                            multiple={false}
                            onDrop={(acceptedFiles) => 
                                setFieldValue("image", acceptedFiles[0])
                            }
                        >
                            {({ getRootProps, getInputProps }) => (
                                <Box
                                    {...getRootProps()}
                                    border={`2px dashed ${palette.primary.main}`}
                                    p = "1rem"
                                    sx={{ "&:hover": { cursor: "pointer"}}}
                                >
                                    <input {...getInputProps()} />
                                    {!values.image ? (
                                        <p>Add Picture Here</p>
                                    ): (
                                        <FlexBetween>
                                            <Typography>{values.image.name}</Typography>
                                            <EditOutlinedIcon /> 
                                        </FlexBetween>
                                    )}
                                </Box>
                            )}
                        </Dropzone>

                    </Box>
                  </>
                )}
              <TextField
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={
                    Boolean(touched.email) && Boolean(errors.email)
                }
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4"}}
              />
              <TextField
                label="Password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={
                    Boolean(touched.password) && Boolean(errors.password)
                }
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4"}}
              />
              </Box>
              {
                <Box>
                    <Button
                        fullWidth
                        type="submit"
                        sx={{
                            m: "2rem 0",
                            p: "1rem",
                            backgroundColor: palette.primary.main,
                            color: palette.background.alt,
                            "&:hover": { color: palette.primary.main }
                        }}
                    >
                        {isLogin ? "LOGIN":"REGISTER"}
                    </Button>
                    {isLogin && (
                      <Button
                        fullWidth
                        type="submit"
                        sx={{
                          m:"2rem, 0",
                          p:"1rem",
                          backgroundColor: "orange",
                          color: palette.background.alt,
                          "&:hover": { color: palette.primary.main}
                        }}
                        onClick={(e) => handleDemoLogin(setValues, e)}
                      >
                        Demo Login
                      </Button>
                    )}
                    
                    <Typography
                        onClick={() => {
                            setPageType(isLogin ? "register":"login");
                            resetForm();
                        }}
                        sx={{
                            m: "1rem",
                            textDecoration: "underline",
                            fontWeight: 800,
                            fontSize: 18,
                            color: palette.primary.main,
                            "&:hover": {
                                cursor: "pointer",
                                color: palette.primary.light,
                            }
                        }}
                    >
                        {isLogin ? "Don't have an account? Sign Up here." : 
                                   "Already have an account? Login here."}

                    </Typography>
                </Box>
              }
            </form>
        )}}
      </Formik>

  )
  
}

export default Form;
