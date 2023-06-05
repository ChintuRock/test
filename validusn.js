function validateUSN() {
    const usnInput = document.getElementById('usnInput');
    const usn = usnInput.value;
  
    // Regular expression pattern to validate VTU USN
    const usnPattern = /^1[V-v][S-s]\d{2}[A-Za-z]{2}\d{3}$/;
  
    if (usnPattern.test(usn)) {
      alert('Valid USN');
    } else {
      alert('Invalid USN');
    }
  }
  