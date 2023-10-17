const editText = () => {
    let pText=document.getElementById('pTag').textContent;
    let areaText=document.createElement('textarea')
    areaText.type='textarea';
    areaText.name='textareaTag';
    areaText.value=pText;
    areaText.style.width=`${500}px`;
    areaText.style.height=`${500}px`;
    areaText.id='textAreId';

    let divTag=document.getElementById('Container-div');
    let pTextremov=document.getElementById('pTag');
    let inputDiv=pTextremov.parentElement;
    inputDiv.removeChild(pTextremov);
    divTag.appendChild(areaText);



};

function saveText(){
    let textArea = document.getElementById('textAreId');
    let pText = document.createElement('p');
    pText.textContent = textArea.value;
    pText.id = 'pTag';

    let divTag = document.getElementById('Container-div');
    let textAreaToRemove = document.getElementById('textAreId');
    divTag.removeChild(textAreaToRemove);
    divTag.appendChild(pText);
}


document.addEventListener('keydown',function (event){

    if(event.ctrlKey && event.key==='e'){
        event.preventDefault()
        editText()
    }
    else if(event.ctrlKey && event.key==='s'){
        event.preventDefault()
        saveText()
    }
})