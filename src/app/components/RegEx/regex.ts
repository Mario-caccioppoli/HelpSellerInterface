import { Azienda } from "src/app/models/Azienda";

export class testRegex {

    constructor() {}

    regexEmail(email: string) {

        const regEx  = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      
        return email.match(regEx);
      
      }

      regexPassword(password: string) {

        const regEx  = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}\[\]:;<>,.?/~_+-=|]).{8,32}$/;
      
        return password.match(regEx);
      
      }

      regexNome(nome: string) {

        const regEx  = /^([ ]+)?([a-zA-Zàèìòù]([ ]{0,1}))+([ ]+)?$/;
      
        return nome.match(regEx);
      
      }

      regexVAT(vat: string) {

        const regEx  = /^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|(CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|(EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|(FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|(HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|(LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|(NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|(SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$/;
      
        return vat.match(regEx);
      
      }

      regexVia(via: string) {

        const regEx  = /^([ ]+)?([a-zA-Zàèìòù]([ ]{0,1}))+([ ]+)?$/;
      
        return via.match(regEx);
      
      }

      regexCivico(civico: string) {

        const regEx  = /^[0-9]+$/;
      
        return civico.match(regEx);
      
      }

      regexCitta(citta: string) {

        const regEx  = /^([ ]+)?([a-zA-Zàèìòù]([ ]{0,1}))+([ ]+)?$/;
      
        return citta.match(regEx);
      
      }

      regexProvincia(provincia: string) {

        const regEx  = /^([ ]+)?([a-zA-Zàèìòù]([ ]{0,1}))+([ ]+)?$/;
      
        return provincia.match(regEx);
      
      }

      regexPaese(paese: string) {

        const regEx  = /^[A-Z]{2,3}$/;
      
        return paese.match(regEx);
      
      }

      regexCAP(cap: string) {

        const regEx  = /^[0-9]{5}$/;
      
        return cap.match(regEx);
      
      }

      regexDescrizione(paese: string) {

        if(paese.length <= 500) {
            return true;
        }

        return false;
          
      }

      regexLogo(logo: string) {

        const regEx  = /^[a-zA-Z0-9\-\_]+[.](?:png|jpg|jpeg)$/;
      
        return logo.match(regEx);
      
      }

      regexUsername(username: string) {

        const regEx  = /^[A-Za-zàèìòù0-9_\.]{8,32}$/;
      
        return regEx.test(username);
      
      }

      regexTelefono(telefono: string) {

        const regEx  = /^\+[0-9]{1,5}\s+(\([0-9]{1,4}\))?([-. ]+)?(([0-9]{3,7}[-. ]?[0-9]{3,8})|([0-9]{2,5}[-. ]?[0-9]{2,5}[-. ]?[0-9]{2,5}))(\s+)?/;
      
        return telefono.match(regEx);
      
      }

      matchStringhe(inserito: string, esistente: string) {

        if (inserito == esistente) {
            return true;
        }

        return false;

      }







} 