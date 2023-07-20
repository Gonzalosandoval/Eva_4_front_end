import React from 'react';


const contactenos = () =>  {
    return(
        <section id="Contactenos" class="hidden">
        <div class="content">
          <h2>Contactenos</h2>
          <form onsubmit="guardarDatos(event)">
          
  
            <div class="form-group">
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required/>
            </div>
  
            <div class="form-group">
              <label for="apellido">Apellido:</label>
              <input type="text" id="apellido" name="apellido" required/>
            </div>
  
            <div class="form-group">
              <label for="rut">RUT:</label>
              <input type="text" id="rut" name="rut" required/>
            </div>
  
            <div class="form-group">
              <label for="telefono">Número telefónico:</label>
              <input type="tel" id="telefono" name="telefono" required/>
            </div>
  
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required/>
            </div>
  
            <div class="form-group">
              <label for="comentario">Danos tu comentario:</label>
              <textarea id="comentario" name="comentario" required></textarea>
            </div>
  
            <button type="submit">Enviar</button>
            <button type="button" onclick="descargarJSON()">Descargar JSON</button>
            <button type="button" id="btnEditar" onclick="editarDatos()">Editar</button>
          </form>
        </div>
      </section>
      );
};

export default contactenos;