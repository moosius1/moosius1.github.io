try{
    let options = {
        weekday: "long",
        day: "numberic",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "currentdate2"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
    alert("Browser doesn't support Locale");

}