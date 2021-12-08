import data from '../j-son/data.json'

function showUsers(data) {
    for(let user of data.users) {
        let result = `${user.firstName} ${user.lastName} - data of birth ${user.dateOfBirth} knowsas ${user.knowsAs}`
        
        console.log(result);
    }
}
showUsers(data);

//node --experimental-json-modules main.mjs - это метка именно для вызова этого модуля

const userToJson = JSON.parse(JSON.stringify(data));
userToJson.users.forEach((item) => {
    console.log(` ${item.firstName}`)
})




