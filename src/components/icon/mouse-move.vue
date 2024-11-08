<template>
    <span>
        <div id="mouse-scroll">
        <div class="mouse">
            <div class="mouse-in"></div>
        </div>
        <div>
            <span class="down-arrow-1"></span>
            <span class="down-arrow-2"></span>
            <span class="down-arrow-3"></span>
        </div>
    </div>
    </span>
</template>

<style scoped lang="scss">
#mouse-scroll {
    display: block;
}

#mouse-scroll {
    position: fixed;
    margin: auto;
    left: 50%;
    bottom: 8px;
    transform: translateX(-50%);
    z-index: 9999;
}

#mouse-scroll span {
    display: block;
    width: 5px;
    height: 5px;
    transform: rotate(45deg);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    margin: 0 0 3px 5px;
}

#mouse-scroll .mouse {
    height: 21px;
    width: 14px;
    border-radius: 10px;
    transform: none;
    border: 2px solid #ffffff;
    top: 170px;
}

#mouse-scroll .down-arrow-1 {
    margin-top: 6px;
}

#mouse-scroll .down-arrow-1,
#mouse-scroll .down-arrow-2,
#mouse-scroll .down-arrow-3 {
    animation: mouse-scroll 1s infinite;
}

#mouse-croll .down-arrow-1 {
    animation-delay: .1s;
    animation-direction: alternate;
}

#mouse-scroll .down-arrow-2 {
    animation-delay: .2s;
    animation-direction: alternate;
}

#mouse-scroll .down-arrow-3 {
    animation-delay: .3s;
    animation-direction: alternate;
}

#mouse-scroll .mouse-in {
    height: 5px;
    width: 2px;
    display: block;
    margin: 5px auto;
    background: #ffffff;
    position: relative;
}

#mouse-scroll .mouse-in {
    animation: mouse-animated 1.2s ease infinite;
}

@keyframes animated-mouse {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(6px);
    }
}

@keyframes mouse-scroll {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}
</style>