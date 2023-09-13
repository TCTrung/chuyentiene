function ChangeMoney() {
    const Amount = +document.getElementById('Amount').value;
    const From = +document.getElementById('From').value;
    const To = +document.getElementById('To').value;
    const Result = Amount * To/From;
    document.getElementById('Result').innerHTML = Result;

}