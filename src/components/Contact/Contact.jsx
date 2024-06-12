import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ data: { name, number, id }}) => {
    const dispatch = useDispatch()
    return (
    <>
        <div className={css.details}>
            <p><span><svg><FaUser /></svg></span>{name}</p>
            <p><span><svg><FaPhoneAlt /></svg></span>{number}</p>
        </div>
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </>)
}

export default Contact