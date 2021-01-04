var idx = 0

function addNewClass()
{
	if(idx<10)
	{
	idx++;
	var btn = document.createElement("BUTTON");
	var table = document.getElementById("imgTable");
	var row = table.insertRow(idx)
	var cel1 = row.insertCell(0);
	var cel2 = row.insertCell(1);

	cel1.innerHTML = '<input  type="text" id = "txt'+ idx +'" name="class"'+ idx +'>';
	cel2.innerHTML = '<input type="file" id = "fil'+ idx + '" name="fileupload' + idx + '" multiple="multiple" accept="Image/*">';	
}

else
{
	alert("Cannot add more than 10 clasess ")
}

}


function verifyFileSelection(){
	 
	for( var i=1; i<idx; i++)
	{
		let ele = document.getElementById("txt"+i).value;//'txt'+i.toString()).value;

		console.log("hello: " +ele);

		console.log(i);
		if( ele === "")
		{
			alert("invalid class entry");
			return false;
		}
			
		else
			console.log("success");
  
  return true;

	}
	
	// console.log(ele.files.length); // logs number of files selected
}


function verifyClassname()
{
	var clsList = []
	for( var i=1; i<idx; i++)
	{
		let ele = document.getElementById("txt"+i).value;
		if (clsList.includes(ele) == true)
			{
				alert("No two class can have the same name ")
				return false;
			}
		clsList.push(ele);

		console.log("Everything is set");

	}
return true;
}


function verifyNumFiles(){
	for( var i=1; i<idx; i++)
	{
	let ele = document.getElementById("fil"+i);
	if(ele.files.length < 10 )
		{
			alert("Add atleast 10 files for each class");
			return false;
		}
	if(ele.files.length >100)
	{
		alert(" More than 100 files can't be uploaded in one class");
		return false;
	}
}
return true;
}

function verifyData()
{
	if( idx<2)
	{
		alert("atleast 2 clasess should be added for training");
		return;
	}
	 if (verifyFileSelection() == true)
	   if(verifyClassname() == true)
	     if(verifyNumFiles() == true)
	     	{
	     		alert("Everything is set for upload");
	     		document.imgFtable.submit();
	     	}
	// if(document.getElementById("imgTable").rows[0]==""){
	// 	alert("invalid class");
	// }
}