'use strict';

btn.addEventListener('click', function(){
    let alph = ['а', 'б', 'в', 'г', 'д', 'е',
        'ё', 'ж', 'з', 'и', 'й', 'к', 'л',
        'м', 'н', 'о', 'п', 'р', 'с', 'т',
        'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ',
        'ъ', 'ы', 'ь', 'э', 'ю', 'я',
        'а', 'б', 'в', 'г', 'д', 'е',
        'ё', 'ж', 'з', 'и', 'й', 'к', 'л',
        'м', 'н', 'о', 'п', 'р', 'с', 'т',
        'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ',
        'ъ', 'ы', 'ь', 'э', 'ю', 'я',]
        


    let text = document.getElementById('textInput').value;
    let copy = [];

    let result = document.getElementById('result');
    result.innerHTML = "";

    for (let i = 0; i < text.length; i++){
        copy[i] = "";
    }
    for (let j=0; j < 33; j ++){
        for (let i=0; i < text.length; i++){

            if (text[i] == " " || text[i] == "," ||
                text[i] == "?" || text[i] == "!" ||
                text[i] == "." || text[i] == "-"){
                
                copy[i] = text[i];

            }else{

                if (text[i] == text[i].toUpperCase()){
                    copy[i] = alph[alph.indexOf(text[i].toLowerCase()) + j].toUpperCase();
                } else{
                    copy[i] = alph[alph.indexOf(text[i].toLowerCase()) + j];
                }
            }
        }
        
        result.innerHTML = result.innerHTML + "<br><br><hr>" + copy.join("");
    }

})