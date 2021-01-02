const fs = require("fs")
const snipe = require("./snipe.json")
module.exports = {
  run(message, args, client,author,time,icon) {
        let content = args; 
 
    let snipedMsg = content.join(" ");  
    snipe [message.channel.id] = { 
      msg: snipedMsg,
      user: author,
      time: time,
      icon: icon
    }
    let snipez = JSON.stringify(snipe);
fs.writeFile("./snipe.json", snipez, (err) => console.error)


  }
}
