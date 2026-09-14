/* ================= START: SCRIPT JS ================= */


// ================= DASHBOARD MENU START =================

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach(function(card){

    card.addEventListener("click", function(){

        const moduleName = this.innerText.trim();

        const modules = document.querySelectorAll(".module-card");

        if (moduleName.includes("Contractor Payment")) {
            modules[0].scrollIntoView({ behavior: "smooth" });
        }

        else if (moduleName.includes("Weekly Labor Cost")) {
            modules[1].scrollIntoView({ behavior: "smooth" });
        }

        else if (moduleName.includes("Purchase Management")) {
            modules[2].scrollIntoView({ behavior: "smooth" });
        }

        else if (moduleName.includes("Expense Ledger")) {
            modules[3].scrollIntoView({ behavior: "smooth" });
        }

        else if (moduleName.includes("Weekly Cost Report")) {
            modules[4].scrollIntoView({ behavior: "smooth" });
        }

        else if (moduleName.includes("Income & Expense Report")) {
            modules[5].scrollIntoView({ behavior: "smooth" });
        }

        else if (moduleName.includes("Add New Project")) {
            alert("Add New Project module is coming soon.");
        }

    });

});

// ================= DASHBOARD MENU END =================






/* ================= PROJECT SYSTEM START ================= */


// Current Project Information


let projectInfo = {

    name: "Jamila Bhavan 1",

    owner: "Ibrahim Khalil",

    location: "Model City, Mouchak, Kaliakair, Gazipur"

};



// Browser Console এ Project Data দেখাবে

console.log("Project Information:");

console.log(projectInfo);



/* ================= PROJECT SYSTEM END ================= */





/* ================= FUTURE DATABASE START ================= */


// ভবিষ্যতে এখানে থাকবে:

// Contractor Payment Data
// Weekly Labor Cost Data
// Purchase Data
// Expense Ledger Data
// Income Expense Report Data


let buildingData = [];


console.log("SBMS Database Ready");



/* ================= FUTURE DATABASE END ================= */





/* ================= END: SCRIPT JS ================= */
/* ================= START: CONTRACTOR PAYMENT SYSTEM ================= */


// Contractor Payment Data Load

let contractorPayments = JSON.parse(
    localStorage.getItem("contractorPayments")
) || [];




// Add Payment Button

const addPaymentBtn = document.getElementById("addPaymentBtn");



if(addPaymentBtn){


addPaymentBtn.addEventListener("click", function(){



    let contractorName = document.getElementById("contractorName").value;

    let workDetails = document.getElementById("workDetails").value;

    let paymentAmount = document.getElementById("paymentAmount").value;



    if(
        contractorName === "" ||
        workDetails === "" ||
        paymentAmount === ""
    ){

        alert("Please fill all information");

        return;

    }




    let paymentData = {


        date: new Date().toLocaleDateString(),

        contractor: contractorName,

        work: workDetails,

        amount: Number(paymentAmount)


    };



    contractorPayments.push(paymentData);



    localStorage.setItem(
        "contractorPayments",
        JSON.stringify(contractorPayments)
    );



    displayPayments();



    // Clear Input

    document.getElementById("contractorName").value="";

    document.getElementById("workDetails").value="";

    document.getElementById("paymentAmount").value="";



});

}



// Display Payment List


function displayPayments(){


const paymentList = document.getElementById("paymentList");



if(paymentList){


paymentList.innerHTML = "";



contractorPayments.forEach(function(payment){



let row = `


<tr>

<td>${payment.date}</td>

<td>${payment.contractor}</td>

<td>${payment.work}</td>

<td>${payment.amount} Tk</td>

</tr>


`;



paymentList.innerHTML += row;



});


}



}




// Load Previous Data

displayPayments();



/* ================= END: CONTRACTOR PAYMENT SYSTEM ================= */


/* ================= START: WEEKLY LABOR COST SYSTEM ================= */



