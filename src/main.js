document.addEventListener('DOMContentLoaded', function() {
    const cargoSelect = document.getElementById('cargo');
    const dominioContent = document.getElementById('dominio-content');
    const dominioSelect = document.getElementById('dominio-select');
    const redesSelect = document.getElementById('redes-select');
    const dropdowns = document.querySelectorAll('.dropdown-content');

    const dominios = {
        desenvolvedor: ['frontend', 'backend', 'fullstack', 'mobile'],
        designer: ['ui', 'ux', 'graphic'],
        gerente: ['project management', 'team lead'],
        analista: ['data analysis', 'business analysis']
    };

    cargoSelect.addEventListener('change', function() {
        const selectedCargo = cargoSelect.value;
        updateDominios(selectedCargo);
    });

    function updateDominios(cargo) {
        dominioContent.innerHTML = ''; 
        if (dominios[cargo]) {
            dominios[cargo].forEach(dominio => {
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = dominio;
                checkbox.name = 'dominio[]';
                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(dominio.charAt(0).toUpperCase() + dominio.slice(1)));
                dominioContent.appendChild(label);
            });
        }
    }

    
    updateDominios(cargoSelect.value);

    
    dominioSelect.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown(dominioContent);
    });

    redesSelect.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown(redesSelect.nextElementSibling);
    });

    function toggleDropdown(dropdown) {
        
        dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('show');
            }
        });
      
        dropdown.classList.toggle('show');
    }

   
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });
});

function toggleUrlInput(checkbox) {
    const urlInput = checkbox.nextElementSibling;
    urlInput.style.display = checkbox.checked ? 'block' : 'none';
}