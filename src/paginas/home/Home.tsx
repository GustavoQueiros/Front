interface homeProps{
    titulo: string;
    texto: string;
}
//Comentario
function Home(props : homeProps){
    return(
        <>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </>
    )
}
export default Home;