import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setName, setSurname } from '../slices/userSlice';
import { Link } from 'react-router-dom';

export default function ProfilePage() {

    const user = useSelector(state => state.user);
    const name = user.name;
    const surname = user.surname;

    const [tempName, setTempName] = useState(name);
    const [tempSurname, setTempSurname] = useState(surname);

    const dispatch = useDispatch();

    function handleClick(){
        dispatch(setName(tempName));
        dispatch(setSurname(tempSurname));
    }

    return (
        <>
            <div>
                <h3>ProfilePage</h3>
                <div>
                    <span>İsim : </span>
                    <input value={tempName} onChange={e => setTempName(e.target.value)} />
                </div>

                <div>
                    <span>Soyisim : </span>
                    <input value={tempSurname} onChange={e => setTempSurname(e.target.value)} />
                </div>

                <div>
                    <Link to={"/home"}>
                        <button onClick={handleClick}>Tamam</button>
                    </Link>
                    <Link to={"/home"}>
                        <button>Vazgeç</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
