actor {
  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
  public func sayName(name:Text) : async Text {
    return "Welcome , " # name # " to internet computer";
  };
};
