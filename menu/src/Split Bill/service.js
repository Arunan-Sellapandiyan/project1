export default function Service({serv,setserv}){
    function Review(e){
        setserv(e.target.value);
    }
    return(
        <div>
            <p>How did u like servive?
            <select value={serv} onChange={Review}>
                <option value={0}>Dissatisfied(0%)</option>
                <option value={5}>It was okay(5%)</option>
                <option value={10}>It was good(10%)</option>
                <option value={20}>Absolutely Amazing (20%)</option>
            </select>
            </p>
        </div>
    )
}