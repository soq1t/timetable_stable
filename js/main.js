let lessonTime={start:[28800,35400,42e3,50400],end:[34500,41100,47700,56100]};$(document).ready((function(){var e="";for(let n=0;n<lessonTime.start.length;n++)lessonTimeHours=Math.floor(lessonTime.start[n]/3600),lessonTimeMinutes=lessonTime.start[n]%3600/60,e="",lessonTimeHours<10&&(e+="0"),e+=`${lessonTimeHours}:`,lessonTimeMinutes<10&&(e+="0"),e+=`${lessonTimeMinutes}`,$(".time_"+(n+1)).children(".time__start").text(e),lessonTimeHours=Math.floor(lessonTime.end[n]/3600),lessonTimeMinutes=lessonTime.end[n]%3600/60,e="",lessonTimeHours<10&&(e+="0"),e+=`${lessonTimeHours}:`,lessonTimeMinutes<10&&(e+="0"),e+=`${lessonTimeMinutes}`,$(".time_"+(n+1)).children(".time__end").text(e)}));let monthName=["января","февраля","марта","апреля","мая","июня","илюя","августа","сентября","октября","ноября","декабря"],dayName=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];const dateBegin=new Date(16304544e5),dateCheck=6048e5;$(document).ready((function(){var e=new Date;console.log(e);var n=e.getDay();function t(){var t=`Сегодня: ${(e=new Date).getDate()} ${monthName[e.getMonth()]} ${e.getFullYear()} года (${dayName[n]})`;$(".week__date").text(t)}function s(){var n="Время: ";e.getHours()<10&&(n+="0"),n+=`${e.getHours()}:`,e.getMinutes()<10&&(n+="0"),n+=`${e.getMinutes()}:`,e.getSeconds()<10&&(n+="0"),n+=`${e.getSeconds()}`,$(".week__time").text(n)}$(".day_"+n).children(".day__name").addClass("active slide"),$(".day_"+n).children(".day__timetable").delay(100).slideDown(300,(function(){$(this).css("display","grid")})),$(document).ready(t()),setInterval(t,1e3),$(document).ready(s()),setInterval(s,1e3);var l=e.getTime()-dateBegin.getTime(),i=Math.floor(l/6048e5);function o(){++i%2==0?(console.log("Чётная"),$(".week__even-odd").removeClass("odd").addClass("even").text("Чётная неделя"),$(".main").removeClass("odd").addClass("even"),$(".nav__tab").removeClass("odd").addClass("even"),$(".lesson_even").css("display","grid"),$(".lesson_odd").each((function(){0==$(this).hasClass("lesson_even")&&$(this).css("display","none")}))):(console.log("Нечётная"),$(".week__even-odd").removeClass("even").addClass("odd").text("Нечётная неделя"),$(".main").removeClass("even").addClass("odd"),$(".nav__tab").removeClass("even").addClass("odd"),$(".lesson_odd").css("display","grid"),$(".lesson_even").each((function(){0==$(this).hasClass("lesson_odd")&&$(this).css("display","none")})))}setTimeout(o,0),$(".week__even-odd").click(o);var a=3600*e.getHours()+60*e.getMinutes()+e.getSeconds();if(a>lessonTime.start[0]-1&&a<lessonTime.end[lessonTime.end.length-1]+1)for(let e=0;e<lessonTime.end.length;e++)if(a<lessonTime.end[e]){$(".day_"+n).children().children(".lesson_"+(e+1)).addClass("active");break}var d=n+1;d>5&&(d=1);var r=0;for(let e=5;e>1;e--){if($("#u117-target").children(".day_"+n).children(".day__timetable").children().last().hasClass("lesson_"+e)){r=lessonTime.end[e-1];break}if($("#u217-target").children(".day_"+n).children(".day__timetable").children().last().hasClass("lesson_"+e)){r=lessonTime.end[e-1];break}}console.log(r),a>r+299&&($(".day_"+n).children(".day__name").removeClass("slide").next(".day__timetable").slideUp(300),$(".day_"+d).children(".day__name").addClass("slide nextDay").next(".day__timetable").slideDown(300,(function(){$(this).css("display","grid")})))})),$(document).ready((function(){$(".nav__tab").each((function(){if($(this).hasClass("active")){var e=$(this).attr("id");$(`#${e}-target`).css("display","grid"),$(`#${e}-target`).hasClass("now")&&$(`#${e}-target`).css("display","flex")}})),$(".nav__tab").click((function(e){if(0==$(this).hasClass("active")){$(".nav__tab").removeClass("active"),$(this).addClass("active");var n=$(this).attr("id");$(".main__tab").fadeOut(150),$(`#${n}-target`).delay(160).fadeIn(150,(function(){$(this).css("display","grid"),$(`#${n}-target`).hasClass("now")&&$(`#${n}-target`).css("display","flex")}))}})),$(".day__name").click((function(e){$(this).hasClass("slide")?$(this).next().slideUp(300):$(this).next().slideDown(300,(function(){$(this).css("display","grid")})),$(this).toggleClass("slide")}))}));let lessonName={short:["ФРО на АЯ","АИП и ЧФ","ПАП при ОВД","ПП и ТОВД","ЭО","ОПВД","АП и ПНК","МОМАН"],full:["Фразеология радиообмена на английском языке","Авиационная инженерная психология и человеческий фактор","Предотвращение АП при обслуживании ВД","Правила, процедуры и технология обслуживания воздушного движения","Экономика отрасли","Организация потоков воздушного движения","Авиационные приборы и ПНК","Метеорологическое обеспечение международной АН"]},teacherName={short:["Лазовский Г.Б., Швайко Е. П.","Науменко А.И.","Козлова О.Г.","Александров О.В.","Дубовский А.В.","Лазовский Г.Б.","Вишневский Р.А.","Пилипчук В.С.","Барабан И.И."],full:["Лазовский Георгий Борисович, Швайко Елена Петровна","Науменко Александр Иванович","Козлова Ольга Григорьевна","Пока хз","Дубовский Алексей Викторович","Лазовский Георгий Борисович","Вишневский Роман Анатольевич","Пилипчук Владимир Сергеевич","Барабан Иван Иванович"]};$(document).ready((function(){function e(){for(let e=0;e<lessonName.short.length;e++)switch($(this).text()){case lessonName.short[e]:$(this).fadeOut(100,(function(){$(this).text(lessonName.full[e]).fadeIn(100)}));break;case lessonName.full[e]:$(this).fadeOut(100,(function(){$(this).text(lessonName.short[e]).fadeIn(100)}))}}$(".lesson__name").click(e),$(".now__name").click(e),$(".lesson__teacher").click((function(){console.log($(this).text());for(let e=0;e<teacherName.short.length;e++)switch($(this).text()){case teacherName.short[e]:$(this).fadeOut(100,(function(){$(this).text(teacherName.full[e]).fadeIn(100)}));break;case teacherName.full[e]:$(this).fadeOut(100,(function(){$(this).text(teacherName.short[e]).fadeIn(100)}))}}))})),$(document).ready((function(){$(".lesson__type").each((function(){"ЛК"==$(this).text()?$(this).parent(".lesson").addClass("lesson_lection"):$(this).parent(".lesson").addClass("lesson_practice")}))})),$(document).ready((function(){function e(){var e=1640898e6-new Date;e=Math.floor(e/1e3),semRemainDays=Math.floor(e/86400),semRemainTime=e%86400,semRemainHours=Math.floor(semRemainTime/3600),semRemainMinutes=Math.floor(semRemainTime%3600/60),semRemainSeconds=semRemainTime%86400%60,semRemainTimeString=`До Нового Года: ${semRemainDays} дней, `,semRemainHours<10&&(semRemainTimeString+="0"),semRemainTimeString=semRemainTimeString+semRemainHours+":",semRemainMinutes<10&&(semRemainTimeString+="0"),semRemainTimeString=semRemainTimeString+semRemainMinutes+":",semRemainSeconds<10&&(semRemainTimeString+="0"),semRemainTimeString+=semRemainSeconds,$(".footer__time").text(semRemainTimeString)}setTimeout(e,0),setInterval(e,1e3)})),$(document).ready((function(){var e=new Date,n=e.getDay();0==n&&(n=7),console.log("День: "+n);var t=e.getTime()-dateBegin.getTime(),s=Math.floor(t/6048e5)+1;console.log("Номер недели: ",+s);var l=3600*e.getHours()+60*e.getMinutes()+e.getSeconds();if(console.log(l),l>lessonTime.start[0]-1)if(l<lessonTime.end[lessonTime.end.length-1]+1){for(let e=0;e<lessonTime.end.length;e++)if(l<lessonTime.end[e]){if(s%2==0){var i=$("#u117-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_even").children(".lesson__name").text(),o=$("#u117-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_even").children(".lesson__autidory").text(),a=$("#u117-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_even").children(".lesson__type").text();console.log(o,i,a),""==i?$("#now_117").children(".now__content").html("<p>Ничаго няма</p>"):($("#now_117").children(".now__content").children(".now__auditory").text(o),$("#now_117").children(".now__content").children(".now__lesson").children(".now__name").text(i),$("#now_117").children(".now__content").children(".now__lesson").children(".now__type").text(a));i=$("#u217-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_even").children(".lesson__name").text(),o=$("#u217-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_even").children(".lesson__autidory").text(),a=$("#u217-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_even").children(".lesson__type").text();console.log(o,i,a),""==i?$("#now_217").children(".now__content").html("<p>Ничаго няма</p>"):($("#now_217").children(".now__content").children(".now__auditory").text(o),$("#now_217").children(".now__content").children(".now__lesson").children(".now__name").text(i),$("#now_217").children(".now__content").children(".now__lesson").children(".now__type").text(a));break}i=$("#u117-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_odd").children(".lesson__name").text(),o=$("#u117-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_odd").children(".lesson__autidory").text(),a=$("#u117-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_odd").children(".lesson__type").text();console.log(o,i,a),""==i?$("#now_117").children(".now__content").html("<p>Ничаго няма</p>"):($("#now_117").children(".now__content").children(".now__auditory").text(o),$("#now_117").children(".now__content").children(".now__lesson").children(".now__name").text(i),$("#now_117").children(".now__content").children(".now__lesson").children(".now__type").text(a));i=$("#u217-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_odd").children(".lesson__name").text(),o=$("#u217-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_odd").children(".lesson__autidory").text(),a=$("#u217-target").children(".day_"+n).children(".day__timetable").children(".lesson_"+(e+1)).filter(".lesson_odd").children(".lesson__type").text();console.log(o,i,a),""==i?$("#now_217").children(".now__content").html("<p>Ничаго няма</p>"):($("#now_217").children(".now__content").children(".now__auditory").text(o),$("#now_217").children(".now__content").children(".now__lesson").children(".now__name").text(i),$("#now_217").children(".now__content").children(".now__lesson").children(".now__type").text(a));break}}else $("#now_117").children(".now__content").html("<p>Ничаго няма</p>"),$("#now_217").children(".now__content").html("<p>Ничаго няма</p>");else $("#now_117").children(".now__content").html("<p>Ничаго няма</p>"),$("#now_217").children(".now__content").html("<p>Ничаго няма</p>")}));