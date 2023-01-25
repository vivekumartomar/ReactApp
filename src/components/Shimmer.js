Shimmer = () =>{
    return (
        <div className="restaurant-list">
            {
                Array(9).
                fill("").
                map((e,index)=>{
                    return <div key={index} className="card-shimmer">
                    </div>
                })
            }
        </div>
      )}

export default Shimmer;
