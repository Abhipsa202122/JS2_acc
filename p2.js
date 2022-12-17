class product{
    constructor(pid,pname,price){
        this.pid=pid;
        this.pname=pname;
        this.price=price;

    }
    disply(){
        console.log("pid"+this.pid)
        console.log("pname"+this.pname)
        console.log("price"+this.price)
    }

}
let a=new product("@abhi","Abhi",45566);
a.display()