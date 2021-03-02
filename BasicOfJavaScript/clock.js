function clock() {

    let date = new Date();

    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let period = "AM";

    greeting = (hrs >= 3 && hrs <= 11) ? 'Good Morning' : '';
    greeting = (hrs >= 12 && hrs <= 16) ? 'Good Afternoon' : '';
    greeting = (hrs >= 17 && hrs <= 21) ? 'Good Evening' : '';
    greeting = (hrs >= 22 || hrs <= 2) ? 'Good Night' : '';
  
    if (hrs == 0) hrs = 12;
    if (hrs > 12) {
      hrs = hrs - 12;
      period = "PM";
    }
  
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    day = day < 10 ? `0${day}` : day;

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    month = months[month];
  
    let time = `${hrs}:${mins}:${secs}  ${period}`;
    let date_num = `${day} ${month} ${year}` ;

    setInterval(clock, 1000);

    document.getElementById("greet").innerText = greeting;
    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = date_num;
  }
  
  clock();
