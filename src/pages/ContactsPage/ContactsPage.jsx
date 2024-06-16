
// import { selectLoading } from "../../redux/tasks/selectors";

import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectLoading, selectError } from '../../redux/contacts/selectors'

export default function TasksPage() {
    
  const dispatch = useDispatch()
  const isLoading = useSelector(selectLoading)
  const isError = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <div>{isLoading && "Request in progress..."}</div>
      <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    {isLoading && <p>Loading contacts...</p>}
    {isError && <p>Oops, something went wrong</p>}
    <ContactList />
    </>
  );
}