// Load Labor Data

let laborCosts = JSON.parse(
    localStorage.getItem("laborCosts")
) || [];





// Add Labor Button

const addLaborBtn = document.getElementById("addLaborBtn");



if(addLaborBtn){


addLaborBtn.addEventListener("click", function(){



    let laborName = document.getElementById("laborName").value;


    let laborWork = document.getElementById("laborWork").value;


    let workDays = document.getElementById("workDays").value;


    let dailyWage = document.getElementById("dailyWage").value;




    if(
        laborName === "" ||
        laborWork === "" ||
        workDays === "" ||
        dailyWage === ""
    ){

        alert("Please fill all information");

        return;

    }




    let totalCost = 
        Number(workDays) * Number(dailyWage);




    let laborData = {


        date: new Date().toLocaleDateString(),

        name: laborName,

        work: laborWork,

        days: Number(workDays),

        total: totalCost


    };





    laborCosts.push(laborData);




    localStorage.setItem(

        "laborCosts",

        JSON.stringify(laborCosts)

    );




    displayLaborCost();





    // Clear Input


    document.getElementById("laborName").value = "";

    document.getElementById("laborWork").value = "";

    document.getElementById("workDays").value = "";

    document.getElementById("dailyWage").value = "";




});



}





// Display Labor Cost List


function displayLaborCost(){


const laborList = document.getElementById("laborList");



if(laborList){


laborList.innerHTML = "";



laborCosts.forEach(function(labor){



let row = `


<tr>


<td>${labor.date}</td>


<td>${labor.name}</td>


<td>${labor.work}</td>


<td>${labor.days}</td>


<td>${labor.total} Tk</td>


</tr>


`;



laborList.innerHTML += row;



});



}



}




// Load Existing Labor Data

displayLaborCost();





/* ================= END: WEEKLY LABOR COST SYSTEM ================= */


/* ================= START: PURCHASE MANAGEMENT SYSTEM ================= */



// Load Purchase Data

let purchaseData = JSON.parse(

    localStorage.getItem("purchaseData")

) || [];






// Add Purchase Button


const addPurchaseBtn = document.getElementById("addPurchaseBtn");




if(addPurchaseBtn){



addPurchaseBtn.addEventListener("click", function(){



    let productName = document.getElementById("productName").value;


    let supplierName = document.getElementById("supplierName").value;


    let quantity = document.getElementById("quantity").value;


    let purchaseAmount = document.getElementById("purchaseAmount").value;






    if(

        productName === "" ||

        supplierName === "" ||

        quantity === "" ||

        purchaseAmount === ""

    ){


        alert("Please fill all information");


        return;


    }






    let purchase = {



        date: new Date().toLocaleDateString(),


        product: productName,


        supplier: supplierName,


        qty: Number(quantity),


        amount: Number(purchaseAmount)



    };






    purchaseData.push(purchase);






    localStorage.setItem(


        "purchaseData",


        JSON.stringify(purchaseData)


    );







    displayPurchase();






    // Clear Input


    document.getElementById("productName").value = "";


    document.getElementById("supplierName").value = "";


    document.getElementById("quantity").value = "";


    document.getElementById("purchaseAmount").value = "";





});



}








// Display Purchase List



function displayPurchase(){



const purchaseList = document.getElementById("purchaseList");



if(purchaseList){



purchaseList.innerHTML = "";





purchaseData.forEach(function(item){





let row = `



<tr>


<td>${item.date}</td>


<td>${item.product}</td>


<td>${item.supplier}</td>


<td>${item.qty}</td>


<td>${item.amount} Tk</td>


</tr>



`;





purchaseList.innerHTML += row;





});



}



}






// Load Previous Purchase Data


displayPurchase();





/* ================= END: PURCHASE MANAGEMENT SYSTEM ================= */

/* ================= START: EXPENSE LEDGER SYSTEM ================= */



// Load Expense Data


