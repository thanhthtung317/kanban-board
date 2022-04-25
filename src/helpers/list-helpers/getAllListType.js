export default (lists)=>{
    const listItems = Object.values(lists)
    const allListType = listItems.map(item=>item.title)
    // console.log(allListType);
    return [...new Set(allListType)];
}