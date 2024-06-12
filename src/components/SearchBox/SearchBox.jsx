import { useDispatch, useSelector } from "react-redux"
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice"

const SearchBox = () => {
    const filter = useSelector(selectNameFilter)
    const dispatch = useDispatch()

    return (
        <>
            <label>Find contacts by name
                <input type="text" value={filter.name} 
                onChange={(event) => dispatch(changeFilter(event.target.value))} />
            </label>
        </>
    )
}

export default SearchBox