let expenseData = JSON.parse(

    localStorage.getItem("expenseData")

) || [];







// Add Expense Button


const addExpenseBtn = document.getElementById("addExpenseBtn");




if(addExpenseBtn){



addExpenseBtn.addEventListener("click", function(){





    let category = document.getElementById("expenseCategory").value;


    let description = document.getElementById("expenseDescription").value;


    let amount = document.getElementById("expenseAmount").value;






    if(

        category === "" ||

        description === "" ||

        amount === ""

    ){


        alert("Please fill all information");


        return;


    }







    let expense = {



        date: new Date().toLocaleDateString(),


        category: category,


        description: description,


        amount: Number(amount)



    };






    expenseData.push(expense);






    localStorage.setItem(


        "expenseData",


        JSON.stringify(expenseData)


    );






    displayExpense();







    // Clear Input



    document.getElementById("expenseCategory").value = "";


    document.getElementById("expenseDescription").value = "";


    document.getElementById("expenseAmount").value = "";





});



}









// Display Expense List



function displayExpense(){



const expenseList = document.getElementById("expenseList");



if(expenseList){



expenseList.innerHTML = "";





expenseData.forEach(function(item){





let row = `



<tr>


<td>${item.date}</td>


<td>${item.category}</td>


<td>${item.description}</td>


<td>${item.amount} Tk</td>


</tr>



`;





expenseList.innerHTML += row;





});



}



}






// Load Previous Expense Data


displayExpense();





/* ================= END: EXPENSE LEDGER SYSTEM ================= */


/* ================= START: WEEKLY COST REPORT SYSTEM ================= */



// Weekly Report Function

function updateWeeklyReport(){


    let contractorTotal = 0;
    let laborTotal = 0;
    let purchaseTotal = 0;
    let expenseTotal = 0;



    // Contractor Total

    contractorPayments.forEach(function(item){

        contractorTotal += Number(item.amount);

    });



    // Labor Total

    laborCosts.forEach(function(item){

        laborTotal += Number(item.total);

    });



    // Purchase Total

    purchaseData.forEach(function(item){

        purchaseTotal += Number(item.amount);

    });



    // Expense Total

    expenseData.forEach(function(item){

        expenseTotal += Number(item.amount);

    });




    let grandTotal =

        contractorTotal +
        laborTotal +
        purchaseTotal +
        expenseTotal;




    // Show Report

    document.getElementById("contractorTotal").innerText =
        contractorTotal + " Tk";

    document.getElementById("laborTotal").innerText =
        laborTotal + " Tk";

    document.getElementById("purchaseTotal").innerText =
        purchaseTotal + " Tk";

    document.getElementById("expenseTotal").innerText =
        expenseTotal + " Tk";

    document.getElementById("grandTotal").innerText =
        grandTotal + " Tk";

}



// Refresh Button

const refreshReportBtn =
document.getElementById("refreshReportBtn");


if(refreshReportBtn){

    refreshReportBtn.addEventListener("click", updateWeeklyReport);

}



// Auto Load Report

updateWeeklyReport();



/* ================= END: WEEKLY COST REPORT SYSTEM ================= */

/* ================= START: INCOME & EXPENSE REPORT SYSTEM ================= */

// Income Data

let incomeData = JSON.parse(
    localStorage.getItem("incomeData")
) || [];


// Add Income

const addIncomeBtn = document.getElementById("addIncomeBtn");


if(addIncomeBtn){

    addIncomeBtn.addEventListener("click", function(){

        let income = prompt("Enter Income Amount (Tk)");

        if(income === null || income === ""){
            return;
        }

        incomeData.push({
            date: new Date().toLocaleDateString(),
            amount: Number(income)
        });

        localStorage.setItem(
            "incomeData",
            JSON.stringify(incomeData)
        );

        updateIncomeExpenseReport();

    });

}



// Update Income & Expense Report

