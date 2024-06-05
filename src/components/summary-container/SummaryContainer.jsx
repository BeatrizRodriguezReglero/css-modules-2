import SummaryCard from "../summary-card/SummaryCard"
import Title from "../title/Title"
import style from './summaryContainer.module.css'

const SummaryContainer=()=>{
    return (
        <>
            <div className={style.summaryContainer}>
                <Title text='Summary' />
                <div>
                    <SummaryCard color='red' image='reaction' title='Reaction' number='80'/>
                    <SummaryCard color='yellow' image='memory' title='Memory' number='92'/>
                    <SummaryCard color='green' image='verbal' title='Verbal' number='61'/> 
                    <SummaryCard color='blue' image='visual' title='Visual' number='73'/>
                </div>
                <button className={style.button}>
                    Continue
                </button>

            </div>
        </>
    )
}
export default SummaryContainer