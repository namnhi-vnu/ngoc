const textConfig = {
    text1: "He luu Emmm!",
    text2: "Anh có điều này muốn hỏi Em nhớ phải trả lời thật lòng nhaaa:3333",
    text3: "Em có thích Anh không ._.",
    text4: "Nếu Em không trả lời mà thoát ra tức là đúng rồi đó nha:v",
    text5: "Anh mơ à???",
    text6: "Yêu ơi là yêu <3",
    text7: "lí do Em thích Anh đi :vvvv",
    text8: "Gửi cho anh <3",
    text9: "Vì anh dễ thuong v~:>>",
    text10: "Anh biết mà ^^ Yêu Em x 1000.000",
    text11: "Chúc Em Một Buổi Tối Vui Vẻ 😍😍😍😍",
    text12: "Okii lunn <3",
};

$(document).ready(function () {
    // process bar
    setTimeout(function () {
        firstQuestion();
        $(".spinner").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({
            overflow: "visible",
        });
    }, 600);

    $("#text3").html(textConfig.text3);
    $("#text4").html(textConfig.text4);
    $("#no").html(textConfig.text5);
    $("#yes").html(textConfig.text6);

    function firstQuestion() {
        $(".content").hide();
        Swal.fire({
            title: textConfig.text1,
            text: textConfig.text2,
            imageUrl:
                "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/410309246_346607521347436_7414466899816095632_n.jpg?stp=c0.43.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=FHIVgvIwh-gAX9VKxlN&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBumaoj1QWh1_F2OjHewiomhG2W7NJPWRh2Ni4YWQG3hQ&oe=6580EDC7",
            imageWidth: 300,
            imageHeight: 300,
            background: '#fff url("img/iput-bg.jpg")',
            imageAlt: "Custom image",
        }).then(function () {
            $(".content").show(200);
        });
    }

    // switch button position
    function switchButton() {
        var audio = new Audio("sound/duck.mp3");
        audio.play();
        var leftNo = $("#no").css("left");
        var topNO = $("#no").css("top");
        var leftY = $("#yes").css("left");
        var topY = $("#yes").css("top");
        $("#no").css("left", leftY);
        $("#no").css("top", topY);
        $("#yes").css("left", leftNo);
        $("#yes").css("top", topNO);
    }
    // move random button póition
    function moveButton() {
        var audio = new Audio("sound/Swish1.mp3");
        audio.play();
        if (screen.width <= 600) {
            var x = Math.random() * 300;
            var y = Math.random() * 500;
        } else {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
        }
        var left = x + "px";
        var top = y + "px";
        $("#no").css("left", left);
        $("#no").css("top", top);
    }

    var n = 0;
    $("#no").mousemove(function () {
        if (n < 1) switchButton();
        if (n > 1) moveButton();
        n++;
    });
    $("#no").click(() => {
        if (screen.width >= 900) switchButton();
    });

    // generate text in input
    function textGenerate() {
        var n = "";
        var text = " " + textConfig.text9;
        var a = Array.from(text);
        var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
        var count = textVal.length;
        if (count > 0) {
            for (let i = 1; i <= count; i++) {
                n = n + a[i];
                if (i == text.length + 1) {
                    $("#txtReason").val("");
                    n = "";
                    break;
                }
            }
        }
        $("#txtReason").val(n);
    }

    // show popup
    $("#yes").click(function () {
        var audio = new Audio("sound/tick.mp3");
        audio.play();
        Swal.fire({
            title: textConfig.text7,
            html: true,
            width: 900,
            padding: "3em",
            html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
            background: '#fff url("img/iput-bg.jpg")',
            backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonColor: "#fe8a71",
            cancelButtonColor: "#f6cd61",
            confirmButtonText: textConfig.text8,
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    width: 900,
                    confirmButtonText: textConfig.text12,
                    background: '#fff url("img/iput-bg.jpg")',
                    title: textConfig.text10,
                    text: textConfig.text11,
                    confirmButtonColor: "#83d0c9",
                    onClose: () => {
                        window.location =
                            "https://www.facebook.com/NamAnh.vnu/";
                    },
                });
            }
        });

        $("#txtReason").focus(function () {
            var handleWriteText = setInterval(function () {
                textGenerate();
            }, 10);
            $("#txtReason").blur(function () {
                clearInterval(handleWriteText);
            });
        });
    });
});
