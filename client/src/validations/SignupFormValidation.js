import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 uppercase letter, 1 lowercase letter, 1 numberic digit

export const signupFormSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    email: yup.string().email("Please enter a valid email").required("Email is a requiered field."),
    age: yup.number().positive().integer().required("Age is a required field."),
    password: yup.string().min(5).matches(passwordRules, { message: "Please create a stronger password" }).required("password is a required field."),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match").required("Confirm Password is a required field."),
    image: yup.mixed().test("FILE_SIZE", "Too big!", (value) => value && value.size < 1024 * 1024).test("FILE_TYPE", "Invalid file type!", (value) => value && ["image/png", "image/jpeg", "image/jpg", "image/webp"].includes(value.type))
})