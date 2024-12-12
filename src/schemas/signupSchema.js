import * as Yup from "yup";

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const signupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters long")
        .required("Name is required"),
    mobile: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Number is required"),
    password: Yup.string()
        .min(3, "Password must be at least 3 characters long")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .min(3, "Confirm Password must be at least 3 characters long")
        .required("Confirm Password is required"),
});
