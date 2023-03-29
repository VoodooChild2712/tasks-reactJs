import Tarea from "./Tarea";

const ContenedorTareas = (props) => {
	const { tasks, eliminarTarea, editarTarea } = props;
	return (
		<div className="my-5">
			<h2 className="mb-2 text-primary text-center">Tareas</h2>
            {tasks.length === 0 ? <div className="border border-dark border-opacity-25"><p className="text-center">No hay tareas</p></div> : tasks.map((item) => (
                <Tarea key={item.id} item={item} eliminarTarea={eliminarTarea} editarTarea={editarTarea}/>
            ))}
		</div>
	);
};

export default ContenedorTareas;
