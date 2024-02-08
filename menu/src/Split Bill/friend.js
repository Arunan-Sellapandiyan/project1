export default function Friend({serv1,setserv1}){
    function Review(e){
        setserv1(e.target.value);
    }
    return(
        <div>
            <p>How did ur friend  like service?
            <select value={serv1} onChange={Review}>
                <option value={0}>Dissatisfied(0%)</option>
                <option value={5}>It was okay(5%)</option>
                <option value={10}>It was good(10%)</option>
                <option value={20}>Absolutely Amazing (20%)</option>
            </select>
            </p>
        </div>
    )
}