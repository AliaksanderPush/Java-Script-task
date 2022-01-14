

function testLoad() {
	$.ajax('https://jsonplaceholder.typicode.com/todos/',
	{type:'GET', dataType:'json', success: dataLoaded, error:errorHandler } 
	);
}

function dataLoaded(data) {
 	console.log(data)
	
}

function errorHandler(jqXHR, statusStr, errorStr) {
   console.log(statusStr+' '+errorStr)
}




const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
const updatePassword=Math.random(); 
const stringName='PUSHNOV_PROJECT_AVIATICKETS';




function storeInfo() {
    $.ajax( {
            url : url, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success :(data) => lockGetReady(data) , error : errorHandler
        }
    );
}
        
function lockGetReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else {
        const info={
            name :'Sasah', 
            age : 38
        };
        $.ajax( {
                url : url, type : 'POST', cache : false, dataType:'json',
                data : { f : 'UPDATE', n : stringName, v : JSON.stringify(info), p : updatePassword },
                success : (data) => updateReady(data), error : errorHandler
            }
        );
    }
}

function updateReady(callresult) {
    if (callresult.error != undefined) console.log(callresult.error);
  }

  storeInfo();


async function getInfo() {
	const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
	let sp = new URLSearchParams();
    sp.append('f', 'READ');
    sp.append('n', "PUSHNOV_PROJECT_AVIATICKETS");

	try {
        let response=await fetch(url,{method: 'post', body: sp });
        let data=await response.json();
        console.log(data);
    }
    catch ( error ) {
        console.error(error);
    }
}
//sendInfo()













