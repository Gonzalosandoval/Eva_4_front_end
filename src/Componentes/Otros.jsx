import React from 'react';


const otros = () =>  {
    return(
        <section id="Registros" className="hidden">
            <div className="content">
                <h2>Registros</h2>
                <table id="tablaRegistros">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>RUT</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                    <th>Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-id="0">
                    <td>
                        <input type="checkbox" className="checkbox-registro" />
                    </td>
                    {/* Contenido de las otras celdas */}
                    {/* Contenido de las otras celdas */}
                    </tr>
                    {/* Resto de las filas */}
                    {/* Filas de la tabla se generan dinámicamente */}
                </tbody>
                </table>
            </div>
        
                

        </section>
    );
    };