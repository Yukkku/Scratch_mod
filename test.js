class Test {
  constructor() {}
  getInfo() {
    return {
      id: 'test',
      name: 'Test',
      blocks: [
        {opcode: 'hello',blockType: Scratch.BlockType.COMMAND,text: 'hello'}
      ]
    }
  }
  hello() {
    console.log('hello')
  }
}
Scratch.extensions.register(new Test())
