async function fetchData() {
    const res=await fetch ("https://cryptingup.com/api/markets");
    const record=await mainfest.json();
    document.getElementById("quote").innerHTML=record.markets[0].quote;
    document.getElementById("openPrice").innerHTML=record.openPrice;
    document.getElementById("lowPrice").innerHTML=record.lowPrice;
    document.getElementById("highPrice").innerHTML=record.highPrice;
    document.getElementById("lastPrice").innerHTML=record.lastPrice;
}
fetchData();