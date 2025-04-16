// Show Section 2 when login is clicked
document.getElementById("sectionLoginBtn").addEventListener("click", function () {
    const section = document.getElementById("patient-details");
    section.style.display = "block";
    section.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Handle form submission
  document.getElementById('patient-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('age').value;
    const uid = document.getElementById('uid').value;
    alert(`Welcome ${name}! Health Card ID: ${uid}`);
  });
  document.getElementById('patient-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('age').value;
    const uid = document.getElementById('uid').value;
  
    alert(`Welcome ${name}! Health Card ID: ${uid}`);
  
    // Hide login section and show records
    document.getElementById("patient-details").style.display = "none";
    document.getElementById("health-records").style.display = "block";
    document.getElementById("health-records").scrollIntoView({ behavior: 'smooth' });
  });
  