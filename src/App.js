import { useEffect, useState } from "react";
import ContenedorTareas from "./components/ContenedorTareas";
import Formulario from "./components/Formulario";

const initialTasks = localStorage.getItem("tasks")
	? JSON.parse(localStorage.getItem("tasksLocal"))
	: [];

function App() {
	const [tasks, setTasks] = useState(initialTasks);

	useEffect(() => {
		localStorage.setItem("tasksLocal", JSON.stringify(tasks));
	}, [tasks]);

	const agregarTarea = (task) => {
		setTasks([...tasks, task]);
	};

	const eliminarTarea = (id) => {
		const arrFiltrado = tasks.filter((item) => item.id !== id);
		setTasks(arrFiltrado);
	};

	const editarTarea = (id) => {
		const arrEditado = tasks.map((item) => {
			if (item.id === id) {
				item.state = !item.state;
			}
			return item;
		});
		setTasks(arrEditado);
	};

	return (
		<div className="container my-3">
			<h1 className="text-center text-success my-5">Ingrese una Tarea</h1>
			<Formulario agregarTarea={agregarTarea} />
			<ContenedorTareas
				tasks={tasks}
				eliminarTarea={eliminarTarea}
				editarTarea={editarTarea}
			/>
		</div>
	);
}

export default App;
