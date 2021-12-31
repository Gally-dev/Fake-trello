export const addNewList =(title, state)=>{
    if(!title) return //ak nieje nadpis, teda posielam prazdny input nerob nic

    let listMaxId = state.lists.length ? Math.max(...state.lists.map(num => num.id)) : 0

    state.lists.push({
      id: listMaxId + 1,
      title: title,
      cards:[],
    })
    
  }
  export const editListTitle = (data, state) => {
    if(!data?.id || !data?.newTitle) return
    // let listToEdit = lists.find((list)=> list.id === data.id)

    console.log(data);
    console.log(state.lists);
    // console.log(listToEdit);

  }