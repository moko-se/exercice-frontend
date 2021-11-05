class Formulaire {
    constructor(lastname, firstname, email, password){
        this.lastname=lastname;
        this.firstname=firstname;
        this.email=email;
        this.password=password;

        this.el = document.querySelector('#app');
        this.run();
    }
    renderForm (){
        // Create elements
        const title = document.createElement('h1');
        const form = document.createElement('form');
        const lastnameInput = document.createElement('input');
        const firstnameInput = document.createElement('input');
        const emailInput = document.createElement('input');
        const passwordInput = document.createElement('input');
        const btnSubmit = document.createElement('input');
        const boxMessage = document.createElement('div');
        // Add attribute
        boxMessage.setAttribute('class','boxMessage');
        form.setAttribute('method','post');
        lastnameInput.setAttribute('type','text');
        firstnameInput.setAttribute('type','text');
        emailInput.setAttribute('type','text');
        passwordInput.setAttribute('type','password');
        btnSubmit.setAttribute('type','submit')

        lastnameInput.setAttribute('placeholder','lastname');
        firstnameInput.setAttribute('placeholder','firstname');
        emailInput.setAttribute('placeholder','email');
        passwordInput.setAttribute('placeholder','password');
        btnSubmit.setAttribute('value','Send')

        lastnameInput.setAttribute('id','lastname');
        firstnameInput.setAttribute('id','firstname');
        emailInput.setAttribute('id','email');
        passwordInput.setAttribute('id','password');
        form.setAttribute('id','form');
        //Append to form
        form.appendChild(lastnameInput);
        form.appendChild(firstnameInput);
        form.appendChild(emailInput);
        form.appendChild(passwordInput);
        form.appendChild(btnSubmit);

        title.textContent = 'Formulaire';
        //Append to app
        this.el.appendChild(title);
        this.el.appendChild(boxMessage);
        this.el.appendChild(form);
    }
    checkForm (){

        const namesPathern = /[a-zA-Z]/;
        const emailPathern = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
        const passwordPathern = /^([0-9a-zA-Z_]){6,20}$/;

        const message = document.querySelector('.boxMessage');
        this.lastname = document.querySelector('#lastname').value;
        this.firstname = document.querySelector('#firstname').value;
        this.email = document.querySelector('#email').value;
        this.password = document.querySelector('#password').value;

        let errors = [];

        if (this.lastname == "" || this.firstname == "" || this.email == "" || this.password == "" ){
            errors.push('Veuillez remplire tous les champs');
        }
        if (!this.lastname.match(namesPathern) || !this.firstname.match(namesPathern) ){
            errors.push(` ${this.lastname} n'est pas correct`);
        }
        if (!this.firstname.match(namesPathern) ){
            errors.push(`${this.firstname} N'est pa correct`);
        }
        if (!this.email.match(emailPathern) ){
            errors.push(` Le format de l'email n'est pas correct`);
        }
        if (!this.password.match(passwordPathern) ){
            errors.push(`Le format du mot de passe n'est pas correct`);
        }
        if (errors.length > 0){
            message.textContent = errors[0];
            message.classList.add('active', 'error');
        }else{
            message.textContent = 'Vos information sont correcte';
            message.classList.remove('active', 'error');
            message.classList.add('active', 'success');
        }
    }

    submitForm (){
        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.checkForm(); 
        });
    }

    run (){
        this.renderForm();
        this.submitForm();
    }
}

const myForm = new Formulaire()