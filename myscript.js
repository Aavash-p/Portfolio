let element= document.getElementsByID('K').href="Home.html";



document.getElementById('K').href="Home.html";
document.getElementById('L').href="Home.html";


document.getElementById('M').href="Home.html";


function downloadPDF() {
    // Get the source URL of the PDF
    var pdfSrc = document.querySelector('.bt button').getAttribute('src');
    
    // Create an anchor element
    var link = document.createElement('a');
    
    // Set the href attribute to the PDF source
    link.href = pdfSrc;
    
    // Set the download attribute to force download
    link.download = 'Aavash_Pudasaini_CV.pdf';
    
    // Append the anchor element to the body
    document.body.appendChild(link);
    
    // Trigger a click event on the anchor element
    link.click();
    
    // Remove the anchor element from the body
    document.body.removeChild(link);
  }

  function Loadlink(){
    var link= "https://www.facebook.com/"
    window.location.href = link;
  }
  function Linkload(){
    var link= "https://www.instagram.com/"
    window.location.href = link;
  }