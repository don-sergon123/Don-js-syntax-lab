function combineUsers(...args){
const combinedObject = {
users: []
};

for (const arr of args) {
combinedObject.users = [...combinedObject.users, ...arr];
}

}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};