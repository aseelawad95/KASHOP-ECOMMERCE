import * as yup from "yup"


export const registerSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is required").min(3, "Full Name must be at least 3 characters"),
    userName: yup.string().required("User Name is required").min(3, "User Name must be at least 3 characters"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: yup.string().matches(/^\d{10}$/, "Phone Number must be 10 digits").required("Phone Number is required"),
     password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/[A-Z]/, "Password must contain an uppercase letter")
        .matches(/[a-z]/, "Password must contain a lowercase letter")
        .matches(/\d/, "Password must contain a number")
        .matches(/[^a-zA-Z0-9]/, "Password must contain a special character (e.g. @ or !)"),
});


export const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});


export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email address'),
});
