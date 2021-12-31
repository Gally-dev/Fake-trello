// add new card
export const addNewCard = (e, state) => {
    if(!e.text) return
      let listForNewCard = state.lists.find(list =>list.id === e.listId)//najdi id v datach to ktore sa rovna idcku poslaneho emitom z CardCreateForm
      let cardMaxId =listForNewCard.cards.length? Math.max(...listForNewCard.cards.map(card => card.id)) : 0  
      
      listForNewCard.cards.push({
        id:cardMaxId + 1,
        text: e.text,
      })
  }
// remove card from list
 export const deleteCard = (e, state) => {
    if(!e?.cardId || !e?.listId) return
    let listToRemoveCardForm = state.lists.find(list => list.id === e.listId)
    listToRemoveCardForm.cards = listToRemoveCardForm.cards.filter(card => card.id !== e.cardId)
  }