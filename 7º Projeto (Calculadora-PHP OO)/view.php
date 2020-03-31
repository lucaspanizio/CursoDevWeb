<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Calculadora PHP</title>

    <link href="estilo.css" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

</head>

<body>

    <div id="calculator">
        <form method="post" action="calcular.php">
            <!-- Screen and clear key -->
            <div class="title">
                <h1>Calculadora PHP OO</h1>
            </div>

            <div class="keys">
                <label>
                    <input type="radio" name="operacao" value="somar">
                    Somar</label>

                <label>
                    <input type="radio" name="operacao" value="subtrair">
                    Subtrair</label>

                <label>
                    <input type="radio" name="operacao" value="multiplicar">
                    Multiplicar</label>

                <label>
                    <input type="radio" name="operacao" value="dividir">
                    Dividir</label>
            </div>

            <div class="down">
                <input class="screen" name="numero1" placeholder="Nº1">
                <input class="screen" name="numero2" placeholder="Nº2">
                <input class="eval" type="submit" value="Calcular">
            </div>
           
        </form>
    </div>

</body>

</html>