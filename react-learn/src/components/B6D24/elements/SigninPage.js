import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setEmail, setName, setSurname } from "../slices/userSlice";
import { Link } from "react-router-dom";

export default function SigninPage() {

    const user = useSelector(state => state.user);
    const name = user.name;
    const surname = user.surname;
    const email = user.email;

    const dispatch = useDispatch();

    return (
        <>
            <div>
                <h3>SigninPage</h3>
                <div>
                    <span>İsim : </span>
                    <input value={name} onChange={e => dispatch(setName(e.target.value))} />
                </div>
                <div>
                    <span>Soyisim : </span>
                    <input value={surname} onChange={e => dispatch(setSurname(e.target.value))} />
                </div>
                <div>
                    <span>E-Mail : </span>
                    <input value={email} onChange={e => dispatch(setEmail(e.target.value))} />
                </div>
                <div>
                    <Link to="/home">
                        <button>Giriş Yap</button>
                    </Link>
                </div>
            </div>
        </>
    )
}