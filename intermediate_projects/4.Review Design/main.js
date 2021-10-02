const reviewData = {
    'key_1': {
        'star': 155 ,
    },'key_2': {
        'star':125,
    },'key_3': {
        'star':214,
    },'key_4': {
        'star':322,
    },'key_5': {
        'star':575,
    },
}

// total reviews
let getTotal = () => {
    return reviewData.key_1.star + reviewData.key_2.star + reviewData.key_3.star + reviewData.key_4.star + reviewData.key_5.star;
}

//mutate object to get percentage of ratings
Object.entries(reviewData).forEach(([key,review]) => {
    review.perc =  `${Math.floor((review.star / getTotal()) * 100)}`;
    console.log(review.perc)
})

//get total avg of all ratings
let getAvg = () => {
    return ((1*reviewData.key_1.star + 
        2*reviewData.key_2.star + 
        3*reviewData.key_3.star + 
        4*reviewData.key_4.star + 
        5*reviewData.key_5.star) / 
        getTotal());
}

getProgress();
getRatings();
getStarPercentage()
console.log((getAvg().toFixed(1))/5)
function getRatings(){
    const fi_star = document.getElementById('5-star');
    const fo_star = document.getElementById('4-star');
    const th_star = document.getElementById('3-star');
    const tw_star = document.getElementById('2-star');
    const one_star = document.getElementById('1-star');
    const avg = document.getElementById("avg-rating")

    avg.innerText = `${(getAvg()).toFixed(2)}`;

    fi_star.innerText = `${reviewData.key_5.perc}%`;
    const rate_span5 = document.createElement("span");
    rate_span5.innerText = `(${reviewData.key_5.star})`;
    rate_span5.classList.add("nr")
    fi_star.appendChild(rate_span5);

    fo_star.innerText = `${reviewData.key_4.perc}%`;
    const rate_span4 = document.createElement("span");
    rate_span4.innerText = `(${reviewData.key_4.star})`;
    rate_span4.classList.add("nr")
    fo_star.appendChild(rate_span4);

    th_star.innerText = `${reviewData.key_3.perc}%`;
    const rate_span3 = document.createElement("span");
    rate_span3.innerText = `(${reviewData.key_3.star})`;
    rate_span3.classList.add("nr")
    th_star.appendChild(rate_span3);

    tw_star.innerText = `${reviewData.key_2.perc}%`;
    const rate_span2 = document.createElement("span");
    rate_span2.innerText = `(${reviewData.key_2.star})`;
    rate_span2.classList.add("nr")
    tw_star.appendChild(rate_span2);

    one_star.innerText = `${reviewData.key_1.perc}%`;
    const rate_span1 = document.createElement("span");
    rate_span1.innerText = `(${reviewData.key_1.star})`;
    rate_span1.classList.add("nr")
    one_star.appendChild(rate_span1);
}

function getProgress(){
    const pd_1 = document.querySelector('.progress-done-1');
    const pd_2 = document.querySelector('.progress-done-2');
    const pd_3 = document.querySelector('.progress-done-3');
    const pd_4 = document.querySelector('.progress-done-4');
    const pd_5 = document.querySelector('.progress-done-5');

    pd_5.style.width = `${reviewData.key_5.perc}%`;
    pd_4.style.width = `${reviewData.key_4.perc}%`;
    pd_3.style.width = `${reviewData.key_3.perc}%`;
    pd_2.style.width = `${reviewData.key_2.perc}%`;
    pd_1.style.width = `${reviewData.key_1.perc}%`;

}

function getStarPercentage(){
    const starPercentage = ((`${(getAvg()).toFixed(1)}`) / 5) * 100 ;  //5 is 5stars i.e total stars
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
console.log(starPercentageRounded)
    document.querySelector('.stars-inner').style.width = starPercentageRounded;
}
//899/174/145/159/73