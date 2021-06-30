// Валидация телефона



function telValidation() {

    function InputMask(options) {
        this.el = this.getElement(options.selector);
        if (!this.el) return console.log('Что-то не так с селектором');
        this.layout = options.layout || '+7 (___) ___-__-__';
        this.maskreg = this.getRegexp();

        this.setListeners();
    }

    InputMask.prototype.getRegexp = function() {
        let str = this.layout.replace(/_/g, '\\d')
        str = str.replace(/\(/g, '\\(')
        str = str.replace(/\)/g, '\\)')
        str = str.replace(/\+/g, '\\+')
        str = str.replace(/\s/g, '\\s')

        return str;
    }

    InputMask.prototype.mask = function(e) {
        let _this = e.target,
            matrix = this.layout,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = _this.value.replace(/\D/g, "");

        if (def.length >= val.length) val = def;

        _this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });

        if (e.type == "blur") {
            var regexp = new RegExp(this.maskreg);
            if (!regexp.test(_this.value)) _this.value = "";
        } else {
            this.setCursorPosition(_this.value.length, _this);
        }
    }

    InputMask.prototype.setCursorPosition = function(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }

    InputMask.prototype.setListeners = function() {
        this.el.addEventListener("input", this.mask.bind(this), false);
        this.el.addEventListener("focus", this.mask.bind(this), false);
        this.el.addEventListener("blur", this.mask.bind(this), false);
        this.el.addEventListener('keyup', function(evt) {
            let length = this.value.length
            if (length < 18) {
                this.style.border = "1px solid #de4145";

            } else {
                this.style.border = " 1px solid #3A4047";
            }
        });
    }

    InputMask.prototype.getElement = function(selector) {
        if (selector === undefined) return false;
        if (this.isElement(selector)) return selector;
        if (typeof selector == 'string') {
            var el = document.querySelector(selector);
            if (this.isElement(el)) return el;
        }
        return false
    }

    InputMask.prototype.isElement = function(element) {
        return element instanceof Element || element instanceof HTMLDocument;
    }



    let inputs = document.querySelectorAll('input[type="tel"]');

    Array.prototype.forEach.call(inputs, function(input) {
        new InputMask({
            selector: input, // в качестве селектора может быть элемент, или, собственно css селектор('#input', '.input', 'input'). Если селектор - тег или класс - будет получен только первый элемент
            layout: input.dataset.mask
        })
    })
}


telValidation();




// Валидация форм




function prevent(evt) {
    evt.preventDefault();
}
let forms = document.querySelectorAll('form');
forms.forEach((form) => {
    let inputwrap = form.querySelectorAll('.input-label');
    let btnSubmit = form.querySelector('.input-submit');

    let flagMadeValidation = false;

    function inputValidation() {

        inputwrap.forEach((element) => {

            let input = element.querySelector('.input');

            let validMessage = "";

            let messageError = document.createElement('div');
            messageError.className = "alert";
            if (!input.checkValidity()) {

                if (!input.value) {
                    validMessage = "Поле обязательно для заполнения";
                    element.classList.add('error');
                    messageError.innerHTML = validMessage;
                    element.append(messageError)

                } else {
                    validMessage = input.dataset.title;

                    element.classList.add('error');
                    messageError.innerHTML = validMessage;
                    element.append(messageError)

                }

                if (form.querySelector('.error')) {
                    form.addEventListener('submit', prevent)

                    btnSubmit.addEventListener('submit', prevent)

                }

            } else {
                element.classList.remove('error');
                if (element.querySelector('.alert')) {
                    element.querySelector('.alert').remove();
                }
                if (!form.querySelector('.error')) {


                    btnSubmit.removeEventListener('submit', prevent)

                    form.removeEventListener('submit', prevent)
                }

            }
        })
    }
    if (btnSubmit) {
        btnSubmit.addEventListener('click', function() {
            inputValidation()
            flagMadeValidation = true;
        })
    }


    inputwrap.forEach((element) => {
        let input = element.querySelector('.input');
        input.addEventListener('blur', function() {
            if (flagMadeValidation) {
                inputValidation()
            }
        })
    });
})