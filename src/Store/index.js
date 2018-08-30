import { createStore } from 'redux';


//Put in dummy data here
initialState = {
    image: 'past in url',
    dummyName: 'blabla'
}


const reducer1 = (state = initialState, action) => {
    console.log('reducer running', state);

    switch (action.type) {
        case 'READ_DATA': {
            //Fetch data and make the list read etc. 
            return null;
        }
    }
    return state;
}


// For simplicity test with one reduce, when we have multiple reducers we can combine them later. Test and make it work first
const store = createStore(reducer1);

export default store;