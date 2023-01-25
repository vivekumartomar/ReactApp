const MenuRecomended = (items) =>{
    return(
        <div className="recomended">
            {    
                Object.values(items).map((item)=>{
                if(item?.type=='category' || item?.type =='recommended'){
                return ( 
                    <div key={item?.id} className="menu-rec-lists">
                    {item?.name}
                    </div>
                )
                }
                })
            }
        </div>
    )
}

export default MenuRecomended;