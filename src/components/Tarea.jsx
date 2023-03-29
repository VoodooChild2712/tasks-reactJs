import React from "react";

const Tarea = (props) => {
	const { item, eliminarTarea, editarTarea } = props;
	return (
		<li className="list-group-item d-flex justify-content-between align-items-start border border-dark border-opacity-25 p-2 m-2">
			<div className="ms-2 me-auto">
				<div className="fs-bold">
					{item.title}
					{item.state ? (
						<span className="bg-success text-light badge ms-5">Completado</span>
					) : (
						<span className="bg-info text-dark badge ms-5">Pendiente</span>
					)}
				</div>
				<p>{item.description}</p>
				<div>
					<button className="btn btn-sm btn-danger me-1" onClick= {() => eliminarTarea(item.id)}>Eliminar</button>
					<button className="btn btn-sm btn-warning me-1" onClick={() => editarTarea(item.id)}>Editar</button>
				</div>
			</div>
			{item.priority ? (
				<span className="badge bg-primary rounded-pill">Prioritario</span>
			) : (
				<span className="badge bg-warning rounded-pill">No prioritario</span>
			)}
		</li>
	);
};

export default Tarea;
