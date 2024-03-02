const questions = [
    {
        question:"लोकतांत्रिक समाजवाद का लक्ष्य है:",
        answers: [
            { text: "लोकतांत्रिक तरीकों के माध्यम से समाजवाद लाने के लिए ", correct: true},
            { text: "हिंसक तरीकों के माध्यम से समाजवाद लाने के लिए ", correct: false},
            { text: "शांतिपूर्ण तरीके से समाजवाद लाने के लिए", correct: false},
            { text: "उपर्युक्त में से एक से अधिक ", correct: false},
        ] 
    },

    {
        question:"भारत की संविधान सभा की स्थापना किसके अंतर्गत की गई?",
        answers: [
            { text: " अनंतिम सरकार के एक संकल्प के माध्यम से", correct: false},
            { text: " कैबिनेट मिशन योजना, 1946 के अंतर्गत ", correct: true},
            { text: "भारतीय स्वतंत्रता अधिनियम, 1947 के अंतर्गत  ", correct: false},
            { text: "उपर्युक्त में से एक से अधिक  ", correct: false},
        ] 
    },

    {
        question:"गुफा के बारे में प्लेटो के रूपक का उद्देश्य निम्नलिखित में से क्या बताना है?",
        answers: [
            { text: "आदर्श राज्य की संरचना", correct: false},
            { text: "आत्मज्ञान और वास्तविकता को समझने की प्रक्रिया", correct: true},
            { text: "लोकतंत्र का महत्व", correct: false},
            { text: "अत्याचार के खतरे", correct: false},
        ] 
    },

    {
        question:"___________ व्यक्तियों और संगठनों के अधिकारों और कर्तव्यों को परिभाषित करता है।",
        answers: [
            { text: "आपराधिक कानून", correct: false},
            { text: "नागरिक कानून", correct: true},
            { text: "सेवा कानून", correct: false},
            { text: " नैतिक कानून", correct: false},
        ] 
    },

    {
        question:"राष्ट्रपति द्रौपदी मुर्मू ने डॉ. न्यायमूर्ति धनंजय यशवंत चंद्रचूड़ को भारत का _______ मुख्य न्यायाधीश नियुक्त किया है।",
        answers: [
            { text: "50वां", correct: true},
            { text: "51वां ", correct: false},
            { text: "48वां ", correct: false},
            { text: " 49वां", correct: false},
        ] 
    },

    {
        question:"भारत में, जब संविधान के उल्लंघन के लिए राष्ट्रपति पर महाभियोग चलाया जाता है, तो _________ द्वारा आरोप लगाया जाता है",
        answers: [
            { text: "केंद्रीय मंत्रिपरिषद", correct: false},
            { text: "केवल लोकसभा", correct: false},
            { text: "संसद का कोई भी सदन", correct: true},
            { text: "केवल राज्यसभा", correct: false},
        ] 
    },

    {
        question:"1998 में भारत द्वारा पोखरण में किए गए परमाणु परीक्षणों का कोड नाम क्या था?",
        answers: [
            { text: "ऑपरेशन डेजर्ट स्टॉर्म", correct: false},
            { text: "ऑपरेशन विजय", correct: false},
            { text: "ऑपरेशन शक्ति", correct: true},
            { text: "ऑपरेशन काबूम", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित्त में से कौन-सा युग्म सुमेलित नहीं है?",
        answers: [
            { text: "243 R - नगर पालिकाओं की संरचना का उल्लेख", correct: false},
            { text: "243 ZC - जिला योजना समिति का गठन", correct: true},
            { text: "243 S - वार्ड समितियों का गठन व संरचना", correct: false},
            { text: "243 ZE - महानगर योजना समिति का गठन", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन “प्रिंसिपल्स ऑफ़ पॉलिटिकल इकॉनोमी” का लेखक है?",
        answers: [
            { text: "जोसेफ शंपेटर", correct: false},
            { text: "जॉन स्टुअर्ट मिल", correct: true},
            { text: "मिल्टन फ्रीडमैन", correct: false},
            { text: "डेविड रिकार्डो", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सा/से सही नहीं है?",
        answers: [
            { text: " पहली पंचवर्षीय योजना - 1951-1956", correct: false},
            { text: "तीसरी पंचवर्षीय योजना - 1966-1971", correct: true},
            { text: "छठी पंचवर्षीय योजना - 1980-1985 ", correct: false},
            { text: "दसवीं पंचवर्षीय योजना - 2002-2007", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सी रॉल्स के न्याय-सिद्धान्त से संबंधित शब्दावली नहीं है?",
        answers: [
            { text: "अज्ञान का पर्दा", correct: false},
            { text: "मूल स्थिति", correct: false},
            { text: "विशेष पूर्वताक्रम", correct: false},
            { text: "लॉकीय पंखुक", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सी भारत में जाति व्यवस्था की विशेषता नहीं है?",
        answers: [
            { text: "जाति जन्म से निर्धारण होती है।", correct: false},
            { text: "जाति समूह अंतर्विवाही हैं", correct: false},
            { text: "जाति समूह बहिर्विवाही हैं", correct: true},
            { text: "जाति सदस्यता में खाने और खाना बॉंटने से संबंधित नियम शामिल होते हैं।", correct: false},
        ] 
    },

    {
        question:"थॉमस हॉब्स ने निम्नलिखित में से किससे प्राप्त अभिधारणा के आधार पर अपने राजनीतिक दर्शन का निर्माण किया है?",
        answers: [
            { text: "प्राकृतिक विज्ञान के सिद्धान्त", correct: true},
            { text: "सामाजिक विज्ञान", correct: false},
            { text: "धर्मविज्ञान", correct: false},
            { text: "तत्त्वमीमांसा", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से कौन सा युग्म सुमेलित नहीं है",
        answers: [
            { text: "राज्य में असीमित शक्ति एक केंद्रीय सत्ता में निवास करती है - जीन बोदां। ", correct: false},
            { text: "एक राजनीतिक समुदाय में जनता संप्रभु होती है - रूसो। ", correct: false},
            { text: "सुनिश्चित प्राधिकार, शक्ति का असीमित स्रोत होती है - ऑस्टिन। ", correct: false},
            { text: "एक संप्रभु राज्य सामूहिक हित का प्रतिनिधित्व करता है - कार्ल मार्क्स। ", correct: true},
        ] 
    },

    {
        question:"भारत के प्रवासी नागरिकों (ओसीआई) को अप्रवासी भारतीयों (एनआरआई) के साथ समानता का लाभ लेने की अनुमति दी जाती है?",
        answers: [
            { text: "भारत में एक निजी पेशे का अभ्यास करना", correct: true},
            { text: "मतदाता के रूप में पंजीकरण की अनुमति है", correct: false},
            { text: "सार्वजनिक रोजगार में अवसर की समानता", correct: false},
            { text: "राज्य में असीमित शक्ति", correct: false},
        ] 
    },

    {
        question:"भारतीय संविधान मान्यता देता है।",
        answers: [
            { text: "सभी लोग बराबर हैं।", correct: true},
            { text: "सभी लोग समान नहीं हैं। ", correct: false},
            { text: "सभी लोग आर्थिक रूप से समान हैं। ", correct: false},
            { text: " इनमें से कोई नहीं।", correct: false},
        ] 
    },

    {
        question:"विधानसभा में बहुमत दल के नेता को क्या कहते हैं ?",
        answers: [
            { text: "प्रधानमंत्री", correct: false},
            { text: "मुख्यमंत्री", correct: true},
            { text: "राष्ट्रपति ", correct: false},
            { text: " विधायक", correct: false},
        ] 
    },

    {
        question:"जनता का प्रतिनिधित्व कौन करता है ?",
        answers: [
            { text: "विधान सभा", correct: true},
            { text: "विधायक", correct: true},
            { text: "राजनेता", correct: false},
            { text: "मुख्यमंत्री", correct: false},
        ] 
    },

    {
        question:"विधान सभा के सदस्य ________ द्वारा चुने जाते हैं।",
        answers: [
            { text: "केंद्र सरकार", correct: false},
            { text: "राष्ट्रपति", correct: false},
            { text: "लोगों", correct: true},
            { text: "राज्यपाल", correct: false},
        ] 
    },

    {
        question:"इनमें से शासन का कौन-सा स्तर है ?",
        answers: [
            { text: "स्थानीय स्तर", correct: false},
            { text: "राज्य स्तर", correct: false},
            { text: "केंद्रीय स्तर", correct: false},
            { text: "उपरोक्त सभी", correct: true},
        ] 
    },

    {
        question:"राज्य का प्रमुख क्या कहलाता है ?",
        answers: [
            { text: "प्रधानमंत्री", correct: false},
            { text: "राज्यपाल", correct: true},
            { text: "मुख्यमंत्री", correct: false},
            { text: "राष्ट्रपति", correct: false},
        ] 
    },

    {
        question:"कार्यपालिका का मुखिया कौन होता है ?",
        answers: [
            { text: "राज्यपाल", correct: false},
            { text: "राष्ट्रपति", correct: false},
            { text: "मंत्री", correct: false},
            { text: "मुख्यमंत्री", correct: true},
        ] 
    },

    {
        question:"राज्यपाल की नियुक्ति ________ द्वारा की जाती है।",
        answers: [
            { text: "राज्य सरकार", correct: false},
            { text: "सांसद", correct: false},
            { text: "केंद्र सरकार", correct: false},
            { text: "राष्ट्रपति", correct: true},
        ] 
    },

    {
        question:"शासन कितने स्तरों पर काम करता है ?",
        answers: [
            { text: "तीन स्तरों पर", correct: true},
            { text: "चार स्तरों पर", correct: false},
            { text: "पाँच स्तरों पर", correct: false},
            { text: "छह स्तरों पर", correct: false},
        ] 
    },

    {
        question:"विधान सभा का प्रमुख कौन होता है?",
        answers: [
            { text: "विधायक", correct: false},
            { text: "सांसद", correct: false},
            { text: "मुख्यमंत्री", correct: true},
            { text: "वक्ता", correct: false},
        ] 
    },

    {
        question:"………. राज्य में राष्ट्रपति के प्रतिनिधि के रुप में कार्य करता है",
        answers: [
            { text: "मुख्यमंत्री", correct: false},
            { text: "स्पीकर", correct: false},
            { text: "राज्यपाल", correct: true},
            { text: "विधायक", correct: false},
        ] 
    },

    {
        question:"निर्वाचित प्रतिनिधियों को क्या नाम दिया गया है जो सत्ताधारी दल के सदस्य नहीं हैं?",
        answers: [
            { text: "निर्वाचन क्षेत्र", correct: false},
            { text: "विधायक", correct: false},
            { text: "अल्पसंख्यक", correct: false},
            { text: "विरोधी ", correct: true},
        ] 
    },

    {
        question:"गठबंधन से आप क्या समझते हैं?",
        answers: [
            { text: "समान हित साझा करने वाले श्रमिकों का समूह।", correct: false},
            { text: "गरीब किसानों का समूह।", correct: false},
            { text: "एक साथ काम कर रहे दलों का समूह।", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"मुख्यमंत्री किसका चयन करता है ?",
        answers: [
            { text: "नेताओं का", correct: false},
            { text: "मंत्रियों का ", correct: true},
            { text: "जनता का ", correct: false},
            { text: " लोगों का", correct: false},
        ] 
    },

    {
        question:"राज्यपाल किनकी नियुक्ति करता है ?",
        answers: [
            { text: "मुख्यमंत्री की", correct: false},
            { text: "अन्य मंत्रियों की", correct: false},
            { text: "(a) और (b) दोनों", correct: true},
            { text: "कोई नहीं", correct: false},
        ] 
    },

    {
        question:" लोकतंत्र में किसका मुख्यतः शासन होता है ?",
        answers: [
            { text: " नेता", correct: false},
            { text: "मंत्री", correct: false},
            { text: "जनता", correct: true},
            { text: "राजनेता", correct: false},
        ] 
    },

    {
        question:"कौन सरकार द्वारा किये जा रहे कार्यो के बारे में जानकारी प्राप्त करने में सहायक होता है ?",
        answers: [
            { text: "प्रेस-वार्ता", correct: true},
            { text: "राज्यपाल", correct: false},
            { text: "मुख्यमंत्री", correct: false},
            { text: "न्यायधीश", correct: false},
        ] 
    },

    {
        question:"भारतीय संविधान में कितने मौलिक अधिकार दिए गए है ?",
        answers: [
            { text: "7", correct: false},
            { text: "6", correct: true},
            { text: "5", correct: false},
            { text: "4", correct: false},
        ] 
    },

    {
        question:"भारत में महिलाओं में साक्षरता दर _________ है।",
        answers: [
            { text: "45 प्रतिशत", correct: false},
            { text: "50 प्रतिशत", correct: false},
            { text: "60 प्रतिशत", correct: false},
            { text: "60 प्रतिशत", correct: true},
        ] 
    },

    {
        question:"सभी लोकतंत्रों का आवश्यक पहलू क्या है ?",
        answers: [
            { text: "सार्वभौमिक वयस्क मताधिकार", correct: true},
            { text: "सार्वभौमिक अवयस्क मताधिकार", correct: false},
            { text: "असमानता", correct: false},
            { text: "गठबंधन", correct: false},
        ] 
    },

    {
        question:"मौलिक कर्तव्य भारतीय संविधान में कितने हैं ?",
        answers: [
            { text: "12", correct: false},
            { text: "11", correct: true},
            { text: "10", correct: false},
            { text: "9", correct: false},
        ] 
    },

    {
        question:"नागरिक अधिकार अधिनियम कब पारित किया गया था?",
        answers: [
            { text: "1955", correct: false},
            { text: "1972", correct: false},
            { text: "1980", correct: false},
            { text: "1964", correct: true},
        ] 
    },

    {
        question:"मौलिक अधिकार किस अनुच्छेद में आते हैं ?",
        answers: [
            { text: "अनुच्छेद 13 से 35", correct: true},
            { text: "अनुच्छेद 14 से 30", correct: false},
            { text: "अनुच्छेद 16 से 30", correct: false},
            { text: "अनुच्छेद 17 से 36", correct: false},
        ] 
    },

    {
        question:"भारतीय ….. सब व्यक्तियों को समान मानता है",
        answers: [
            { text: "चुनाव आयोग", correct: false},
            { text: "प्रदेश", correct: false},
            { text: "आचार संहिता", correct: false},
            { text: "संविधान", correct: true},
        ] 
    },

    {
        question:"लोकसभा में निर्वाचित महिला सदस्यों का प्रतिशत _______ में पहली बार अपनी कुल ताकत का 10 प्रतिशत पार कर गया था।",
        answers: [
            { text: "1999", correct: false},
            { text: "2008", correct: false},
            { text: "2009", correct: true},
            { text: "1909", correct: false},
        ] 
    },

    {
        question:"दुनिया के विभिन्न क्षेत्रों में राष्ट्रीय संसदों में महिलाओं के प्रतिनिधित्व का विश्व औसत ___________ है।",
        answers: [
            { text: "लगभग 19%", correct: true},
            { text: "लगभग 50%", correct: false},
            { text: "लगभग 40%", correct: false},
            { text: "लगभग 30%", correct: false},
        ] 
    },

    {
        question:"______ क्षेत्र में उनके राष्ट्रीय संसदों में महिलाओं का उच्चतम प्रतिनिधित्व है।",
        answers: [
            { text: "प्रशांत", correct: false},
            { text: "अमेरिका", correct: false},
            { text: "मध्य-पूर्व", correct: false},
            { text: "नॉर्डिक देश", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा कथन सत्य है?",
        answers: [
            { text: "प्रत्येक सामाजिक अंतर सामाजिक विभाजन का कारण नहीं बनता है।", correct: false},
            { text: "सामाजिक मतभेद समान लोगों को एक दूसरे से विभाजित करते हैं, लेकिन वे बहुत अलग लोगों को भी एकजुट करते हैं", correct: false},
            { text: "विभिन्न सामाजिक समूहों से संबंधित लोग अपने समूहों की सीमाओं को काटते हुए मतभेदों और समानताओं को साझा करते हैं।", correct: false},
            { text: "उपरोक्त सभी।", correct: true},
        ] 
    },

    {
        question:"स्थानीय सरकारी निकायों में, पंचायतों और नगर पालिकाओं में ___________ सीटें अब महिलाओं के लिए आरक्षित हैं।",
        answers: [
            { text: "तीन-चौथाई", correct: false},
            { text: "एक तिहाई", correct: true},
            { text: "एक-चौथाई", correct: false},
            { text: "एक-पांचवां", correct: false},
        ] 
    },

    {
        question:"____________ कहा करते थे कि धर्म को कभी भी राजनीति से अलग नहीं किया जा सकता। उनका मानना था कि राजनीति को धर्म से ली गई नैतिकता द्वारा निर्देशित किया जाना चाहिए।",
        answers: [
            { text: "सी राजगोपालाचारी", correct: false},
            { text: "सरदार पटेल", correct: false},
            { text: " गांधीजी", correct: true},
            { text: "नेहरू", correct: false},
        ] 
    },

    {
        question:"सांप्रदायिक राजनीति के बारे में निम्नलिखित में से कौन सा कथन सत्य है?",
        answers: [
            { text: "राज्य शक्ति का उपयोग एक धार्मिक समूह का शेष भाग पर वर्चस्व स्थापित करने के लिए किया जाता है।", correct: false},
            { text: "एक धर्म की मान्यताओं को अन्य धर्मों की मान्यताओं से श्रेष्ठ के रूप में प्रस्तुत किया जाता है।", correct: false},
            { text: "साम्प्रदायिक राजनीति इस विचार पर आधारित है कि धर्म एक सामाजिक समुदाय का प्रमुख आधार है।", correct: false},
            { text: "उपरोक्त सभी।", correct: true},
        ] 
    },

    {
        question:"वे कानून __________ हैं जो परिवार से संबंधित मामलों जैसे विवाह, तलाक, गोद लेने, विरासत आदि से निपटते हैं।",
        answers: [
            { text: "पारिवारिक कानून", correct: false},
            { text: "धार्मिक कानून", correct: false},
            { text: "सामुदायिक कानून", correct: true},
            { text: "राज्य के कानून", correct: false},
        ] 
    },

    {
        question:" _______ में कोई आधिकारिक धर्म नहीं है।",
        answers: [
            { text: "श्रीलंका", correct: false},
            { text: "इंग्लैंड", correct: false},
            { text: "पाकिस्तान", correct: false},
            { text: "भारत", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा कथन सत्य है?",
        answers: [
            { text: "भारत का संविधान राज्य को धार्मिक समुदायों के भीतर समानता सुनिश्चित करने के लिए धर्म के मामलों में हस्तक्षेप करने की अनुमति देता है।", correct: false},
            { text: "संविधान धर्म के आधार पर भेदभाव का निषेध करता है।", correct: false},
            { text: "संविधान सभी व्यक्तियों और समुदायों को किसी भी धर्म को मानने, उसका अभ्यास करने और उसका प्रचार करने या किसी धर्म का पालन न करने की स्वतंत्रता प्रदान करता है।", correct: false},
            { text: "उपरोक्त सभी।", correct: true},
        ] 
    },

    {
        question:"विभिन्न राज्य विधानसभाओं में महिलाओं का प्रतिनिधित्व ____________ है।",
        answers: [
            { text: "5% से कम", correct: true},
            { text: "5% से अधिक", correct: false},
            { text: "10% से अधिक", correct: false},
            { text: "20% से अधिक", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 