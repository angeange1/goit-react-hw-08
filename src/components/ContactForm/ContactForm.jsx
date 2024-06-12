import { Formik, Form, Field } from 'formik';
import * as Yup from "yup"
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css"
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const InputSchema = Yup.object().shape({
    contactName: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    contactNumber: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required")
});

const ContactForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(addContact({
            name: values.contactName,
            number: values.contactNumber,
        }))
		actions.resetForm()
}
    return (
        <Formik
            initialValues={{
            contactName: "",
            contactNumber: ""
            }}
            onSubmit={handleSubmit}
            validationSchema={InputSchema}
        >
        <Form>
                <div className={css.inputs}>
                <div className={css.nameNumber}>
        <label>Name <Field type="text" name="contactName" /></label>
        <ErrorMessage className={css.error} name="contactName" component="span" />
                </div>
                    <div className={css.nameNumber}>
        <label>Number <Field type="text" name="contactNumber" /></label>
        <ErrorMessage className={css.error} name="contactNumber" component="span" />
                </div>
            </div>
        <button type="submit">Add contact</button>
        </Form>
        </Formik>
    )
}

export default ContactForm