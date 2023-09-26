const description = document.getElementsByClassName("desc");
const descriptionArray = Array.from(description);
descriptionArray.forEach((ele) => {
    const newelem = document.createElement("p");
    const newh3Ele = document.createElement("h3");
    newelem.textContent = ` Our Equilibrium collection promotes balance and calm.`;
    newh3Ele.textContent = `Equilibrium #3429`;
    ele.appendChild(newh3Ele);
    ele.appendChild(newelem);
});


const toteth = document.getElementsByClassName("tot-eth");
const Arraytot = Array.from(toteth);
Arraytot.forEach((ele) => {
    const NewELe = document.createElement("img");
    const NewEleImg = document.createElement("img");
    const Newdiv = document.createElement("div");
    Newdiv.classList.add("clk-cont");
    const PnewEle = document.createElement("p");
    NewELe.src = `images/icon-ethereum.svg`;
    NewEleImg.src = `images/icon-clock.svg`;
    Newdiv.appendChild(NewEleImg);
    PnewEle.textContent = `0.041 ETH`;
    const ParaELe = document.createElement("p");
    ParaELe.setAttribute("id", "para");
    ParaELe.textContent = ` 3 days left`;
    Newdiv.appendChild(ParaELe);
    ele.appendChild(NewELe);
    ele.appendChild(PnewEle);
    ele.appendChild(Newdiv);
    ele.appendChild(ParaELe);
})

