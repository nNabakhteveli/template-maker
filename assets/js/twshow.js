const oneguest = document.querySelector("#oneguest");
const twoguest = document.querySelector("#twoguest");
const container = document.querySelector(".rows-container");

const buttonsArr = document.querySelectorAll('.guest');

twoguest.addEventListener('click', () => {
    let isFocused = (document.activeElement === twoguest);
    console.log(isFocused);

    if(isFocused) {
        const brElement = document.createElement('br');

        const firstDiv = document.createElement("div");
        firstDiv.className = 'col-md-6.form-group.mb-3';

        const label = document.createElement('label');
        const labelNode = document.createTextNode('მეორე სტუმარი');
        
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'guest-name'
        input.id = 'name';
        input.className = 'form-control';
        input.placeholder = 'მეორე სტუმარის სახელი';
        input.setAttribute('for', 'guest');
        input.required = 'true';

        const secondDiv = document.createElement('div');
        secondDiv.className = 'form-group';

        const secondLabel = document.createElement("label");
        const secondLabelNode = document.createTextNode("სურათის ატვირთვა");

        const secondInput = document.createElement("input");
        secondInput.className = 'form-control-file';
        secondInput.setAttribute('for', 'image');
        secondInput.name = 'image';
        secondInput.type = 'file';
        secondInput.required = 'true';

        
    // -------------Main Div--------------------
        label.append(labelNode);
        firstDiv.appendChild(brElement);
        firstDiv.appendChild(label);
        firstDiv.appendChild(input);
    // -----------------------------------------

    // ------------Secondary Div----------------------------
        secondLabel.append(secondLabelNode);
        secondDiv.appendChild(secondLabel);
        secondDiv.appendChild(secondInput);
    // -----------------------------------------------------

        firstDiv.appendChild(secondDiv);
        container.appendChild(firstDiv); // Appending whole content to the html
                
    }

    if(document.activeElement === oneguest) {
        container.removeChild(firstDiv);
    }


});
