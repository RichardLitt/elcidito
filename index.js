const irc = require('irc')
const botName = process.env.SPRINT_HELPER_NAME || 'cidito'
const channel = process.env.SPRINT_HELPER_CHANNEL || '#ipfs-cid'
const client = new irc.Client('irc.freenode.net', botName, {
    channels: [channel],
    port: 6667
})
const gh = new require('octokat')()

var cron = require('node-cron')

gh.orgs('ipfs').events.fetch().then((data) => {
  console.log(data)
})

// cron.schedule('*/1 * * * *', function() {

//   client.say(channel, [data])
// })
