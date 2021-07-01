function Aumentar() {
    document.getElementById("funciones").innerHTML = "";
    var valor = document.getElementById("eq").value.toString();
    if (valor.includes("cos")){
        //funcion coseno
        var inpt = document.createElement('input');
        inpt.type = "text";
        inpt.name = "input_fx";
        inpt.id = "input_fx";
        inpt.style = 'width : 20px;';
        inpt.value = "1";
        var inpt1 = document.createElement('input');
        inpt1.type = "text";
        inpt1.name = "input_xuno";
        inpt1.id = "input_xuno";
        inpt1.style = 'width : 20px;';
        inpt1.value = "1";
        var inpt2 = document.createElement('input');
        inpt2.type = "text";
        inpt2.name = "input_sum";
        inpt2.id = "input_sum";
        inpt2.style = 'width : 20px;';
        inpt2.value = "0";
        var inpt3 = document.createElement('input');
        inpt3.type = "text";
        inpt3.name = "input_sumx";
        inpt3.id = "input_sumx";
        inpt3.style = 'width : 20px;';
        inpt3.value = "0";
        var l1 = document.createElement('label');
        l1.id = "l1";
        var l2 = document.createElement('label');
        l2.id = "l2";
        var l3 = document.createElement('label');
        l3.id = "l3";
        var l4 = document.createElement('label');
        l4.id = "l4";
        var b1 = document.createElement('button');
        b1.textContent = "+";
        b1.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);;
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            fx += 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "cos(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b2 = document.createElement('button');
        b2.textContent = "-";
        b2.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            fx -= 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "cos(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b3 = document.createElement('button');
        b3.textContent = "+";
        b3.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            x += 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "cos(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b4 = document.createElement('button');
        b4.textContent = "-";
        b4.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if(x === 0){
                x;
            }else{
                x -= 0.1;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "cos(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b5 = document.createElement('button');
        b5.textContent = "+";
        b5.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if (sum === 360){
                sum;  
            }else{
                sum += 30;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "cos(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b6 = document.createElement('button');
        b6.textContent = "-";
        b6.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if (sum === -360) {
                sum;
            } else {
                sum -= 30;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "cos(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b7 = document.createElement('button');
        b7.textContent = "+";
        b7.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sumx += 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "cos(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;               
        };
        var b8 = document.createElement('button');
        b8.textContent = "-";
        b8.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sumx -= 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "cos(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        document.getElementById("funciones").appendChild(l1);
        document.getElementById("l1").innerHTML = "F(X); ";
        document.getElementById("funciones").appendChild(b1);
        document.getElementById("funciones").appendChild(inpt);
        document.getElementById("funciones").appendChild(b2);
        document.getElementById("funciones").appendChild(l2);
        document.getElementById("l2").innerHTML = "cos(";
        document.getElementById("funciones").appendChild(b3);
        document.getElementById("funciones").appendChild(inpt1);
        document.getElementById("funciones").appendChild(b4);
        document.getElementById("funciones").appendChild(l3);
        document.getElementById("l3").innerHTML = " x + ";
        document.getElementById("funciones").appendChild(b5);
        document.getElementById("funciones").appendChild(inpt2);
        document.getElementById("funciones").appendChild(b6);
        document.getElementById("funciones").appendChild(l4);
        document.getElementById("l4").innerHTML = " ) + ";
        document.getElementById("funciones").appendChild(b7);
        document.getElementById("funciones").appendChild(inpt3);
        document.getElementById("funciones").appendChild(b8);
    } else if (valor.includes("sin")){
        //funcion seno
        var inpt = document.createElement('input');
        inpt.type = "text";
        inpt.name = "input_fx";
        inpt.id = "input_fx";
        inpt.style = 'width : 20px;';
        inpt.value = "1";
        var inpt1 = document.createElement('input');
        inpt1.type = "text";
        inpt1.name = "input_xuno";
        inpt1.id = "input_xuno";
        inpt1.style = 'width : 20px;';
        inpt1.value = "1";
        var inpt2 = document.createElement('input');
        inpt2.type = "text";
        inpt2.name = "input_sum";
        inpt2.id = "input_sum";
        inpt2.style = 'width : 20px;';
        inpt2.value = "0";
        var inpt3 = document.createElement('input');
        inpt3.type = "text";
        inpt3.name = "input_sumx";
        inpt3.id = "input_sumx";
        inpt3.style = 'width : 20px;';
        inpt3.value = "0";
        var l1 = document.createElement('label');
        l1.id = "l1";
        var l2 = document.createElement('label');
        l2.id = "l2";
        var l3 = document.createElement('label');
        l3.id = "l3";
        var l4 = document.createElement('label');
        l4.id = "l4";
        var b1 = document.createElement('button');
        b1.textContent = "+";
        b1.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);;
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            fx += 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "sin(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b2 = document.createElement('button');
        b2.textContent = "-";
        b2.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            fx -= 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "sin(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b3 = document.createElement('button');
        b3.textContent = "+";
        b3.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            x += 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "sin(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b4 = document.createElement('button');
        b4.textContent = "-";
        b4.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if(x === 0){
                x;
            }else{
                x -= 0.1;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "sin(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b5 = document.createElement('button');
        b5.textContent = "+";
        b5.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if (sum === 360){
                sum;  
            }else{
                sum += 30;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "sin(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b6 = document.createElement('button');
        b6.textContent = "-";
        b6.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if (sum === -360) {
                sum;
            } else {
                sum -= 30;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "sin(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b7 = document.createElement('button');
        b7.textContent = "+";
        b7.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sumx += 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "sin(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;               
        };
        var b8 = document.createElement('button');
        b8.textContent = "-";
        b8.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sumx -= 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "sin(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        document.getElementById("funciones").appendChild(l1);
        document.getElementById("l1").innerHTML = "F(X); ";
        document.getElementById("funciones").appendChild(b1);
        document.getElementById("funciones").appendChild(inpt);
        document.getElementById("funciones").appendChild(b2);
        document.getElementById("funciones").appendChild(l2);
        document.getElementById("l2").innerHTML = "sin(";
        document.getElementById("funciones").appendChild(b3);
        document.getElementById("funciones").appendChild(inpt1);
        document.getElementById("funciones").appendChild(b4);
        document.getElementById("funciones").appendChild(l3);
        document.getElementById("l3").innerHTML = " x + ";
        document.getElementById("funciones").appendChild(b5);
        document.getElementById("funciones").appendChild(inpt2);
        document.getElementById("funciones").appendChild(b6);
        document.getElementById("funciones").appendChild(l4);
        document.getElementById("l4").innerHTML = " ) + ";
        document.getElementById("funciones").appendChild(b7);
        document.getElementById("funciones").appendChild(inpt3);
        document.getElementById("funciones").appendChild(b8);
    } else if (valor.includes("tan")) {
        var inpt = document.createElement('input');
        inpt.type = "text";
        inpt.name = "input_fx";
        inpt.id = "input_fx";
        inpt.style = 'width : 20px;';
        inpt.value = "1";
        var inpt1 = document.createElement('input');
        inpt1.type = "text";
        inpt1.name = "input_xuno";
        inpt1.id = "input_xuno";
        inpt1.style = 'width : 20px;';
        inpt1.value = "1";
        var inpt2 = document.createElement('input');
        inpt2.type = "text";
        inpt2.name = "input_sum";
        inpt2.id = "input_sum";
        inpt2.style = 'width : 20px;';
        inpt2.value = "0";
        var inpt3 = document.createElement('input');
        inpt3.type = "text";
        inpt3.name = "input_sumx";
        inpt3.id = "input_sumx";
        inpt3.style = 'width : 20px;';
        inpt3.value = "0";
        var l1 = document.createElement('label');
        l1.id = "l1";
        var l2 = document.createElement('label');
        l2.id = "l2";
        var l3 = document.createElement('label');
        l3.id = "l3";
        var l4 = document.createElement('label');
        l4.id = "l4";
        var b1 = document.createElement('button');
        b1.textContent = "+";
        b1.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            fx += 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "tan(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b2 = document.createElement('button');
        b2.textContent = "-";
        b2.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            fx -= 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "tan(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b3 = document.createElement('button');
        b3.textContent = "+";
        b3.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            x += 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "tan(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b4 = document.createElement('button');
        b4.textContent = "-";
        b4.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if(x === 0){
                x;
            }else{
                x -= 0.1;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "tan(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b5 = document.createElement('button');
        b5.textContent = "+";
        b5.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if(sum === 360){
                sum;
            }else{
                sum += 30;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "tan(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b6 = document.createElement('button');
        b6.textContent = "-";
        b6.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if(sum === -360){
                sum;
            }else{
                sum -= 30;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "tan(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b7 = document.createElement('button');
        b7.textContent = "+";
        b7.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sumx += 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "tan(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b8 = document.createElement('button');
        b8.textContent = "-";
        b8.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sumx -= 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "tan(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        document.getElementById("funciones").appendChild(l1);
        document.getElementById("l1").innerHTML = "F(X); ";
        document.getElementById("funciones").appendChild(b1);
        document.getElementById("funciones").appendChild(inpt);
        document.getElementById("funciones").appendChild(b2);
        document.getElementById("funciones").appendChild(l2);
        document.getElementById("l2").innerHTML = "tan(";
        document.getElementById("funciones").appendChild(b3);
        document.getElementById("funciones").appendChild(inpt1);
        document.getElementById("funciones").appendChild(b4);
        document.getElementById("funciones").appendChild(l3);
        document.getElementById("l3").innerHTML = " x + ";
        document.getElementById("funciones").appendChild(b5);
        document.getElementById("funciones").appendChild(inpt2);
        document.getElementById("funciones").appendChild(b6);
        document.getElementById("funciones").appendChild(l4);
        document.getElementById("l4").innerHTML = " ) + ";
        document.getElementById("funciones").appendChild(b7);
        document.getElementById("funciones").appendChild(inpt3);
        document.getElementById("funciones").appendChild(b8);
    } else if (valor.includes("e^")) {
        var inpt = document.createElement('input');
        inpt.type = "text";
        inpt.name = "input_fx";
        inpt.id = "input_fx";
        inpt.style = 'width : 20px;';
        inpt.value = "1";
        var inpt1 = document.createElement('input');
        inpt1.type = "text";
        inpt1.name = "input_xuno";
        inpt1.id = "input_xuno";
        inpt1.style = 'width : 20px;';
        inpt1.value = "1";
        var inpt2 = document.createElement('input');
        inpt2.type = "text";
        inpt2.name = "input_sum";
        inpt2.id = "input_sum";
        inpt2.style = 'width : 20px;';
        inpt2.value = "0";
        var inpt3 = document.createElement('input');
        inpt3.type = "text";
        inpt3.name = "input_sumx";
        inpt3.id = "input_sumx";
        inpt3.style = 'width : 20px;';
        inpt3.value = "0";
        var l1 = document.createElement('label');
        l1.id = "l1";
        var l2 = document.createElement('label');
        l2.id = "l2";
        var l3 = document.createElement('label');
        l3.id = "l3";
        var l4 = document.createElement('label');
        l4.id = "l4";
        var b1 = document.createElement('button');
        b1.textContent = "+";
        b1.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            fx += 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "e^(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b2 = document.createElement('button');
        b2.textContent = "-";
        b2.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            fx -= 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "e^(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b3 = document.createElement('button');
        b3.textContent = "+";
        b3.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            x += 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "e^(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        }
        var b4 = document.createElement('button');
        b4.textContent = "-";
        b4.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if(sum === 0){
                sum;
            }else{
                x -= 0.1;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "e^(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b5 = document.createElement('button');
        b5.textContent = "+";
        b5.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sum += 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "e^(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b6 = document.createElement('button');
        b6.textContent = "-";
        b6.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sum -= 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "e^(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        }
        var b7 = document.createElement('button');
        b7.textContent = "+";
        b7.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sumx += 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "e^(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        }
        var b8 = document.createElement('button');
        b8.textContent = "-";
        b8.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sumx -= 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "e^(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        document.getElementById("funciones").appendChild(l1);
        document.getElementById("l1").innerHTML = "F(X); ";
        document.getElementById("funciones").appendChild(b1);
        document.getElementById("funciones").appendChild(inpt);
        document.getElementById("funciones").appendChild(b2);
        document.getElementById("funciones").appendChild(l2);
        document.getElementById("l2").innerHTML = "e^(";
        document.getElementById("funciones").appendChild(b3);
        document.getElementById("funciones").appendChild(inpt1);
        document.getElementById("funciones").appendChild(b4);
        document.getElementById("funciones").appendChild(l3);
        document.getElementById("l3").innerHTML = " x + ";
        document.getElementById("funciones").appendChild(b5);
        document.getElementById("funciones").appendChild(inpt2);
        document.getElementById("funciones").appendChild(b6);
        document.getElementById("funciones").appendChild(l4);
        document.getElementById("l4").innerHTML = " ) + ";
        document.getElementById("funciones").appendChild(b7);
        document.getElementById("funciones").appendChild(inpt3);
        document.getElementById("funciones").appendChild(b8);
    } else if (valor.includes("log")) {
        var inpt = document.createElement('input');
        inpt.type = "text";
        inpt.name = "input_fx";
        inpt.id = "input_fx";
        inpt.style = 'width : 20px;';
        inpt.value = "1"
        var inpt1 = document.createElement('input');
        inpt1.type = "text";
        inpt1.name = "input_xuno";
        inpt1.id = "input_xuno";
        inpt1.style = 'width : 20px;';
        inpt1.value = "1"
        var inpt2 = document.createElement('input');
        inpt2.type = "text";
        inpt2.name = "input_sum";
        inpt2.id = "input_sum";
        inpt2.style = 'width : 20px;';
        inpt2.value = "0"
        var inpt3 = document.createElement('input');
        inpt3.type = "text";
        inpt3.name = "input_sumx";
        inpt3.id = "input_sumx";
        inpt3.style = 'width : 20px;';
        inpt3.value = "0"
        var l1 = document.createElement('label');
        l1.id = "l1";
        var l2 = document.createElement('label');
        l2.id = "l2";
        var l3 = document.createElement('label');
        l3.id = "l3";
        var l4 = document.createElement('label');
        l4.id = "l4";
        var b1 = document.createElement('button');
        b1.textContent = "+";
        b1.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            fx += 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "log(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        };
        var b2 = document.createElement('button');
        b2.textContent = "-";
        b2.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            fx -= 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "log(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        }
        var b3 = document.createElement('button');
        b3.textContent = "+";
        b3.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            x += 0.1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "log(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        }
        var b4 = document.createElement('button');
        b4.textContent = "-";
        b4.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            if(x === 0){
                x;
            }else{
                x -= 0.1;
            }
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "log(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        }
        var b5 = document.createElement('button');
        b5.textContent = "+";
        b5.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sum += 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "log(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        }
        var b6 = document.createElement('button');
        b6.textContent = "-";
        b6.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sum -= 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "log(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        }
        var b7 = document.createElement('button');
        b7.textContent = "+";
        b7.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sumx += 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "log(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;
        }
        var b8 = document.createElement('button');
        b8.textContent = "-";
        b8.onclick = function () {
            var fx = parseFloat(document.getElementById("input_fx").value);
            var x = parseFloat(document.getElementById("input_xuno").value);
            var sum = parseInt(document.getElementById("input_sum").value);
            var sumx = parseInt(document.getElementById("input_sumx").value);
            sumx -= 1;
            var cons = "";
            var fxx = "";
            var csum = "";
            var csumx = "";
            if (fx === 1) {
                fxx;
            } else if (fx < 0){
                fxx = "-" + fx;
            }else{
                fxx = "" + fx;
            }
            if (x === 1) {
                cons = "";
            } else if(x < 0){
                cons = " - " + x;
            }else{
                cons = " + " + x;
            }
            if (sum === 0) {
                csum = "";
            } else if (sum > 0) {
                csum = " + " + sum;
            } else {
                csum = " - " + sum;
            }
            if (sumx === 0) {
                csumx = "";
            } else if (sumx > 0) {
                csumx = " + " + sumx;
            } else {
                csumx = " - " + sumx;
            }
            document.getElementById("eq").value = (fxx + "log(" + cons + "x" + csum + ")" + csumx);
            document.getElementById("dibu").click();
            document.getElementById("input_fx").value = fx;            
            document.getElementById("input_xuno").value = x;            
            document.getElementById("input_sum").value = sum;            
            document.getElementById("input_sumx").value = sumx;document.getElementById("input_sumx").value = sumx;
        };
        document.getElementById("funciones").appendChild(l1);
        document.getElementById("l1").innerHTML = "F(X); ";
        document.getElementById("funciones").appendChild(b1);
        document.getElementById("funciones").appendChild(inpt);
        document.getElementById("funciones").appendChild(b2);
        document.getElementById("funciones").appendChild(l2);
        document.getElementById("l2").innerHTML = "log(";
        document.getElementById("funciones").appendChild(b3);
        document.getElementById("funciones").appendChild(inpt1);
        document.getElementById("funciones").appendChild(b4);
        document.getElementById("funciones").appendChild(l3);
        document.getElementById("l3").innerHTML = " x + ";
        document.getElementById("funciones").appendChild(b5);
        document.getElementById("funciones").appendChild(inpt2);
        document.getElementById("funciones").appendChild(b6);
        document.getElementById("funciones").appendChild(l4);
        document.getElementById("l4").innerHTML = " ) + ";
        document.getElementById("funciones").appendChild(b7);
        document.getElementById("funciones").appendChild(inpt3);
        document.getElementById("funciones").appendChild(b8);
    }else if (valor.includes("x^4")) {
        var inpt = document.createElement('input');
        inpt.type = "text";
        inpt.name = "input_xcuatro";
        inpt.id = "input_xcuatro";
        inpt.style = 'width : 20px;';
        inpt.value = "1";
        var inpt1 = document.createElement('input');
        inpt1.type = "text";
        inpt1.name = "input_xtres";
        inpt1.id = "input_xtres";
        inpt1.style = 'width : 20px;';
        inpt1.value = "0";
        var inpt2 = document.createElement('input');
        inpt2.type = "text";
        inpt2.name = "input_xdos";
        inpt2.id = "input_xdos";
        inpt2.style = 'width : 20px;';
        inpt2.value = "0";
        var inpt3 = document.createElement('input');
        inpt3.type = "text";
        inpt3.name = "input_xuno";
        inpt3.id = "input_xuno";
        inpt3.style = 'width : 20px;';
        inpt3.value = "0";
        var inpt4 = document.createElement('input');
        inpt4.type = "text";
        inpt4.name = "inp";
        inpt4.id = "inp";
        inpt4.style = 'width : 20px;';
        inpt4.value = "0";
        var l1 = document.createElement('label');
        l1.id = "l1";
        var l2 = document.createElement('label');
        l2.id = "l2";
        var l3 = document.createElement('label');
        l3.id = "l3";
        var l4 = document.createElement('label');
        l4.id = "l4";
        var l5 = document.createElement('label');
        l5.id = "l5";
        var b1 = document.createElement('button');
        b1.textContent = "+";
        b1.onclick = function () {
            var x4 = parseInt(document.getElementById("input_xcuatro").value);
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2  = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            if(x4 === -1){
                x4 = 1;
            }else{
                x4 += 1;
            }
            var equis4 = "";
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x4 === 1 ) {
                equis4 ="x^4";
            }else if(x4 === -1){ 
                equis4 = "-x^4"
            }else if (x4 < -1){
                equis4 = "-" + x4 + " x^4";
            }else{
                equis4 = "" + x4 + " x^4";
            }
            if (x3 === 1 ) {
                equis3 =" + x^3";
            }else if(x3 === -1){ 
                equis3 = " - x^3"
            }else if(x3 === 0){
                equis3;
            }else if (x3 < -1){
                equis3 = "  " + x3 + " x^3";
            }else{
                equis3 = " + " + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis4 + equis3
                + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xcuatro").value = x4;
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b2 = document.createElement('button');
        b2.textContent = "-";
        b2.onclick = function () {
            var x4 = parseInt(document.getElementById("input_xcuatro").value);
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            if(x4 === 1){
                x4 = -1;
            }else{
                x4 -= 1;
            }
            var equis4 = "";
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x4 === 1 ) {
                equis4 ="x^4";
            }else if(x4 === -1){ 
                equis4 = "-x^4"
            }else if (x4 < -1){
                equis4 = "-" + x4 + " x^4";
            }else{
                equis4 = "" + x4 + " x^4";
            }
            if (x3 === 1 ) {
                equis3 =" + x^3";
            }else if(x3 === -1){ 
                equis3 = " - x^3"
            }else if(x3 === 0){
                equis3;
            }else if (x3 < -1){
                equis3 = "  " + x3 + " x^3";
            }else{
                equis3 = " + " + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis4 + equis3
                + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xcuatro").value = x4;
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b3 = document.createElement('button');
        b3.textContent = "+";
        b3.onclick = function () {
            var x4 = parseInt(document.getElementById("input_xcuatro").value);
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x3 += 1;
            var equis4 = "";
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x4 === 1 ) {
                equis4 ="x^4";
            }else if(x4 === -1){ 
                equis4 = "-x^4"
            }else if (x4 < -1){
                equis4 = "-" + x4 + " x^4";
            }else{
                equis4 = "" + x4 + " x^4";
            }
            if (x3 === 1 ) {
                equis3 =" + x^3";
            }else if(x3 === -1){ 
                equis3 = " - x^3"
            }else if(x3 === 0){
                equis3;
            }else if (x3 < -1){
                equis3 = "  " + x3 + " x^3";
            }else{
                equis3 = " + " + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis4 + equis3
                + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xcuatro").value = x4;
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b4 = document.createElement('button');
        b4.textContent = "-";
        b4.onclick = function () {
            var x4 = parseInt(document.getElementById("input_xcuatro").value);
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x3 -= 1;
            var equis4 = "";
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x4 === 1 ) {
                equis4 ="x^4";
            }else if(x4 === -1){ 
                equis4 = "-x^4"
            }else if (x4 < -1){
                equis4 = "-" + x4 + " x^4";
            }else{
                equis4 = "" + x4 + " x^4";
            }
            if (x3 === 1 ) {
                equis3 =" + x^3";
            }else if(x3 === -1){ 
                equis3 = " - x^3"
            }else if(x3 === 0){
                equis3;
            }else if (x3 < -1){
                equis3 = "  " + x3 + " x^3";
            }else{
                equis3 = " + " + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis4 + equis3
                + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xcuatro").value = x4;
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b5 = document.createElement('button');
        b5.textContent = "+";
        b5.onclick = function () {
            var x4 = parseInt(document.getElementById("input_xcuatro").value);
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x2 += 1;
            var equis4 = "";
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x4 === 1 ) {
                equis4 ="x^4";
            }else if(x4 === -1){ 
                equis4 = "-x^4"
            }else if (x4 < -1){
                equis4 = "-" + x4 + " x^4";
            }else{
                equis4 = "" + x4 + " x^4";
            }
            if (x3 === 1 ) {
                equis3 =" + x^3";
            }else if(x3 === -1){ 
                equis3 = " - x^3"
            }else if(x3 === 0){
                equis3;
            }else if (x3 < -1){
                equis3 = "  " + x3 + " x^3";
            }else{
                equis3 = " + " + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis4 + equis3
                + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xcuatro").value = x4;
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b6 = document.createElement('button');
        b6.textContent = "-";
        b6.onclick = function () {
            var x4 = parseInt(document.getElementById("input_xcuatro").value);
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x2 -= 1;
            var equis4 = "";
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x4 === 1 ) {
                equis4 ="x^4";
            }else if(x4 === -1){ 
                equis4 = "-x^4"
            }else if (x4 < -1){
                equis4 = "-" + x4 + " x^4";
            }else{
                equis4 = "" + x4 + " x^4";
            }
            if (x3 === 1 ) {
                equis3 =" + x^3";
            }else if(x3 === -1){ 
                equis3 = " - x^3"
            }else if(x3 === 0){
                equis3;
            }else if (x3 < -1){
                equis3 = "  " + x3 + " x^3";
            }else{
                equis3 = " + " + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis4 + equis3
                + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xcuatro").value = x4;
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b7 = document.createElement('button');
        b7.textContent = "+";
        b7.onclick = function () {
            var x4 = parseInt(document.getElementById("input_xcuatro").value);
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x1 += 1;
            var equis4 = "";
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x4 === 1 ) {
                equis4 ="x^4";
            }else if(x4 === -1){ 
                equis4 = "-x^4"
            }else if (x4 < -1){
                equis4 = "-" + x4 + " x^4";
            }else{
                equis4 = "" + x4 + " x^4";
            }
            if (x3 === 1 ) {
                equis3 =" + x^3";
            }else if(x3 === -1){ 
                equis3 = " - x^3"
            }else if(x3 === 0){
                equis3;
            }else if (x3 < -1){
                equis3 = "  " + x3 + " x^3";
            }else{
                equis3 = " + " + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis4 + equis3
                + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xcuatro").value = x4;
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b8 = document.createElement('button');
        b8.textContent = "-";
        b8.onclick = function () {
            var x4 = parseInt(document.getElementById("input_xcuatro").value);
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x1 -= 1;
            var equis4 = "";
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x4 === 1 ) {
                equis4 ="x^4";
            }else if(x4 === -1){ 
                equis4 = "-x^4"
            }else if (x4 < -1){
                equis4 = "-" + x4 + " x^4";
            }else{
                equis4 = "" + x4 + " x^4";
            }
            if (x3 === 1 ) {
                equis3 =" + x^3";
            }else if(x3 === -1){ 
                equis3 = " - x^3"
            }else if(x3 === 0){
                equis3;
            }else if (x3 < -1){
                equis3 = "  " + x3 + " x^3";
            }else{
                equis3 = " + " + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis4 + equis3
                + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xcuatro").value = x4;
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b9 = document.createElement('button');
        b9.textContent = "+";
        b9.onclick = function () {
            var x4 = parseInt(document.getElementById("input_xcuatro").value);
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x += 1;
            var equis4 = "";
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x4 === 1 ) {
                equis4 ="x^4";
            }else if(x4 === -1){ 
                equis4 = "-x^4"
            }else if (x4 < -1){
                equis4 = "-" + x4 + " x^4";
            }else{
                equis4 = "" + x4 + " x^4";
            }
            if (x3 === 1 ) {
                equis3 =" + x^3";
            }else if(x3 === -1){ 
                equis3 = " - x^3"
            }else if(x3 === 0){
                equis3;
            }else if (x3 < -1){
                equis3 = "  " + x3 + " x^3";
            }else{
                equis3 = " + " + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis4 + equis3
                + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xcuatro").value = x4;
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b10 = document.createElement('button');
        b10.textContent = "-";
        b10.onclick = function () {
            var x4 = parseInt(document.getElementById("input_xcuatro").value);
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x -= 1;
            var equis4 = "";
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x4 === 1 ) {
                equis4 ="x^4";
            }else if(x4 === -1){ 
                equis4 = "-x^4"
            }else if (x4 < -1){
                equis4 = "-" + x4 + " x^4";
            }else{
                equis4 = "" + x4 + " x^4";
            }
            if (x3 === 1 ) {
                equis3 =" + x^3";
            }else if(x3 === -1){ 
                equis3 = " - x^3"
            }else if(x3 === 0){
                equis3;
            }else if (x3 < -1){
                equis3 = "  " + x3 + " x^3";
            }else{
                equis3 = " + " + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis4 + equis3
                + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xcuatro").value = x4;
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        document.getElementById("funciones").appendChild(l1);
        document.getElementById("l1").innerHTML = "f(x) =  "
        document.getElementById("funciones").appendChild(b1);
        document.getElementById("funciones").appendChild(inpt);
        document.getElementById("funciones").appendChild(b2);
        document.getElementById("funciones").appendChild(l2);
        document.getElementById("l2").innerHTML = " x^4 + ";
        document.getElementById("funciones").appendChild(b3);
        document.getElementById("funciones").appendChild(inpt1);
        document.getElementById("funciones").appendChild(b4);
        document.getElementById("funciones").appendChild(l3);
        document.getElementById("l3").innerHTML = " x^3 + ";
        document.getElementById("funciones").appendChild(b5);
        document.getElementById("funciones").appendChild(inpt2);
        document.getElementById("funciones").appendChild(b6);
        document.getElementById("funciones").appendChild(l4);
        document.getElementById("l4").innerHTML = " x^2 + ";
        document.getElementById("funciones").appendChild(b7);
        document.getElementById("funciones").appendChild(inpt3);
        document.getElementById("funciones").appendChild(b8);
        document.getElementById("funciones").appendChild(l5);
        document.getElementById("l5").innerHTML = " x + ";
        document.getElementById("funciones").appendChild(b9);
        document.getElementById("funciones").appendChild(inpt4);
        document.getElementById("funciones").appendChild(b10);
    } 
    else if (valor.includes("x^3") && !valor.includes("x^4")) {
        var inpt1 = document.createElement('input');
        inpt1.type = "text";
        inpt1.name = "input_xtres";
        inpt1.id = "input_xtres";
        inpt1.style = 'width : 20px;';
        inpt1.value = "1";
        var inpt2 = document.createElement('input');
        inpt2.type = "text";
        inpt2.name = "input_xdos";
        inpt2.id = "input_xdos";
        inpt2.style = 'width : 20px;';
        inpt2.value = "0";
        var inpt3 = document.createElement('input');
        inpt3.type = "text";
        inpt3.name = "input_xuno";
        inpt3.id = "input_xuno";
        inpt3.style = 'width : 20px;';
        inpt3.value = "0";
        var inpt4 = document.createElement('input');
        inpt4.type = "text";
        inpt4.name = "inp";
        inpt4.id = "inp";
        inpt4.style = 'width : 20px;';
        inpt4.value = "0";
        var l1 = document.createElement('label');
        l1.id = "l1";
        var l2 = document.createElement('label');
        l2.id = "l2";
        var l3 = document.createElement('label');
        l3.id = "l3";
        var l4 = document.createElement('label');
        l4.id = "l4";
        var b1 = document.createElement('button');
        b1.textContent = "+";
        b1.onclick = function () {
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            if(x3 === -1){
                x3 = 1;
            }else{
                x3 += 1;
            }
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x3 === 1 ) {
                equis3 ="x^3";
            }else if(x3 === -1){ 
                equis3 = "-x^3"
            }else if (x3 < -1){
                equis3 = "" + x3 + " x^3";
            }else{
                equis3 = "" + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis3 + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b2 = document.createElement('button');
        b2.textContent = "-";
        b2.onclick = function () {
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            if(x3 === 1){
                x3 = -1;
            }else{
                x3 -= 1;
            }
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x3 === 1 ) {
                equis3 ="x^3";
            }else if(x3 === -1){ 
                equis3 = "-x^3"
            }else if (x3 < -1){
                equis3 = "" + x3 + " x^3";
            }else{
                equis3 = "" + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis3 + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b3 = document.createElement('button');
        b3.textContent = "+";
        b3.onclick = function () {
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x2 += 1;
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x3 === 1 ) {
                equis3 ="x^3";
            }else if(x3 === -1){ 
                equis3 = "-x^3"
            }else if (x3 < -1){
                equis3 = "" + x3 + " x^3";
            }else{
                equis3 = "" + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis3 + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b4 = document.createElement('button');
        b4.textContent = "-";
        b4.onclick = function () {
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x2 -= 1;
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x3 === 1 ) {
                equis3 ="x^3";
            }else if(x3 === -1){ 
                equis3 = "-x^3"
            }else if (x3 < -1){
                equis3 = "" + x3 + " x^3";
            }else{
                equis3 = "" + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis3 + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b5 = document.createElement('button');
        b5.textContent = "+";
        b5.onclick = function () {
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x1 += 1;
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x3 === 1 ) {
                equis3 ="x^3";
            }else if(x3 === -1){ 
                equis3 = "-x^3"
            }else if (x3 < -1){
                equis3 = "" + x3 + " x^3";
            }else{
                equis3 = "" + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis3 + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b6 = document.createElement('button');
        b6.textContent = "-";
        b6.onclick = function () {
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x1 -= 1;
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x3 === 1 ) {
                equis3 ="x^3";
            }else if(x3 === -1){ 
                equis3 = "-x^3"
            }else if (x3 < -1){
                equis3 = "" + x3 + " x^3";
            }else{
                equis3 = "" + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis3 + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b7 = document.createElement('button');
        b7.textContent = "+";
        b7.onclick = function () {
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x += 1;
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x3 === 1 ) {
                equis3 ="x^3";
            }else if(x3 === -1){ 
                equis3 = "-x^3"
            }else if (x3 < -1){
                equis3 = "" + x3 + " x^3";
            }else{
                equis3 = "" + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis3 + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b8 = document.createElement('button');
        b8.textContent = "-";
        b8.onclick = function () {
            var x3 = parseInt(document.getElementById("input_xtres").value);
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x -= 1;
            var equis3 = "";
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x3 === 1 ) {
                equis3 ="x^3";
            }else if(x3 === -1){ 
                equis3 = "-x^3"
            }else if (x3 < -1){
                equis3 = "" + x3 + " x^3";
            }else{
                equis3 = "" + x3 + " x^3";
            }
            if (x2 === 1 ) {
                equis2 =" + x^2";
            }else if(x2 === -1){ 
                equis2 = " - x^2"
            }else if(x2 === 0){
                equis2;
            }else if (x2 < -1){
                equis2 = "  " + x2 + " x^2";
            }else{
                equis2 = " + " + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x^";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis3 + equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xtres").value = x3;
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        document.getElementById("funciones").appendChild(l1);
        document.getElementById("l1").innerHTML = "f(x) =  "
        document.getElementById("funciones").appendChild(b1);
        document.getElementById("funciones").appendChild(inpt1);
        document.getElementById("funciones").appendChild(b2);
        document.getElementById("funciones").appendChild(l2);
        document.getElementById("l2").innerHTML = " x^3 + ";
        document.getElementById("funciones").appendChild(b3);
        document.getElementById("funciones").appendChild(inpt2);
        document.getElementById("funciones").appendChild(b4);
        document.getElementById("funciones").appendChild(l3);
        document.getElementById("l3").innerHTML = " x^2 + ";
        document.getElementById("funciones").appendChild(b5);
        document.getElementById("funciones").appendChild(inpt3);
        document.getElementById("funciones").appendChild(b6);
        document.getElementById("funciones").appendChild(l4);
        document.getElementById("l4").innerHTML = " x + ";
        document.getElementById("funciones").appendChild(b7);
        document.getElementById("funciones").appendChild(inpt4);
        document.getElementById("funciones").appendChild(b8);
    } 
    else if (valor.includes("x^2") && !valor.includes("x^3") && !valor.includes("x^4")) {
        var inpt2 = document.createElement('input');
        inpt2.type = "text";
        inpt2.name = "input_xdos";
        inpt2.id = "input_xdos";
        inpt2.style = 'width : 20px;';
        inpt2.value = "0";
        var inpt3 = document.createElement('input');
        inpt3.type = "text";
        inpt3.name = "input_xuno";
        inpt3.id = "input_xuno";
        inpt3.style = 'width : 20px;';
        inpt3.value = "0";
        var inpt4 = document.createElement('input');
        inpt4.type = "text";
        inpt4.name = "inp";
        inpt4.id = "inp";
        inpt4.style = 'width : 20px;';
        inpt4.value = "0";
        var l1 = document.createElement('label');
        l1.id = "l1";
        var l2 = document.createElement('label');
        l2.id = "l2";
        var l3 = document.createElement('label');
        l3.id = "l3";
        var b1 = document.createElement('button');
        b1.textContent = "+";
        b1.onclick = function () {
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            if(x2 === -1){
                x2 = 1;
            }else{
                x2 += 1;
            }
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x2 === 1 ) {
                equis2 ="x^2";
            }else if(x2 === -1){ 
                equis2 = "-x^2"
            }else if (x2 < -1){
                cc
            }else{
                equis2 = "" + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b2 = document.createElement('button');
        b2.textContent = "-";
        b2.onclick = function () {
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            if(x2 === 1){
                x2 = -1;
            }else{
                x2 -= 1;
            }
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x2 === 1 ) {
                equis2 ="x^2";
            }else if(x2 === -1){ 
                equis2 = "-x^2"
            }else if (x2 < -1){
                equis2 = "" + x2 + " x^2";
            }else{
                equis2 = "" + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        };
        var b3 = document.createElement('button');
        b3.textContent = "+";
        b3.onclick = function () {
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x1 += 1;
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x2 === 1 ) {
                equis2 ="x^2";
            }else if(x2 === -1){ 
                equis2 = "-x^2"
            }else if (x2 < -1){
                equis2 = "" + x2 + " x^2";
            }else{
                equis2 = "" + x2 + " x^2";
            }
            if (x1 === 1  ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = " " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b4 = document.createElement('button');
        b4.textContent = "-";
        b4.onclick = function () {
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x1 -= 1;
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x2 === 1 ) {
                equis2 ="x^2";
            }else if(x2 === -1){ 
                equis2 = "-x^2"
            }else if (x2 < -1){
                equis2 = "" + x2 + " x^2";
            }else{
                equis2 = "" + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "  " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b5 = document.createElement('button');
        b5.textContent = "+";
        b5.onclick = function () {
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x += 1;
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x2 === 1 ) {
                equis2 ="x^2";
            }else if(x2 === -1){ 
                equis2 = "-x^2"
            }else if (x2 < -1){
                equis2 = "" + x2 + " x^2";
            }else{
                equis2 = "" + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = " " + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = "" + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b6 = document.createElement('button');
        b6.textContent = "-";
        b6.onclick = function () {
            var x2 = parseInt(document.getElementById("input_xdos").value);
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x -= 1;
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x2 === 1 ) {
                equis2 ="x^2";
            }else if(x2 === -1){ 
                equis2 = "-x^2"
            }else if (x2 < -1){
                equis2 = "" + x2 + " x^2";
            }else{
                equis2 = "" + x2 + " x^2";
            }
            if (x1 === 1 ) {
                equis1 =" + x";
            }else if(x1 === -1){ 
                equis1 = " - x"
            }else if(x1 === 0){
                equis1;
            }else if (x1 < -1){
                equis1 = "" + x1 + " x";
            }else{
                equis1 = " + " + x1 + " x";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis2 + equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xdos").value = x2;
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        document.getElementById("funciones").appendChild(l1);
        document.getElementById("l1").innerHTML = "f(x) =  "
        document.getElementById("funciones").appendChild(b1);
        document.getElementById("funciones").appendChild(inpt2);
        document.getElementById("funciones").appendChild(b2);
        document.getElementById("funciones").appendChild(l2);
        document.getElementById("l2").innerHTML = " x^2 + ";
        document.getElementById("funciones").appendChild(b3);
        document.getElementById("funciones").appendChild(inpt3);
        document.getElementById("funciones").appendChild(b4);
        document.getElementById("funciones").appendChild(l3);
        document.getElementById("l3").innerHTML = " x + ";
        document.getElementById("funciones").appendChild(b5);
        document.getElementById("funciones").appendChild(inpt4);
        document.getElementById("funciones").appendChild(b6);
    } else {
        var inpt3 = document.createElement('input');
        inpt3.type = "text";
        inpt3.name = "input_xuno";
        inpt3.id = "input_xuno";
        inpt3.style = 'width : 20px;';
        inpt3.value = "0";
        var inpt4 = document.createElement('input');
        inpt4.type = "text";
        inpt4.name = "inp";
        inpt4.id = "inp";
        inpt4.style = 'width : 20px;';
        inpt4.value = "0";
        var l1 = document.createElement('label');
        l1.id = "l1";
        var l2 = document.createElement('label');
        l2.id = "l2";
        var l3 = document.createElement('label');
        l3.id = "l3";
        var b1 = document.createElement('button');
        b1.textContent = "+";
        b1.onclick = function () {
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            if(x1 === -1){
                x1 = 1;
            }else{
                x1 += 1;
            }
            var equis1 = "";
            var equis = "";
            if (x1 === 1 ) {
                equis1 ="x";
            }else if(x1 === -1){ 
                equis1 = "-x"
            }else if (x1 < -1){
                equis1 = "" + x1 + " x";
            }else{
                equis1 = "" + x1 + " x";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b2 = document.createElement('button');
        b2.textContent = "-";
        b2.onclick = function () {
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            if(x1 === 1){
                x1 = -1;
            }else{
                x1 -= 1;
            }
            var equis1 = "";
            var equis = "";
            if (x1 === 1 ) {
                equis1 ="x";
            }else if(x1 === -1){ 
                equis1 = "-x"
            }else if (x1 < -1){
                equis1 = "" + x1 + " x";
            }else{
                equis1 = "" + x1 + " x";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1";
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        };
        var b3 = document.createElement('button');
        b3.textContent = "+";
        b3.onclick = function () {
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x += 1;
            var equis2 = "";
            var equis1 = "";
            var equis = "";
            if (x1 === 1 ) {
                equis1 ="x";
            }else if(x1 === -1){ 
                equis1 = "-x";
            }else if (x1 < -1){
                equis1 = "" + x1 + " x";
            }else{
                equis1 = "" + x1 + " x";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        var b4 = document.createElement('button');
        b4.textContent = "-";
        b4.onclick = function () {
            var x1 = parseInt(document.getElementById("input_xuno").value);
            var x = parseInt(document.getElementById("inp").value);
            x -= 1;
            var equis1 = "";
            var equis = "";
            if (x1 === 1 ) {
                equis1 ="x";
            }else if(x1 === -1){ 
                equis1 = "-x"
            }else if (x1 < -1){
                equis1 = "" + x1 + " x";
            }else{
                equis1 = "" + x1 + " x";
            }
            if (x === 1 ) {
                equis =" + 1";
            }else if(x === -1){ 
                equis = " - 1"
            }else if(x === 0){
                equis;
            }else if (x < -1){
                equis = " " + x;
            }else{
                equis = " + " + x;
            }
            document.getElementById("eq").value = (equis1 + equis);
            document.getElementById("dibu").click();
            document.getElementById("input_xuno").value = x1;
            document.getElementById("inp").value = x;
        }
        document.getElementById("funciones").appendChild(l1);
        document.getElementById("l1").innerHTML = "y =  ";
        document.getElementById("funciones").appendChild(b1);
        document.getElementById("funciones").appendChild(inpt3);
        document.getElementById("funciones").appendChild(b2);
        document.getElementById("funciones").appendChild(l2);
        document.getElementById("l2").innerHTML = " x + ";
        document.getElementById("funciones").appendChild(b3);
        document.getElementById("funciones").appendChild(inpt4);
        document.getElementById("funciones").appendChild(b4);   
    }
}