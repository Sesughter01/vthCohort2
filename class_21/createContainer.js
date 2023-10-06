/**
 * This package takes two string parameters ; 
 * the first parameter is the name of an html block element 
 * and the second parameter is a bootstrap class
 * and it returns the html element styled with the 
 * class name
 *  */ 

export const createContainer = (contEle,bootStrClass,bootStrClass2,bootStrClass3)=>{
    let changeToStr = contEle;
    const myEle = document.createElement(changeToStr);

    myEle.classList.add(bootStrClass,bootStrClass2);

    return myEle;
}

// export default createContainer;