import React from 'react'
import { useHistory } from 'react-router-dom';



const ImgComponent=({p})=>{
    
    const router=useHistory()

    return(
        <a href={p.urls.raw} style={{textDecoration:'none'}}target="_blank">
            <div   style={{border:'1px solid black',margin:'10px 0px'}}>
                <div style={{position:"relative",left:"0px",overflow:"hidden",width:`${300}px`,height:`${400}px`}}>
                <img style={{position:"absolute",left:"0px",height:"100%",width:"100%",objectFit:"cover"}}src={p.urls.raw} width="300"/>
                </div>
                <p style={{color:'black'}}>{p.alt_description}</p><br/>
                <a href={p.user.portfolio_url}>c:{p.user.first_name} {p.user.last_name}</a>
            </div>
        </a>
        
      
    )
}


export default ImgComponent;