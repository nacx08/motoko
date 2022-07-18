actor {
  var _name:Text;
  var _age:Nat;
  public func greet(name : Text) : async Text {
    _name = name;
    _age = 24;
    return "Hello, " # name # "!";
  };
  public func getName() : async Text {
    return "Welcome , " # _name # " to internet computer";
  };
};
