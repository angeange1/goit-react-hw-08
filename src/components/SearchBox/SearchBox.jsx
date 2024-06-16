import { useDispatch, useSelector } from "react-redux"
import { changeNameFilter, changeNumberFilter } from "../../redux/filters/slice"
import {selectNameFilter} from "../../redux/filters/selectors"

const SearchBox = () => {
    const filter = useSelector(selectNameFilter)
    const dispatch = useDispatch()

    const handleChange = event => {
        dispatch(changeNameFilter(event.target.value)); 
        dispatch(changeNumberFilter(event.target.value))
    }

    return (
        <>
            <label>Find contacts by name
                <input type="text" value={filter.name} 
                onChange={handleChange} />
            </label>
        </>
    )
}

export default SearchBox