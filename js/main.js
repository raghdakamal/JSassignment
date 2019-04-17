// Exercise 1
function e1()
{
    var x=5;
    var y=6;
    var z=7;
    var s=(x+y+z)/2;
    var area=Math.sqrt(s*((s-x)*(s-y)*(s-z)));
   
	$("#e1Result").html("Total Area = " + area);
}
function e1reset() 
{
	$("#e1Result").html("");
}

// Exercise 2
function e2generate() 
{
	//generate no
	var randomnNo=Math.floor(Math.random() * 10) + 1;
	$("#e2number").html("Generated No.: " + randomnNo);
	
	//adding generate no to hidden input
	$('#generatedInput').val(randomnNo);
	
	//clearing form before showing it
	$("#e2Result").html("");
	$('#numberInput').val("");
	$('#e2form').css({'display':'block'});
}
function e2compare() 
{
	//getting values of inputs
	var generatedInput=$('#generatedInput').val();
	var numberInput=$('#numberInput').val();

	//check if no is generated
	if(generatedInput=="")
	{
		$("#e2Result").html("Please generate no first");
	}
	else
	{
		//check if no's matchs
		if(generatedInput==numberInput)
		{
			$("#e2Result").html("Good Work");
		}
		else
		{
			$("#e2Result").html("Not matched");
		}
	}
}
function e2reset() 
{
	$('#e2form').css({'display':'none'});
	$('#generatedInput').val("");
	$('#numberInput').val("");
	$("#e2number").html("");
	$("#e2Result").html("");
}

// Exercise3
function e3multiply()
{
        var no1=$("#e3Input1").val(); 
        var no2=$("#e3Input2").val();

        if((no1=="")||(no2==""))
        {
        	$("#e3Result").html("Please enter your numbers");
        }
        else
        {
        	$("#e3Result").html("Multiplication Result = "+no1*no2);
        }

}
function e3divide()
{
        var no1=$("#e3Input1").val(); 
        var no2=$("#e3Input2").val();

        if((no1=="")||(no2==""))
        {
        	$("#e3Result").html("Please enter your numbers");
        }
        else
        {
        	$("#e3Result").html("Division Result = "+no1/no2);
        }

}
function e3reset() 
{
	$('#e3Input1').val("");
	$('#e3Input2').val("");
	$("#e3Result").html("");
}

//// Exercise 5
function getex()
{
	var fileName=$('#e5input').val();
	
	//Cheking that the file is selected
	if(fileName=="")
	{
		$("#e5Result").html("Please select a file first");
	}
	else
	{
		var extension = fileName.split('.')[1];
		$("#e5Result").html("File Extention: " + extension);
	}
}
function e5reset() 
{
	$('#e5input').val("");
	$("#e5Result").html("");
}

// Exercise 6
function e6compare() 
{
	//getting values of inputs

	var e6Input=$('#e6Input').val();

	if(e6Input=="")
	{
		$("#e6Result").html("Please enter no first");
	}
	else
	{
		//check if no's matchs
		if(e6Input==13)
		{
			$("#e6Result").html("It's the same no");
		}
		else if(e6Input>13)
		{
			var defrance = e6Input-13;
			$("#e6Result").html("Result: " + (defrance *2));
		}
		else if(e6Input<13)
		{
			defrances = 13 - e6Input;
			$("#e6Result").html("Result: " + defrances );
		}
	}
}
function e6reset() 
{
	$('#e6Input').val("");
	$("#e6Result").html("");
}

// Exercise 7
function e7sum()
{
        var x=parseInt($("#e7Input1").val()); 
        var y=parseInt($("#e7Input2").val());

        if((x=="")||(y==""))
        {
        	$("#e7Result").html("Please enter your numbers");
        }
        else if(x==y)
        {
			var sum = x+y;
			$("#e7Result").html("Sum Result = "+ (sum*3));
        }
        else            
        {
        	var sum = x+y;
			$("#e7Result").html("Sum Result = "+ sum);
        }

          
}
function e7reset() 
{
	$('#e7Input1').val("");
    $('#e7Input2').val("");
	$("#e7Result").html("");
}
// Exercise 8
function e8compare()
{
        var n1=parseInt($("#e8Input1").val()); 
        var n2=parseInt($("#e8Input2").val());

        if(n1 + n2 == 50)
        {
        	$("#e8Result").html("True"); 
        }
        else if ((n1 == 50) || (n2 == 50))
        {
        	$("#e8Result").html("True");   
        }
        else 
        {
        	$("#e8Result").html("false"); 
        }

}
function e8reset() 
{
	$('#e8Input1').val("");
    $('#e8Input2').val("");
	$("#e8Result").html("");
}

// Exercise 9
function e9check()
{
        var n1=$("#e9Input1").val(); 
        var n2=$("#e9Input2").val();

        if((n1=="")||(n2==""))
        {
        	$("#e9Result").html("Please enter your numbers"); 
        }
        else if(n1 > 0 && n2 < 0)
        {
        	$("#e9Result").html("True");
        }
        else
        {
        	$("#e9Result").html("False"); 
        }

}
function e9reset() 
{
	$('#e9Input1').val("");
    $('#e9Input2').val("");
	$("#e9Result").html("");
}



// Exercise 10
function e10check()
{
        var n1=$("#e10Input1").val(); 
        var n2=$("#e10Input2").val(); 

        if ((n1>=50 && n1<=99)||(n2>=50 && n2<=90))
        {
        	$("#e10Result").html("True");
        }
        else 
        {
        	$("#e10Result").html("False"); 
        }
 
}
function e10reset() {
	$('#e10Input1').val("");
    $('#e10Input2').val("");
	$("#e10Result").html("");
}

// Exercise 11
function e11Max()
{
    var x=$("#e11Input1").val(); 
    var y=$("#e11Input2").val(); 
    var z=$("#e11Input3").val(); 
    var maxvalue=Math.max(x,y,z);

	$("#e11Result").html("MaxValue = " + maxvalue);
    
}
function e11reset() 
{
	$('#e11Input1').val("");
    $('#e11Input2').val("");
    $('#e11Input3').val("");
	$("#e11Result").html("");
}

// Exercise 12
function e12check()
{
        var x=$("#e12Input1").val(); 
        var y=$("#e12Input2").val(); 

        if (((x>=40 && x<=60)||(x>=70 && x<=100)) && ((y<=40 && y<=60)||(y>=70 &&y<=100)))
        {
        	$("#e12Result").html("True");
        }
        else 
        {
        	$("#e12Result").html("you should enter numbers between (40-60) or(70-100)");
        }
}
function e12reset() 
{
	$('#e12Input1').val("");
    $('#e12Input2').val("");
	$("#e12Result").html("");
}

// Exercise 13
function e13check()
{
	var x=$("#e13Input1").val(); 
	var y=$("#e13Input2").val(); 
	var z=$("#e13Input3").val(); 
	$("#e13Result").html("Enter All Numbers First");
	if( x=="" || y=="" || z=="") {
		$("#e13Result").html("Enter All Numbers First");
	}
	else
	{
		var arr=[parseInt(x),parseInt(y),parseInt(z)];
		var totalValue=0;
		for(var c=0;c<arr.length;c++)
		{
			totalValue += arr[c];
		}
		$("#e13Result").html("Total Value:" + totalValue);
	}
}
function e13reset() 
{
	$('#e13Input1').val("");
    $('#e13Input2').val("");
	$('#e13Input3').val("");
	$("#e13Result").html("");
}