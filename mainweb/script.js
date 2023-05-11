let slideIndex = 1;
showSlides(slideIndex);

//ฟังก์ชั่นควบคุมปุ่มถัดไป ย้อนกลับ
function plusSlides(n) {
    showSlides(slideIndex += n);
  }

//ฟังก์ชั่นปุ่มกดด้านล่าง
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1} //ถ้าn>สไลด์ จะกลับไปหน้า1
    if (n < 1) {slideIndex = slides.length} //ถ้าn<1 จะกลับไปหน้าท้ายของสไลด์

    // สร้างลูปเพื่อลบรูปภาพตัวก่อนหน้าที่ทำการเปิด
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none";
      }
    
    // สร้างลูปทุกตัว แล้วทำการแทนที่class activeด้วยค่าว่าง
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //replaceคือการแทนที่ค่า
      }
    slides[slideIndex-1].style.display = "block"; // โชรูปภาพตัวแรกออกมา +0,2 +1,3 +2,4
    dots[slideIndex-1].className += " active"; // เพิ่มclass active เพื่อให้ตัวปุ่มมีการแสดงค้างไว้
}
