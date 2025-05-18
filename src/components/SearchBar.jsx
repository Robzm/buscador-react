

export const SearchBar = ({ search, onSearch }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={search}
                onChange={e => onSearch(e.target.value)}
                className="border p-2 w-full mb-4 rounded"
            />
        </div>
    )
}
