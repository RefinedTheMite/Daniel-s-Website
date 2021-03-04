<script>
      var myVar = setInterval(myTimer, 1000);
      var hours = ["12",
      "01","02","03","04","05","06","07","08","09","10","11","12",
      "01","02","03","04","05","06","07","08","09","10","11"];
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      function myTimer() {
        var date = new Date();
        document.getElementById("date").innerHTML =
          date.getDate() +
          "-" +
          months[date.getMonth()] +
          "-" +
          date.getFullYear();
          document.getElementById("hours").innerHTML = hours[date.getHours()];
        document.getElementById("minutes").innerHTML = date.getMinutes()<10?"0"+date.getMinutes() :date.getMinutes();
        document.getElementById("seconds").innerHTML = date.getSeconds()<10?"0"+date.getSeconds() :date.getSeconds();
        document.getElementById("ampm").innerHTML = date.getHours()<12?"AM":"PM";
        
        if (document.getElementById("colon1").innerHTML.includes(":"))
        {
        
        document.getElementById("colon2").innerHTML = "";
        document.getElementById("colon1").innerHTML = "";
        }
        else 
        {
            
            document.getElementById("colon2").innerHTML = ":";
        document.getElementById("colon1").innerHTML = ":";
        }
        
      }
    </script>
