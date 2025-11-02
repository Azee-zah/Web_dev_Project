 
function CategoryFilter({onFilter}) {

    return(
        <div>
            <input
            className="cat-filter"
            type="text"
            placeholder="Search by Category"
            onChange={onFilter}
            />
        </div>
    )

}

export default CategoryFilter