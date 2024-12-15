const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('UK',"UNITED KINGDOM")

console.log(map);  /// for unique values

for(const [key,value] of map){
    console.log(key,'=>',value);
}

// const myObj = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for(const [key,value] of myObj){
//   console.log(key,'=>',value);
  
// }  // not possible for object this way
