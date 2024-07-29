const renderContent = (div) => {
    const para = document.createElement('p');
    para.textContent = 'HELLO';
    para.style.color = 'red';

    div.appendChild(para);

}

export { renderContent };