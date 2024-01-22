const localeSettings = {}
dayjs.locale(localeSettings);
$(function () {
  
  $(function () {
    function getCurrentHour() {
      return dayjs().format("HH");
    }

  function updateHourClasses() {

    const currentHour = getCurrentHour();

    $(".time-block").each(function () {
      const hourId = $(this).attr("id");
      const hour = parseInt(hourId);

      if (hour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (hour == currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }

    });
  }
    
  function loadSavedData() {
    $(".time-block").each(function () {
      const hourId = $(this).attr("id");
      const savedData = localStorage.getItem(hourId);
      if (savedData !== null) {
        $(this).find("textarea").val(savedData);
      }
    });
  }

  function handleSaveButtonClick() {
    const hourId = $(this).parent().attr("id");
    const userInput = $(this).siblings("textarea").val();
    localStorage.setItem(hourId, userInput);
    console.log("Saved data.");
  }

  const currentHour = getCurrentHour();
  console.log("Current Hour:", currentHour);

  updateHourClasses();

  loadSavedData();

  $(".saveBtn").on("click", handleSaveButtonClick);


});

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));
  
});