export function doneHandler(span,p){

    if(span.dataset.isDone == "true"){
        span.innerText = "check_box_outline_blank"
        span.dataset.isDone= "false"
        p.style.textDecoration = "unset"
        
    } else {
        span.innerText = "select_check_box"
        span.dataset.isDone= "true"
        p.style.textDecoration = "line-through"
    }
 
}