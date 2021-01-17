class re{
  constructor(){}
  getInfo(){
    return{
      id:'re',
      name:'RegularExpression',
      blocks:[
        {opcode:'match',blockType:BlockType.BOOLEAN,text:'/[Re]/が[St]にマッチする',
          arguments:{Re:{type:ArgumentType.STRING,defaultValue:"^ap+l"},
                     St:{type:ArgumentType.STRING,defaultValue:"hello"}
          }},
        {opcode:'search',blockType:BlockType.REPORTER,text:'[St]中の/[Re]/の場所',
          arguments:{Re:{type:ArgumentType.STRING,defaultValue:"p+"},
                     St:{type:ArgumentType.STRING,defaultValue:"hello"}
          }},
        {opcode:'replace',blockType:BlockType.REPORTER,text:'[St]の/[Re]/を[St2]で置き換える',
          arguments:{Re:{type:ArgumentType.STRING,defaultValue:"^ap+l"},
                     St1:{type:ArgumentType.STRING,defaultValue:"hello"},
                     St2:{type:ArgumentType.STRING,defaultValue:" ho"}
          }}
      ]
    }
  }
  match(){
    return RegExp(args.Re).test(args.St)
  }
  search(){
    return args.St.search(RegExp(args.Re))
  }
  replace(){
    return args.St.replace(RegExp(args.Re,'g'),args.St2)
  }
}
Scratch.extensions.register(new Test())
