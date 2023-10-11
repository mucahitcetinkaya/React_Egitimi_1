import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function HomePage() {

    const user = useSelector(state => state.user);
    const name = user.name;
    const surname = user.surname;



    return (
        <>
            <div>
                <h3>HomePage</h3>
                <div>Merhaba {name + " " + surname}, bugün nasılsın ?</div>
                <Link to={"/profile"}>
                    <button>Profili Düzenle</button>
                </Link>
            </div>
        </>
    )
}
