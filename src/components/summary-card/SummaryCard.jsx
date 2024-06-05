import style from './summaryCard.module.css'

const SummaryCard=({color,image,title,number})=>{
    const bgColor = 'bg_' + color;
    return (
        <>
            <div className={`${style.summaryCard} ${style[bgColor]}`}>  
                <img src={`./images/icon-${image}.svg`} alt="" className={style.image}/>
                <p className={`${style[color]} ${style[bgColor]}`}>{title}</p>
                <p>{number}</p>
                <p>/ 100</p>
            </div>
        </>
    )
}
export default SummaryCard