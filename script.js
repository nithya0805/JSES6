let present=()=>{

    let store = document.getElementById("name").value;

    document.getElementById("message").innerHTML="HAPPY BIRTHDAY "+ store;
    document.getElementById("image1").src="./images/happybirthdayimage.png";
}
    document.getElementById("clicky").addEventListener("click",present);

let show=()=>{

    let carry = document.getElementById("name").value;

    document.getElementById("message").innerHTML="MERRY CHRISTMAS"+ carry;
    document.getElementById("image1").src="./images/merrychristmasimage.png";

}

    document.getElementById("merry").addEventListener("click",show)