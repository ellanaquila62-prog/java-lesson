const modal = document.getElementById('paymentModal');
const buyBtn = document.getElementById('buyBtn');
const buyBtn2 = document.getElementById('buyBtn2');
const closeBtn = document.querySelector('.close');

// Buksan ang modal kapag pinindot ang Kunin Ngayon
buyBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});
// Buksan din kapag pinindot ang KUHAIN AGAD sa ibaba
buyBtn2.addEventListener('click', function() {
    modal.style.display = 'block';
});
// Isara kapag pinindot ang X
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});
// Isara kapag pinindot ang labas ng kahon
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});