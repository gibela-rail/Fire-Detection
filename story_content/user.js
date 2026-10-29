function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5sS9BsR7CR8":
        Script1();
        break;
      case "5Z8IDYOpWns":
        Script2();
        break;
      case "5ovGRTcbn2j":
        Script3();
        break;
      case "6jNpItXtztX":
        Script4();
        break;
      case "6Ojgu9lry2w":
        Script5();
        break;
      case "63XPn9vP2Yr":
        Script6();
        break;
      case "5l0CZwaUUt8":
        Script7();
        break;
      case "6YZPnxQrfVL":
        Script8();
        break;
      case "6PltfNvhjpZ":
        Script9();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script2()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script3()
{
  window.print();
}

function Script4()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script5()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script6()
{
  window.print();
}

function Script7()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script8()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script9()
{
  window.print();
}

