var day = "hjwr"
switch (day){
    case "Monday":
    case "monday":
        console.log("понедельник");
        break;
    case "Tuesday":
    case "tuesday":
        console.log("вторник");
        break;
    case "Wednesday":
    case "wednesday":
        console.log("среда");
        break;
    case "Thursday":
    case "thursday":
        console.log("четверг");
        break;
    case "Friday":
    case "friday":
        console.log("пятница");
        break;
    case "Saturday":
    case "saturday":
        console.log("суббота");
        break;
    case "Sunday":
    case "sunday":
        console.log("воскресенье");
        break;
    default:
        console.log("неизвестный день")
}

var TVInfo = {
    name: "Во все тяжкие",
    releaseDate: "1 января 2008 года",
    mainActor: "Брайан Крэнстон, Аарон Пол, Дин Норрис, Боб Оденкёрк, Джанкарло Эспозито, Джонатан Бэнкс",
    episodes: {
        season1: 7,
        season2: 13,
        season3: 13,
        season4: 13,
        season5: 16,
        total: 62
    },
    about: "Школьный учитель химии Уолтер Уайт узнаёт, что болен раком лёгких. Учитывая сложное финансовое состояние дел семьи, а также перспективы, Уолтер решает заняться изготовлением метамфетамина. Для этого он привлекает своего бывшего ученика Джесси Пинкмана, когда-то исключённого из школы при активном содействии Уайта. Пинкман сам занимался варкой мета, но накануне, в ходе рейда УБН, он лишился подельника и лаборатории.",
}
console.log("Сериал " + TVInfo.name + " был выпущен " + TVInfo.releaseDate + "." + " В главных ролях: " + TVInfo.mainActor + "." + " В сериале " + TVInfo.name + " " + TVInfo.episodes.total + " серии." + " Описание: " + TVInfo.about)