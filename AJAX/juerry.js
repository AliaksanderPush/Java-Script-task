
/*
function testLoad() {
	$.ajax('https://jsonplaceholder.typicode.com/todos/',
	{type:'GET', dataType:'json', success: dataLoaded, error:errorHandler } 
	);
}

function dataLoaded(data) {
 	console.log(data)
	
}
*/



/*
const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
let updatePassword; 
const stringName='PUSHNOV_PROJECT_FOOTBALL'; 


const info = {age:455}

async function getInfo() {
	const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
	let sp = new URLSearchParams();
    updatePassword=Math.random()
    sp.append('f', 'LOCKGET');
    sp.append('n', "PUSHNOV_PROJECT_FOOTBALL");
    sp.append('p', updatePassword) 
     
	try {
        let response=await fetch(url,{method: 'post', body: sp });
        let data = await response.json();
        lockGetReady(data);
    }
    catch ( error ) {
        console.error(error);
    }
}

async function lockGetReady(callresult) {
	const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
	let sp = new URLSearchParams();
    sp.append('f', 'UPDATE');
    sp.append('n', "PUSHNOV_PROJECT_FOOTBALL");
    sp.append('p', updatePassword);
    sp.append('v',JSON.stringify(info)); 
 
	try {
        let response=await fetch(url,{method: 'post', body:  sp });
        updateReady(response);
    }
    catch ( error ) {
        console.error(error);
    }
}


function updateReady(callresult) {
    console.log(callresult)
    if ( callresult.error!=undefined )
        alert(callresult.error);
}
function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}
*/

const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
let updatePassword; 
const stringName='PUSHNOV_PROJECT_FOOTBALL'; 


const info = {age:55}

async function getInfo() {
	const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
	let sp = new URLSearchParams();
    updatePassword=Math.random()
    sp.append('f', 'LOCKGET');
    sp.append('n', "PUSHNOV_PROJECT_FOOTBALL");
    sp.append('p', updatePassword) 
     
	try {
        let response=await fetch(url,{method: 'post', body: sp });
        const data = response.json();
        console.log(data)
       // lockGetReady(response.data);
    }
    catch ( error ) {
        console.error(error);
    }
}

async function lockGetReady(callresult) {
	const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
	let sp = new URLSearchParams();
    sp.append('f', 'UPDATE');
    sp.append('n', "PUSHNOV_PROJECT_FOOTBALL");
    sp.append('p', updatePassword);
    sp.append('v',JSON.stringify(info)); 
 
	try {
        let response=await axios(url,{method: 'post', body:  sp });
        updateReady(response);
    }
    catch ( error ) {
        console.error(error);
    }
}


function updateReady(callresult) {
    console.log(callresult)
    if ( callresult.error!=undefined )
        alert(callresult.error);
}
function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}
getInfo()