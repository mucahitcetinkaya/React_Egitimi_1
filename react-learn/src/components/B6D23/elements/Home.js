import { Link } from "react-router-dom";

function Home() {

    return (
        <>
            <div>Hello From Home</div>
            <Link to = {"/about"}>About'a gidelim</Link>
        </>
    )
}

export default Home;