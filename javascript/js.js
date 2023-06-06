

document.querySelector(".food").onclick=function(){
    
    document.querySelector(".fod " ).classList.remove("ar")
    document.querySelector(".cloth " ).classList.add("ar")
    document.querySelector(".phon " ).classList.add("ar")
    document.querySelector(".car " ).classList.add("ar")

}
document.querySelector(".all").onclick=function(){
   
    document.querySelector(".fod " ).classList.remove("ar")
    document.querySelector(".cloth " ).classList.remove("ar")
    document.querySelector(".phon " ).classList.remove("ar")
    document.querySelector(".car " ).classList.remove("ar")

    }
    document.querySelector(".clothes").onclick=function(){
        document.querySelector(".cloth " ).classList.remove("ar")
        document.querySelector(".fod " ).classList.add("ar")
        document.querySelector(".phon " ).classList.add("ar")
        document.querySelector(".car " ).classList.add("ar")
    
    }
    document.querySelector(".phones").onclick=function(){
        document.querySelector(".phon " ).classList.remove("ar")
        document.querySelector(".fod " ).classList.add("ar")
        document.querySelector(".cloth " ).classList.add("ar")
        document.querySelector(".car " ).classList.add("ar")
    
    }
    document.querySelector(".cars").onclick=function(){
        document.querySelector(".car " ).classList.remove("ar")
        document.querySelector(".fod " ).classList.add("ar")
        document.querySelector(".cloth " ).classList.add("ar")
        document.querySelector(".phon " ).classList.add("ar")
    
    }