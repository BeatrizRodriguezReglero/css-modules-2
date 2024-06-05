import style from './summaryCard.module.css'

const SummaryCard=({color,image,title,number})=>{
    const bgColor = 'bg_' + color;
    return (
        <>
            <div className={`${style.summaryCard} ${style[bgColor]}`}>  
                <div className={style.container}>
                    <img src={`./images/icon-${image}.svg`} alt="" className={style.image}/>
                <p className={`${style[color]} ${style[bgColor]}`} >{title}</p>
                </div>
               
               <div className={style.container}>
                <p>{number} </p>
                <p className={style.total}>/ 100</p>
               </div>
                
            </div>
        </>
    )
}
export default SummaryCard