export default function validateInfo(values) {
    let errors = {}

    //First Name
    if(!values.firstName.trim()) {
        errors.firstName = "First Name Required"
    }

    //Last Name
    if(!values.lastName.trim()) {
        errors.lastName = "Last Name Required"
    }

    //Email
    if(!values.email) {
        errors.email = "Email Required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    //Password
    if(!values.password) {
        errors.password = "Password is Required"
    } else if (values.password.length < 8) {
        errors.password = "Password needs to be 8 caharacters or more"
    }

    if(!values.password2) {
        errors.password2 = "Password is Required"
    } else if (values.password2 != values.password) {
        errors.password2 = "Passwords do not match"
    }

    //Checkbox
    // if(!values.checkbox) {
    //     errors.checkbox = "Read the Privacy Policy and Check the Box"
    // }

    return errors;
}