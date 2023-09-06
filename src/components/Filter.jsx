import css from '../css/Filter.module.css'

const Filter = ({handleFilter}) => (
    <label className={css.label}>
       Find contacts by name
        <input type="text"
        name="filter"
        placeholder="enter the name"
        onChange={handleFilter}></input>
    </label>
)
export {Filter}