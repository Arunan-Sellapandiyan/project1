export default function Bill({amount,setAmount}){
    function Amounts(e){
        setAmount (Number(e.target.value))
    }


    return(
        <div>
            <p >How much was the bill?<input type="text" value={amount} onChange={Amounts}/></p>
        </div>
    )
}