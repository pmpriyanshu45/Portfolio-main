const i = "active";

const ChangeOverlay=(state = i,action)=>{
    switch(action.type){
        case "changeOver": return "hidden";
        case "removeOver": return "active";
        default : return state;
    }
}
export default ChangeOverlay;