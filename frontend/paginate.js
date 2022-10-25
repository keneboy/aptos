function handleSlice(currentPage,countryArray){
    const pageSize = 4;
    const pageTotal = countryArray.length;
    console.log(Math.ceil(pageTotal / pageSize))
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize ; 
    return countryArray.slice(startIndex, endIndex)
}
export default handleSlice