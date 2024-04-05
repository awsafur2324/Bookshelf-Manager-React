function getData(dataHolder){
    const holder = localStorage.getItem(dataHolder);
    if(holder){
        return JSON.parse(holder)
    }
    else{
        return [];
    }
}

function setData(dataHolder , data){
    localStorage.setItem(dataHolder , JSON.stringify(data));
}

function AddToLS(dataHolder ,id){
    const dataList = getData(dataHolder);
    dataList.push(id);
    setData(dataHolder , dataList);
}

export {AddToLS , getData}