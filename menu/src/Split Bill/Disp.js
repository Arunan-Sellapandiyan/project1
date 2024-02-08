
export default function Disp({amount,tip,Reset}){
    return(
        <>
        <p > <b>you pay ${amount+tip}  (${amount}+ ${tip}) </b></p>
        {amount >0 ?<button onClick={Reset}>Reset</button> :""}
        </>
    )
}