export default (lists)=>{
    const listItems = Object.values(lists)
    const allListType = listItems.map(item=>item.id)
    // console.log(allListType);
    return [...new Set(allListType)];
}