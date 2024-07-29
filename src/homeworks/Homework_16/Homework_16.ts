import { useAppDispatch, useAppSelector } from "store/hooks";
import  Feedback  from "components/Feedback/Feedback"
import {feedbackSliceActions,feedbackSliceSelectors} from "store/redux/feedback/feedbackSlice"
import { PageWrapper } from "./styles"
import Counter from "components/Counter/Counter"
import { FeedbackProps } from "components/Feedback/types";

function Homework_16(){
    const dispatch = useAppDispatch()
    //const likes = useAppSelector(feedbackSliceSelectors)
   // const dislikes = useAppSelector(feedbackSliceSelectors.dislike)

    const onLike =()=>{
        dispatch(feedbackSliceActions.like())
    }

    const onDislike =()=>{
        dispatch(feedbackSliceActions.dislike())
    }

 

 const resetResults=()=>{}

}
export default Homework_16