const i="header";
const changeHeader=(state=i,action) =>{
    switch(action.type){
        case "inactive":return "header";
        case "active":return "header active";
        case "hidden":return "header hidden";
        default : return state;
    }
}
export default changeHeader;