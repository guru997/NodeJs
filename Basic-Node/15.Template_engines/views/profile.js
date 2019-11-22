<html>
    <head>
        <title>EJS Profile</title>
        <style>
            body
            {
                background: skyblue;
                font-family: Verdana;
                color: #fff;
                padding:30px
            }
            h1
            {
                font-size: 48px;
                text-transform: uppercase;
                letter-spacing: 2px;
                text-align: center;
            }
            p
            {
                font-size: 16px;
                text-align: center;
            }
            ul
            {
                font-size: 16px;
                text-align: center;
            }
        </style>
    </head>

    <body>
        <h1>Name of the person is <%= person %></h1>
        <p><b>Age :</b> <%= data.age %></p>
        <p><b>Job :</b> <%= data.job %></p>
        <p>Hobbies</p>
        <ul>
            <% data.hobbies.forEach(function(item){%>
                <li><%= item %></li>
           <% }); %>

        </ul>
    </body>
</html>
