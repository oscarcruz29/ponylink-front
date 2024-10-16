<template>
  <div>
    <h1>Bienvenido al Feed</h1>
    <!-- Aquí agregas el Web Component -->
    <job-card></job-card>
    <user-card></user-card>
  </div>
</template>

<script>
export default {
  name: 'FeedComponent',
  mounted() {
    // Registrar el Web Component al cargar este componente de Vue
    class JobCard extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
         <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          padding: 16px;
          max-width: 600px;
          font-family: Arial, sans-serif;
        }
        .logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        .company {
          font-size: 1.2em;
          font-weight: bold;
        }
        .job-title {
          font-size: 1.1em;
          margin: 10px 0;
        }
        .requirements {
          margin-top: 16px;
        }
        .actions {
          margin-top: 16px;
          flex-direction: row;
          justify-content: space-around;
        }
        button {
          padding: 8px 16px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .header{
          display: flex;
          flex-direction: row;
        }
        .company-info{
            margin-left: 10px;
        }
        .no-boton{
            background-color: white;
            color: black;
        }
        .boton{
            margin-left: 210px;
            background-color: #E8EDFF;
            color: #001839;
        }
         a {
          text-decoration: none;
          color: #555;
          font-size: 0.9em;
          margin-right: 15px;
        }
      </style>

          <div class="card">
        <div class="header">
          <img src="https://via.placeholder.com/50" alt="Company Logo" class="logo">
          <div class="company-info">
            <div class="company">TechMed S.A</div>
            <div class="industry">Empresa de Tecnología</div>
          </div>
        </div>
        <div class="job-info">
          <div class="job-title">Desarrollador(a) Frontend - Remoto</div>
          <p>
            En TechMed S.A, buscamos un/a Desarrollador/a Frontend con experiencia en HTML,
            CSS, JavaScript y frameworks como Vue.js o React. Si te apasiona crear interfaces 
            de usuario intuitivas y tienes experiencia trabajando con equipos ágiles, ¡queremos conocerte!
          </p>
          <div class="requirements">
            <strong>Requisitos:</strong>
            <ul>
              <li>Al menos 2 años de experiencia en desarrollo frontend.</li>
              <li>Conocimientos sólidos en Vue.js o React.</li>
              <li>Experiencia en diseño responsive y buenas prácticas de UX/UI.</li>
            </ul>
          </div>
        </div>
        <div class="actions">
            <a href="#">Me gusta</a>
            <a href="#">Comentar</a>
            <a href="#">Compartir</a>
            <button class="boton">Aplicar</button>
        </div>
    </div>
        `;
        shadow.appendChild(template.content.cloneNode(true));
      }
    }

    customElements.define('job-card', JobCard);

    // Registrar el Web Component al cargar este componente de Vue
    class UserCard extends HTMLElement {
      constructor() {
        super();

        // Crear shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Crear el template de HTML
        const template = document.createElement('template');
        template.innerHTML = `
          <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          padding: 16px;
          max-width: 600px;
          font-family: Arial, sans-serif;
          margin-bottom: 20px;
        }
        .header {
          display: flex;
          align-items: center;
        }
        .logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        .user-info {
          margin-left: 10px;
        }
        .user-name {
          font-size: 1.2em;
          font-weight: bold;
          margin: 0;
        }
        .user-job {
          font-size: 0.9em;
          color: #666;
          margin: 0;
        }
        .content {
          margin-top: 10px;
          font-size: 0.95em;
        }
        .status {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }
        .status span {
          margin-left: 5px;
          background-color: #d4edda;
          color: #155724;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 0.9em;
        }
        .actions {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
        }
        .actions button {
          background-color: #007BFF;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .actions button:hover {
          background-color: #0056b3;
        }
        .social-actions {
            margin-top: 10px;
          display: flex;
          justify-content: space-around;
          width: 250px;
        }
        .social-actions a {
          text-decoration: none;
          color: #555;
          font-size: 0.9em;
          margin-right: 15px;
        }
      </style>

          <div class="card">
        <div class="header">
          <img src="https://via.placeholder.com/50" alt="User Avatar" class="logo">
          <div class="user-info">
            <p class="user-name">Sara García</p>
            <p class="user-job">Desarrolladora web</p>
          </div>
        </div>
        <div class="content">
          ¡Me siento muy orgullosa de haber completado el desarrollo de mi sistema de punto de venta!
          Ha sido un reto emocionante trabajar con Laravel y Vue.js. ¡Listo para nuevos desafíos!
          <span>#DesarrolloWeb #ProyectosTI</span>
        </div>
        <div class="status">
          <!--img src="https://via.placeholder.com/20" alt="Search Icon"-->
          <span>Buscando trabajo</span>
        </div>
        <div class="social-actions">
          <a href="#">Me gusta</a>
          <a href="#">Comentar</a>
          <a href="#">Compartir</a>
        </div>
      </div>
        `;

        // Adjuntar el contenido del template al shadow DOM
        shadow.appendChild(template.content.cloneNode(true));
      }
    }

    // Definir el nuevo Web Component
    customElements.define('user-card', UserCard);
  },
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para el FeedComponent */
</style>









