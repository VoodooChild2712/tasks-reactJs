import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ agregarTarea }) => {
	const [task, setTask] = useState({
		title: "",
		description: "",
		state: "Pendiente",
		priority: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!task.title.trim() || !task.description.trim()) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Ingrese un titulo y una descripcion!",
			});
			return;
		}
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Tarea agregada con exito",
			showConfirmButton: false,
			timer: 1500,
		});

		agregarTarea({
			title: task.title,
			description: task.description,
			id: Date.now(),
			state: task.state === "Completado" ? true : false,
			priority: task.priority,
		});

	};

	const handleChange = (e) => {
		if (e.target.name === "priority") {
			setTask({ ...task, priority: !task.priority });
		} else {
			setTask({ ...task, [e.target.name]: e.target.value });
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="form-control mb-2"
				name="title"
				type="text"
				placeholder="Ingrese tarea"
				onChange={handleChange}
				value={task.title}
			/>
			<textarea
				className="form-control mb-2"
				name="description"
				placeholder="Ingrese descripcion"
				onChange={handleChange}
				value={task.description}
			></textarea>
			<select
				className="form-select mb-2"
				name="state"
				value={task.state}
				onChange={handleChange}
			>
				<option value="Pendiente">Pendiente</option>
				<option value="Completado">Completado</option>
			</select>
			<div>
				<input
					className="form-check-input"
					type="checkbox"
					name="priority"
					checked={task.priority}
					onChange={handleChange}
				/>
				<label className="form-check-label">Prioridad</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Enviar
			</button>
		</form>
	);
};

export default Formulario;
