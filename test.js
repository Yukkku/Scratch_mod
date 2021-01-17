class Test{
  constructor(){}
  getInfo(){
    return{
      id:'test',
      name:'Test',
      blocks:[
        {opcode:'ua',blockType:Scratch.BlockType.REPORTER,text:'ユーザーエージェント'}
      ]
    }
  }
  ua(){
    return navigator.userAgent
  }
}
Scratch.extensions.register(new Test())
