
export default function Biodata({bioProps})
{
    const showAlert = ()=>{
        alert("Yeay Berhasil");
    }
    return(
        <>
        <div className="container">
            <div className="container1">
                <div className="container2">
                    <img src={bioProps.image} alt="" />
                    <h1>{bioProps.name}</h1>
                    <p>{bioProps.email}</p>
                    {bioProps.hobby && (
                    <p>
                        {bioProps.hobby.map((panggil,index)=>(
                           <button key={index}>{panggil}</button>
                        ))}
                    </p>
                    
                )}
                <button onClick={()=>showAlert()}>Pesan</button>
                </div>
            </div>
        </div>
        </>
    )
}