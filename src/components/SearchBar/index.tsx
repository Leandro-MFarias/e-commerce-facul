import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Products } from '../Products';

import { IoSearch } from "react-icons/io5";

export const SearchBar: React.FC = () => {
    const [ search, setSearch ] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const product = Products.find(p => p.name.toLowerCase().includes(search.toLocaleLowerCase()))
            if (product) {
                navigate(`/product/${product.id}`)
            } else {
                alert('Produto não encontrado')
            }
        }
    }

    return (
        <form>
            <input type="search" placeholder="Buscar Produto" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleSearch} />
            <span className='search'><IoSearch /></span>
        </form>
    )
}