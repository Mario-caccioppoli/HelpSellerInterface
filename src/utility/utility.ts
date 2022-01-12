import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Md5 } from "ts-md5";

export class utility{


    static criptaPassword(password : string) : any {
        const md5=new Md5;
        var passwordCriptata=md5.appendStr(password).end();
        return passwordCriptata;
    }

    static verificaPassword(hash: any, password: string) : boolean{
        const md5 =new Md5;
        var passwordCriptata=md5.appendStr(password).end();
        if(passwordCriptata===hash){
            return true;
        }
        else{
            return false;
        }
    }
    
}