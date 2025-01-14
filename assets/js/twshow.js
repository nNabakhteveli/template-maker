const oneguest = document.querySelector("#oneguest");
const twoguest = document.querySelector("#twoguest");
const container = document.querySelector(".rows-container");
const buttonsArr = document.querySelectorAll('.guest');


const appendSecondForm = (function() {
    let executed = false;
    return function() {
        if (!executed) {
            twoguest.addEventListener('click', () => {
            executed = true;
                let isFocused = (document.activeElement === twoguest);
                console.log(isFocused);
        
                if(isFocused) {
                   const HTMLtoAppend = `
                    <div class="rows-container">
                        <div class="col-md-6 form-group mb-3">
                            <label class="col-form-label">სტუმარი</label>
                            <input class="form-control" id="name" for="guest" type="text" name="guestName" placeholder="სტუმარის სახელი"/>
                        
                            <div class="form-group">
                                <label for="exampleFormControlFile1">სურათის ატვირთვა</label>
                                <input class="form-control-file" id="exampleFormControlFile1" for="image" name="image" type="file" required='true'/>
                            </div>
                        </div>
                        <br>
                        <div class="col-md-6 form-group mb-3">
                            <label class="col-form-label">მეორე სტუმარი</label>
                            <input class="form-control" id="name" for="secondGuest" type="text" name="secondGuestName" placeholder="სტუმარის სახელი"/>
                            
                            <div class="form-group">
                                <label for="exampleFormControlFile1">სურათის ატვირთვა</label>
                                <input class="form-control-file" id="exampleFormControlFile1" for="secondImage" name="secondImage" type="file" required='true'/>
                            </div>
                        </div>
                    </div>
                   `;

                   container.innerHTML = HTMLtoAppend;           
                }
            });

            oneguest.addEventListener('click', () => {
                executed = true;
                let isFocused = (document.activeElement === oneguest);
                console.log(isFocused);
        
                if(isFocused) {
                    const HTMLtoAppend = `
                    <div class="rows-container">
                        <div class="row"></div>
                        <div class="col-md-6 form-group mb-3">
                            <label class="col-form-label">სტუმარი</label>
                            <input class="form-control" id="name" for="guest" type="text" name="guestName" placeholder="სტუმარის სახელი" required=''/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">სურათის ატვირთვა</label>
                            <input class="form-control-file" id="exampleFormControlFile1" for="image" name="image" type="file" required=""/>
                        </div>
                    </div>`;
                    container.innerHTML = HTMLtoAppend;           
                }
            });
        }
    };
})();

appendSecondForm();
