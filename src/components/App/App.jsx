import './App.modules.css'
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contactsOps'
import { selectLoading, selectError } from '../../redux/contactsSlice'

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectLoading)
  const isError = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    {isLoading && <p>Loading contacts...</p>}
    {isError && <p>Oops, something went wrong</p>}
    <ContactList />
  </div>
  )
}

export default App