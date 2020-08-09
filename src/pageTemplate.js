


const generateTeam = team => {
//html for manager
const generateManager = manager => {
    return `
      <div class = "card employee-card">
        <div class = "card-header>
          <h2 class="card-title">${manager.getName()}/h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.office}</li>
          </ul>
        </div>
      </div>  

    `;
  };


//html for engineers 
const generateEngineer = engineer => {
    return `
      <div class = "card employee-card">
        <div class = "card-header>
          <h2 class="card-title">${engineer.getName()}/h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">Email: <a href="https://github.com${engineer.getGithub()}" target="_blank" rel="none">${engineer.getGithub()}</a></li>
          </ul>
        </div>
      </div>  

    `;
  };


//html for Interns 
const generateIntern = intern => {
    return `
      <div class = "card employee-card">
        <div class = "card-header>
          <h2 class="card-title">${intern.getName()}/h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>  s

    `;
  };

  const html = []

    html.push(team 
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team 
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team 
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    console.log(html)
return html;


};



// export function to generate the entire page

module.exports = team => {
    console.log(team)
    return ` 
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>

    ${generateTeam(team)}
      

  </body>
  </html>
  `;
};

