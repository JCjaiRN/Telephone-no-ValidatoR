function telephoneCheck(str) {
  let regex = /^[1]*[\s|-]*\d{3}[\s|-]*\d{3}[\s|-]*\d{4}$/;
   let regexParentheses = /^[1]*[\s]*[(]\d{3}[)][\s]*\d{3}[\s|-]*\d{4}$/;
   if(!regex.test(str)){
     return regexParentheses.test(str);
   } else {

   
  return true;}
}

telephoneCheck("555-555-5555");


