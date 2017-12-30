const listAllCommand = require('../all.js')

test('listAllCommand has a command, usage, and description defined', () => {
  expect(listAllCommand.command).toEqual('list:all')
  expect(listAllCommand.usage.length).toBeGreaterThan(0)
  expect(listAllCommand.description.length).toBeGreaterThan(0)
})

test('listAllCommand calls the command.listCommands method.', (done) => {
  const mockCommand = {
    listCommands: () => done()
  };

  listAllCommand.callback([], null, mockCommand)
})
