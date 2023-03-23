/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const totBill = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const no_of_people = document.getElementById('numberOfPeople');
const perPerson_total = document.getElementById('perPersonTotal');
const gstDIV = document.getElementById('gstInput');
const discDIV = document.getElementById('DiscountInput');

// Get number of people from number of people div
let numberOfPeople = Number(no_of_people.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const user_bill = Number(totBill.value);
  // const user_bill = Number(totBill.innerHTML); // innerHTML won't work

  // getting the user's dsicount
  const user_discount = Number(discDIV.value);

  // getting the GST %
  const user_gst = Number(gstDIV.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const user_tip_percentage = Number(tipInput.value) / 100;
  // const user_tip_percentage = Number(tipInput.innerHTML) / 100; // innerHTML won't work

  // get the total tip amount
  const tip_amt = user_tip_percentage * user_bill;


  // calculate the total (tip amount + bill)
  const fin_tot_bill = (1 - (user_discount/100)) * (tip_amt + user_bill);
  const bill_to_be_paid = (1 + (user_gst/100)) * fin_tot_bill;


  // calculate the per person total (total divided by number of people)
  const per_person_tot = bill_to_be_paid / numberOfPeople;


  // update the perPersonTotal on DOM & show it to user
  // perPerson_total.innerText = (per_person_tot.toFixed(2));
  perPerson_total.innerText = `$${per_person_tot.toFixed(2)}`;

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1;


  // update the DOM with the new number of people
  no_of_people.innerText = numberOfPeople;


  // calculate the bill based on the new number of people
  calculateBill();

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople <= 1) {
    throw 'Hey! You cannot have less than 1 person!'
    // return;
  }



  // decrement the amount of people
  numberOfPeople -= 1;


  // update the DOM with the new number of people
  no_of_people.innerText = numberOfPeople;


  // calculate the bill based on the new number of people
  calculateBill();

}