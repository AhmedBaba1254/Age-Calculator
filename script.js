function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
  
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      document.getElementById("result").textContent = "Vennligst fyll ut alle feltene riktig.";
      return;
    }
  
    const today = new Date();
    let ageYears = today.getFullYear() - year;
    let ageMonths = today.getMonth() + 1 - month;
    let ageDays = today.getDate() - day;
  
    if (ageDays < 0) {
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageMonths--;
    }
  
    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears--;
    }
  
    document.getElementById("result").textContent = `din alder er: ${ageYears} år ${ageMonths} måneder og ${ageDays} dager`;
  }
  