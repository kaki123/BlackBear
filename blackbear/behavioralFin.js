function DisplayQuestions() {
    var Questions = new Array(20);
    Questions[0] = "Question #1";
    Questions[1] = "Question #2";
    Questions[2] = "Question #3";
    Questions[3] = "Question #4";
    Questions[4] = "Question #5";
    Questions[5] = "Question #6";
    Questions[6] = "Question #7";
    Questions[7] = "Question #8";
    Questions[8] = "Question #9";
    Questions[9] = "Question #10";
    
    var QCount = 0;
 
    while (QCount < 10) {
       QNumber = Math.round(10 * Math.random());
       if (null != Questions[QNumber]) {
      alert("Question number " + QCount + " = " + Questions[QNumber]);
      QCount++;
      Questions[QNumber] = null; // Dump this question - it's been displayed
       }
    }
 }