function updateIncomeExpenseReport(){

    let totalIncome = 0;

    incomeData.forEach(function(item){

        totalIncome += Number(item.amount);

    });


    let totalExpense = 0;

    contractorPayments.forEach(function(item){

        totalExpense += Number(item.amount);

    });


    laborCosts.forEach(function(item){

        totalExpense += Number(item.total);

    });


    purchaseData.forEach(function(item){

        totalExpense += Number(item.amount);

    });


    expenseData.forEach(function(item){

        totalExpense += Number(item.amount);

    });



    let balance = totalIncome - totalExpense;



    document.getElementById("incomeTotal").innerText =
    totalIncome + " Tk";


    document.getElementById("reportExpenseTotal").innerText =
    totalExpense + " Tk";


    document.getElementById("netBalance").innerText =
    balance + " Tk";

}



// Refresh Report

const refreshIncomeReportBtn =
document.getElementById("refreshIncomeReportBtn");


if(refreshIncomeReportBtn){

refreshIncomeReportBtn.addEventListener(
"click",
updateIncomeExpenseReport
);

}


// Auto Load

updateIncomeExpenseReport();

/* ================= END: INCOME & EXPENSE REPORT SYSTEM ================= */

/* ================= START: PDF / WHATSAPP / PRINT REPORT ================= */



// Export PDF

const pdfReportBtn = document.getElementById("pdfReportBtn");

if(pdfReportBtn){

pdfReportBtn.addEventListener("click", function(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.setFontSize(18);
doc.text("Smart Building Management",20,20);

doc.setFontSize(12);

doc.text("Income : " +
document.getElementById("incomeTotal").innerText,20,40);

doc.text("Expense : " +
document.getElementById("reportExpenseTotal").innerText,20,50);

doc.text("Net Balance : " +
document.getElementById("netBalance").innerText,20,60);

doc.save("SBMS_Report.pdf");

});

}




// WhatsApp Report

const whatsappReportBtn =
document.getElementById("whatsappReportBtn");

if(whatsappReportBtn){

whatsappReportBtn.addEventListener("click", function(){

let message =
"🏢 Smart Building Management\n\n" +

"Income: " +
document.getElementById("incomeTotal").innerText +
"\n" +

"Expense: " +
document.getElementById("reportExpenseTotal").innerText +
"\n" +

"Net Balance: " +
document.getElementById("netBalance").innerText;

window.open(
"https://wa.me/?text=" +
encodeURIComponent(message),
"_blank"
);

});

}




// Print Report

const printReportBtn =
document.getElementById("printReportBtn");

if(printReportBtn){

printReportBtn.addEventListener("click", function(){

window.print();

});

}



/* ================= END: PDF / WHATSAPP / PRINT REPORT ================= */

/* ================= START: CLEAR TEST DATA ================= */

const clearTestDataBtn = document.getElementById("clearTestDataBtn");

if (clearTestDataBtn) {

    clearTestDataBtn.addEventListener("click", function () {

        if (confirm("সব Test Data মুছে ফেলতে চান?")) {

            localStorage.removeItem("contractorPayments");
            localStorage.removeItem("laborCosts");
            localStorage.removeItem("purchaseData");
            localStorage.removeItem("expenseData");
            localStorage.removeItem("incomeData");

            alert("Test Data Deleted Successfully.");

            location.reload();
        }

    });

}

/* ================= END: CLEAR TEST DATA ================= */


/* ================= START: FACTORY RESET ================= */

const factoryResetBtn = document.getElementById("factoryResetBtn");

if (factoryResetBtn) {

    factoryResetBtn.addEventListener("click", function () {

        let code = prompt("Factory Reset করতে RESET লিখুন");

        if (code === "RESET") {

            localStorage.clear();

            alert("SBMS Factory Reset Completed.");

            location.reload();

        } else {

            alert("Factory Reset বাতিল করা হয়েছে.");

        }

    });

}






/* ================= END: FACTORY RESET ================= */
