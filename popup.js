document.addEventListener("DOMContentLoaded", function() {
    var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggerList.forEach(function(popoverTriggerEl) {
        new bootstrap.Popover(popoverTriggerEl, {
            trigger: 'hover'
        });
    });
});



document.getElementById("exampleInputEmail3").addEventListener("input", function() {
    var age = parseInt(this.value);
    var svg = document.querySelector('#basic-addon2 svg');
    var popover = new bootstrap.Popover(document.getElementById('basic-addon2'));
    if (age < 40 || age >= 60) {
        svg.style.display = 'inline-block';
        if (age <= 40) {
            document.getElementById('basic-addon2').setAttribute('data-bs-content', "Age should be greater or equal to 40");
        } else if(age> 60) {
            document.getElementById('basic-addon2').setAttribute('data-bs-content', "Age should be less than 60");
        }
        popover.update();
    } else {
        svg.style.display = 'none';
        document.getElementById('basic-addon2').removeAttribute('data-bs-content');
    }
});


document.getElementById("exampleInputEmail4").addEventListener("input", function() {
    var input = this.value.trim(); 
    var isValid = /^\d+$/.test(input); 
    var svg = document.querySelector('#basic-addon4 svg');
    var popover = new bootstrap.Popover(document.getElementById('basic-addon4'));
    if (input && !isValid) { 
        svg.style.display = 'inline-block';
        popover.update();
    } else {
        svg.style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("exampleInputEmail5").addEventListener("input", function() {
        var input = this.value.trim(); 
        var isValid = /^\d+$/.test(input); 
        var svg = document.querySelector('#basic-addon6 svg');
        var popover = new bootstrap.Popover(document.getElementById('basic-addon6'));
        if (input && !isValid) { 
            svg.style.display = 'inline-block';
            popover.update();
        } else {
            svg.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("exampleInputEmail7").addEventListener("input", function() {
        var input = this.value.trim(); 
        var isValid = /^\d+$/.test(input); 
        var svg = document.querySelector('#basic-addon8 svg');
        var popover = new bootstrap.Popover(document.getElementById('basic-addon8'));
        if (input && !isValid) { 
            svg.style.display = 'inline-block';
            popover.update();
        } else {
            svg.style.display = 'none';
        }
    });
});



