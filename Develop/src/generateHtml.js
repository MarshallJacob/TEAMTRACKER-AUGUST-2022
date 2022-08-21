const generateHtmlPage = function generateHtmlPage(generatedCards) {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test HTML</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <nav class="nav navbar navbar-dark bg-dark">
        <h1>My Team</h1>
    </nav>

    <div id="listTitle">
        <h3>Current members:</h3>
    </div>

    <div id="cards">
        ${generatedCards}
    </div> 
</body>
</html>
    `
};

const managerInfo = function (manager) {
    return `
    <div class="memberCard card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager: ${manager.name}</div>
        <div class="card-body">
          <h5 class="card-title">ID: ${manager.id}</h5>
          <ul class="card-text">
              <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
              <li>Office #: ${manager.oNumber}</li>
          </ul>
        </div>
    </div>
    `
};

const engineerInfo = function (engineer) {
    return `
    <div class="memberCard card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Engineer: ${engineer.name}</div>
        <div class="card-body">
          <h5 class="card-title">ID: ${engineer.id}</h5>
          <ul class="card-text">
              <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
          </ul>
        </div>
    </div>
    `
};

const internInfo = function (intern) {
    return `
    <div class="memberCard card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Intern: ${intern.name}</div>
        <div class="card-body">
          <h5 class="card-title">ID: 1</h5>
          <ul class="card-text">
              <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li>School: ${intern.school}</li>
          </ul>
        </div>
    </div>
    `
}