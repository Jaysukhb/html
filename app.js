
const api_url ="https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";


async function getapi(url) {
	const response = await fetch(url);
	var data = await response.json();
	console.log(data);
	if (response) {
	}
	show(data);
}
getapi(api_url);

function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
	<td>${r.firstName} </td>
	<td>${r.address}</td>
	<td>${r.email}</td>
	<td>${r.salary}</td>		
</tr>`;
	}
	document.getElementById("employees").innerHTML = tab;
}
