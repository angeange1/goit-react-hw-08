import Contact from "../Contact/Contact"
import { useSelector } from "react-redux"
import { selectFilteredContacts } from "../../redux/contactsSlice"

const ContactList = () => {
	const filteredContacts = useSelector(selectFilteredContacts)
    
	return (<ul>
		{filteredContacts.map((contact) => {
			return <li key={contact.id}>
				<Contact data={contact} />
			</li>})}
		</ul>)
}

export default ContactList