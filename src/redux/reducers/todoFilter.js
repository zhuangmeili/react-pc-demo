/**
 *
 * */

const todoFilter=(state='SOW_ALL',action)=>{
  switch (action.type){
      case 'SET_VISIBILITY':
          return action.setVisibility;
      default :
          return state;
  }

};