function Navbar() {
    return (
        <div className="bg-red-800  p-4 border-b-2 border-white">
            <ol className="flex flex-row justify-around">
            <Link to={"/home"}>

                <li>Farmacia Feliz</li>
            </Link>

            <Link to={"/cadastroCategoria"}>
                <li>Cadastro</li>
            </Link>

            <Link to={"/categorias"}>
                <li >Listagem</li>
            </Link>
            </ol>

        </div>
    )
}
export default Navbar