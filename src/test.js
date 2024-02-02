let wagon = wagonReducer(undefined, {})
console.log(wagon);
console.log(wagon = wagonReducer(wagon, {type: 'travel', payload: 1}))
console.log(wagon = wagonReducer(wagon, {type: 'gather'}));
console.log(wagon = wagonReducer(wagon, {type: 'tippedWagon'}));
console.log(wagon = wagonReducer(wagon, {type: 'travel', payload: 3}));