$(document).ready(function () {
  $("#sendMessage").click(function () {
    const message = $("#chatInput").val().trim();
    if (message !== "") {
      $(".chat-box").append(
        `<hr><h5 class="text-primary">Bạn:</h5><p>${message}</p>`
      );
      $("#chatInput").val("");
      $(".chat-box").scrollTop($(".chat-box")[0].scrollHeight);
    }
  });

  $("#chatInput").keypress(function (e) {
    if (e.which === 13) {
      e.preventDefault();
      $("#sendMessage").click();
    }
  });

  $(".col-md-3 ul").append("<li>- Thành viên mới vừa tham gia</li>");
});
