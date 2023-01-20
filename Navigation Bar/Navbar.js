const firstList = ["Home", "About", "Projects", "Work"];
const secondList = ["Contact us", "Help"];


function makeNav2(list1, list2){
    new_list = list1.concat(list2);
    const text = new_list.reduce(function(total, value, index){
        if (index === list1.length-1){
            return total + "<li><a href= #home>" + value + "</a></li>" + "</ul><ul>";
        }
        else if (index === new_list.length-1){
            return total + "<li><a href= #contact>" + value + "</a></li>" + "</ul>";
        }
        else{
            return total + "<li><a href= #contact>" + value + "</a></li>";
        }
    }, "<ul>")
    console.log(text)
    return text;
}

document.getElementById("demo").innerHTML = makeNav2(firstList, secondList);