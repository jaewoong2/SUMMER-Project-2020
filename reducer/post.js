import produce from 'immer'

////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////

const initialState = {



    
    imagePaths : [],
}


const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
        }
    })
}

export default reducer;