<template>
<div>
    <b-container>
        <h2>What is this website ?</h2>
        <p>MemoSizeMe is a tiny tiny tiny project that is just meant to record measurements for future use.</p>
        <p>There is no account needed. It is free. There is no backend. Your data is actually stored within a little data base
            inside your browser. 
        </p>
        <p>So you can use it OffLine.</p>
        <p>That storage is called <em>localStorage</em> and a more official explanation can be found 
        here: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage</a>.</p>
        <h2>Why did i do this ?</h2>
        <p>Sure, there are plenty of ways to record information, but hey, I wanted to experiment that with 
            Nuxt. 
        </p>
        <p>
            When shopping, we are always asked different sizes, weither it is for gloves or a helmet. Can you say which size is your head ?
            I couldn't until I've been asked for and I measured it. 
            So now, I always have my sizes somewhere.
        </p>
        <h2>Progressive Web App</h2>
        <p>MemoSizeMe is a PWA, it means that when surfing the page you can add it to your
            smartphone as if it was a native app. No need to go to the Apple or Android store for that.</p>
            <p>You can also add it to your desktop.</p>
            <p>You do that by clicking on this sign <img src="~/assets/pwa.jpg"/>just within the URL bar in your browser.</p>
    </b-container>
    <b-navbar class="float-right tiny-footer">Made by&nbsp;<a href="https://fifteenpeas.com">Fifteenpeas Labs</a></b-navbar>
    </div>
    
</template>
<style>
.tiny-footer
{
    font-size: xx-small;
}
</style>