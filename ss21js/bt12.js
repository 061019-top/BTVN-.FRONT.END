let color;
for (let i = 0; i<10; i++){
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log('%cHello, World!', `color: ${color}`);
}