class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completa = false;
    }

    completar() {
        this.completa = !this.completa;
    }
}

class GestorDeTareas {
    constructor() {
        this.tarea = [];
    }

    agregarTarea(nombre) {
        const tarea = new Tarea(nombre);
        this.tarea.push(tarea);
        this.render();
    }

    eliminarTarea() {
        if (this.tarea.length > 0) {
            this.tarea.pop(); 
            this.render(); 
        }
    }

    TermnarTarea(index) {
        this.tarea[index].completar();
        this.render(); 
    }

    render() {
        const listaTareas = document.getElementById('lista-tareas');
        listaTareas.innerHTML = '';

        this.tarea.forEach((t, index) => {
            const li = document.createElement('li');
            li.textContent = t.nombre;


            if (t.completa) {
                li.style.backgroundColor = 'lightgreen';
            }

            
            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.addEventListener('click', () => this.editarTarea(index));

            
            const btnTerminar = document.createElement('button');
            btnTerminar.textContent = 'Tarea terminada';
            btnTerminar.addEventListener('click', () => this.TermnarTarea(index));

            
            li.appendChild(btnEditar);
            li.appendChild(btnTerminar);
            listaTareas.appendChild(li);
        });
    }

    editarTarea(index) {
        const nuevoNombre = prompt("Editar tarea:", this.tarea[index].nombre);
        if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
            this.tarea[index].nombre = nuevoNombre.trim();
            this.render();
        }
    }
}

const gestor = new GestorDeTareas();

document.getElementById('Agregar-tarea').addEventListener('click', () => {
    const input = document.getElementById('nueva-tarea');
    const nombreTarea = input.value.trim();
    if (nombreTarea) {
        gestor.agregarTarea(nombreTarea);
        input.value = '';
    }
});

document.getElementById('eliminar-tarea').addEventListener('click', () => {
    gestor.eliminarTarea();
});
