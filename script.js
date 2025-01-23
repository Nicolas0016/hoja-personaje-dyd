// Función para guardar los datos en localStorage
document.getElementById("guardarBtn").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const raza = document.getElementById("raza").value;
  const clase = document.getElementById("clase").value;
  const nivel = document.getElementById("nivel").value;
  const pr = document.getElementById("pr").value;
  const talentos = document.getElementById("talentos").value;
  const trasfondos = document.getElementById("trasfondos").value;

  // Obtener los valores de habilidades desde el formulario
  const habilidades = {
    alerta: document.getElementById("alerta").value,
    comunicacion: document.getElementById("comunicacion").value,
    manipulacion: document.getElementById("manipulacion").value,
    erudicion: document.getElementById("erudicion").value,
    sufragio: document.getElementById("sufragio").value,
    supervivencia: document.getElementById("supervivencia").value,
  };

  // Obtener las estadísticas desde el formulario
  const estadisticas = {
    fue: {
      cuant: document.getElementById("fueCuant").value,
      modify: document.getElementById("fueModify").value,
    },
    des: {
      cuant: document.getElementById("desCuant").value,
      modify: document.getElementById("desModify").value,
    },
    con: {
      cuant: document.getElementById("conCuant").value,
      modify: document.getElementById("conModify").value,
    },
    int: {
      cuant: document.getElementById("intCuant").value,
      modify: document.getElementById("intModify").value,
    },
    sab: {
      cuant: document.getElementById("sabCuant").value,
      modify: document.getElementById("sabModify").value,
    },
    car: {
      cuant: document.getElementById("carCuant").value,
      modify: document.getElementById("carModify").value,
    },
  };

  // Obtener otros valores desde el formulario
  const otros = {
    pv: document.getElementById("pv").value,
    mov: document.getElementById("mov").value,
    def: document.getElementById("def").value,
    atq: document.getElementById("atq").value,
    ins: document.getElementById("ins").value,
    pod: document.getElementById("pod").value,
  };

  // Obtener valores de armas y equipo
  const equipo = document.getElementById("equipo").value;
  const armas = document.getElementById("armas").value;

  // Crear el objeto personaje con todos los datos
  const personaje = {
    nombre,
    raza,
    clase,
    nivel,
    pr,
    talentos,
    trasfondos,
    habilidades,
    estadisticas,
    otros,
    equipo,
    armas,
  };

  // Guardar en localStorage
  localStorage.setItem("personaje", JSON.stringify(personaje));

  alert("Personaje guardado correctamente!");
});

// Función para cargar los datos desde localStorage al formulario
document.addEventListener("DOMContentLoaded", function () {
  // Verificar si hay un personaje guardado en localStorage
  const personajeGuardado = localStorage.getItem("personaje");

  if (personajeGuardado) {
    const personaje = JSON.parse(personajeGuardado);

    // Cargar los valores en los campos del formulario
    document.getElementById("nombre").value = personaje.nombre || "";
    document.getElementById("raza").value = personaje.raza || "";
    document.getElementById("clase").value = personaje.clase || "";
    document.getElementById("nivel").value = personaje.nivel || "";
    document.getElementById("pr").value = personaje.pr || "";
    document.getElementById("talentos").value = personaje.talentos || "";
    document.getElementById("trasfondos").value = personaje.trasfondos || "";
    document.getElementById("armas").value = personaje.armas || "";
    document.getElementById("equipo").value = personaje.equipo || "";

    // Cargar habilidades
    document.getElementById("alerta").value =
      personaje.habilidades.alerta || "";
    document.getElementById("comunicacion").value =
      personaje.habilidades.comunicacion || "";
    document.getElementById("manipulacion").value =
      personaje.habilidades.manipulacion || "";
    document.getElementById("erudicion").value =
      personaje.habilidades.erudicion || "";
    document.getElementById("sufragio").value =
      personaje.habilidades.sufragio || "";
    document.getElementById("supervivencia").value =
      personaje.habilidades.supervivencia || "";

    // Cargar estadísticas
    document.getElementById("fueCuant").value =
      personaje.estadisticas.fue.cuant || "";
    document.getElementById("fueModify").value =
      personaje.estadisticas.fue.modify || "";

    document.getElementById("desCuant").value =
      personaje.estadisticas.des.cuant || "";
    document.getElementById("desModify").value =
      personaje.estadisticas.des.modify || "";

    document.getElementById("conCuant").value =
      personaje.estadisticas.con.cuant || "";
    document.getElementById("conModify").value =
      personaje.estadisticas.con.modify || "";

    document.getElementById("intCuant").value =
      personaje.estadisticas.int.cuant || "";
    document.getElementById("intModify").value =
      personaje.estadisticas.int.modify || "";

    document.getElementById("sabCuant").value =
      personaje.estadisticas.sab.cuant || "";
    document.getElementById("sabModify").value =
      personaje.estadisticas.sab.modify || "";

    document.getElementById("carCuant").value =
      personaje.estadisticas.car.cuant || "";
    document.getElementById("carModify").value =
      personaje.estadisticas.car.modify || "";

    // Otros valores
    document.getElementById("pv").value = personaje.otros.pv || "";
    document.getElementById("mov").value = personaje.otros.mov || "";
    document.getElementById("def").value = personaje.otros.def || "";
    document.getElementById("atq").value = personaje.otros.atq || "";
    document.getElementById("ins").value = personaje.otros.ins || "";
    document.getElementById("pod").value = personaje.otros.pod || "";
  }
});
