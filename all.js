'use strict'

const listAllCommand = {
  command: 'list:all',
  usage: 'list:all',
  description: 'Lists all of the available commands',
  callback: callbackFunction
}

function callbackFunction (args, credentials, command) {
  command.listCommands()
}

module.exports = listAllCommand
