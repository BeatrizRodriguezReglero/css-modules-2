import ResultContainer from "../result-container/ResultContainer"
import SummaryContainer from "../summary-container/SummaryContainer"
import style from './container.module.css'

const Container=()=>{
    return <div className={style.container}>

        <ResultContainer/>
        <SummaryContainer/>
    </div>
}
export default Container