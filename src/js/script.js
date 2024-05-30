document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sidebar-btn, nav button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const action = event.target.getAttribute('data-action');
            handleAction(action);
        });
    });
});

function handleAction(action) {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    switch (action) {
        case 'registrar':
            // Logic for registering items (this can be a form or another UI component)
            alert('Registrar funcionalidad aún no implementada.');
            break;
        case 'verificar':
            // Example data
            const exampleData = [
                { producto: 'Producto 3', cantidad: 30, precio: '$15.00' },
                { producto: 'Producto 4', cantidad: 40, precio: '$20.00' }
            ];
            exampleData.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${item.producto}</td><td>${item.cantidad}</td><td>${item.precio}</td>`;
                tableBody.appendChild(row);
            });
            break;
        case 'eliminar':
            // Logic for deleting items
            alert('Eliminar funcionalidad aún no implementada.');
            break;
        default:
            // Default action or home screen
            const defaultData = [
                { producto: 'Producto 1', cantidad: 10, precio: '$5.00' },
                { producto: 'Producto 2', cantidad: 20, precio: '$10.00' }
            ];
            defaultData.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${item.producto}</td><td>${item.cantidad}</td><td>${item.precio}</td>`;
                tableBody.appendChild(row);
            });
            break;
    }
}
