interface VezerlopultProps {
    lampaKapcsolasa: () => void;
    novel: () => void;
}
const Vezerlopult = ({lampaKapcsolasa, novel}: VezerlopultProps) => {
    return <>
        <h2>Vezérlőpult</h2>
        <button onClick={lampaKapcsolasa}>Lámpa kapcsolása</button>
    </>
}
export default Vezerlopult