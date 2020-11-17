class Email{

    constructor(...params){
        this.mail = params[0]
    }

    get mail(){
        return this._mail;
    }
    set mail(mail){
        let partOneRegex = RegExp('^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$')
        if(partOneRegex.test(mail)){
            this._mail = mail;
        }
        else throw "Incorrect Email"
    }
}


try{
    let email1 = new Email("sai@gmail1.com")
    console.log(email1)
    let email2 = new Email("sai.111@gmail.com.co")
    console.log(email2)
   
    let email5 = new Email("abc@gmail.com.aa.au")
    console.log(email5)
}catch(e){
    console.log("Error :  " + e)
}