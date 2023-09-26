SelectRating = () => {
    const buttons = document.getElementsByClassName("rate-btn");
    let selectedindex = -1;
    Array.from(buttons).forEach((ele, index) => {
        ele.addEventListener('click', () => {
            if (selectedindex >= 0 || selectedindex === index) {
                buttons[selectedindex].classList.remove("selectedRating");
                selectedindex = -1;
            }

            ele.classList.add("selectedRating");
            selectedindex = index;

            // You can use a global variable to store the selected index here
            console.log("SelectedIndex =>", selectedindex)
            window.selectedRating = selectedindex + 1;
        });
    });
}

submitfn = () => {
    const sub = document.getElementById("submit-btn");
    const btnCont = document.querySelector(".btn-cont");

    sub.addEventListener('click', () => {
        const ratingBtns = document.querySelectorAll(".rate-btn");
        const submitBtn = document.getElementById("submit-btn");
        const head = document.querySelector(".heading-container");

        head.style.display = "none";
        ratingBtns.forEach(btn => {
            btn.style.display = "none";
        });
        submitBtn.style.display = "none";
        btnCont.style.display = "none";

        const thanks = document.getElementById("icon");
        thanks.innerHTML = `<img src="./images/illustration-thank-you.svg" alt="phone img">`;

        const message = document.getElementById("msg");
        message.textContent = `Thank You!`;

        const newPara = document.getElementById("para");
        newPara.textContent = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;

        // Get the selected rating from the global variable
        const selectedRating = window.selectedRating;
        console.log("Selected rating =>", selectedRating);

        if (selectedRating > 0) {
            const DisplayRating = document.getElementById("rating-selected");
            DisplayRating.style.display = "block";
            DisplayRating.textContent = `You selected ${selectedRating} out of 5`;
        }


    });
}

SelectRating();
submitfn();
