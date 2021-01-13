module.exports = (client) => {
const DBL = require('dblapi.js');
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4ODkxMTgyMzk2OTU4MzE3NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEwMzMwMzMwfQ.aU1IU412VWuJ9285UvvkMOxyUVM6uEmGjlZuvvixwro', { webhookPort: 5000, webhookAuth: 'Greenshirt1521' });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', (vote, client) => {
   const ChannelID ='793996865182892042' 
   const channel = client.channels.cache.get(ChannelID)
   channel.send(`User with ID ${vote.user} just voted for Polar! vote again after 24 hours!`);
});
 }